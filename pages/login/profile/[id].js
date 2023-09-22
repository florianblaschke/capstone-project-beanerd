import { useRouter } from "next/router";
import { useState } from "react";
import { getSession } from "next-auth/react";
import {
  StyledList,
  StyledItem,
  StyledSimpleDiv,
  StyledPlaceholder,
} from "@/lib/styled-components";
import LoadingAnimation from "@/components/Modals/LoadingAnimation";
import { useToast } from "@/components/Modals/Toast/toastProvider";
import SwipeToDelete from "@/components/Modals/SwipeToDelete";
import BrewMethodsForm from "@/components/BrewmethodsForm";
import RoastDetailCardProfile from "@/components/RoastDetailCardProfile";
import BrewMethod from "@/components/Methods";
import EditBrewMethodForm from "@/components/BrewmethodsForm/edit";
import Window from "@/components/Modals/Window/window";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailProfile() {
  const [edit, setEdit] = useState(false);
  const [rateEdit, setRateEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pickedRecipe, setPickedRecipe] = useState();
  const router = useRouter();
  const { id } = router.query;
  const toast = useToast();
  const { data, isLoading, mutate } = useSWR(`/api/user/${id}`, fetcher);

  if (isLoading) return <LoadingAnimation />;
  if (!data) return <h1>Den Kaffee gibts wohl nicht ...</h1>;

  function showClickedRecipe(id) {
    setShowModal(true);
    setPickedRecipe(data.relatedMethods.find(({ _id }) => _id === id));
  }

  async function addBrewMethod(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.roastIdForMethod = id;

    const res = await fetch(`/api/user/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.status === 418) {
      return toast.errorToast("I am watching you, Ernst!");
    }
    if (!res.ok) {
      return toast.errorToast("Darn! Spilled coffee over my feet!");
    }
    toast.successToast("Recipe saved!");
    mutate();
    setEdit(!edit);
  }

  async function submitRating(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const res = await fetch(`/api/user/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      return toast.errorToast("Commit your rating between 0 and 100!");
    }
    if (res.status === 202) {
      setRateEdit(!rateEdit);
      mutate();
      return toast.successToast("Saved your adjusted rating!");
    }
    if (res.status === 201) {
      setRateEdit(!rateEdit);
      mutate();
      return toast.successToast("Saved your rating!");
    }
  }

  async function onChangeEntries(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const body = { ...data, id: pickedRecipe._id };
    const res = await fetch(`/api/methods`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return toast.errorToast("Something went wrong!");
    }

    if (res.ok) {
      setShowModal(!showModal);
      mutate();
      return toast.successToast("We saved your adjustments!");
    }
  }

  async function deleteBrewRecipe(id) {
    const res = await fetch(`/api/methods/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return toast.errorToast("Whoops! Try again...");
    }

    if (res.ok) {
      toast.successToast("Recipe deleted!");
      setShowModal(false);
      mutate();
    }
  }
  return (
    <>
      <RoastDetailCardProfile
        name={data.pickedRoast.name}
        roaster={data.pickedRoast.roaster}
        arabica={data.pickedRoast.arabica}
        robusta={data.pickedRoast.robusta}
        level={data.pickedRoast.level}
        provenance={data.pickedRoast.provenance}
        score={data.pickedRoast.score.map(({ rating }) => rating)}
        edit={edit}
        setEdit={() => setEdit(!edit)}
        rateEdit={rateEdit}
        setRateEdit={() => setRateEdit(!rateEdit)}
        submitRating={submitRating}
      />
      {edit && (
        <Window onClose={() => setEdit(false)}>
          <BrewMethodsForm onSubmit={addBrewMethod} />
        </Window>
      )}
      {data.relatedMethods.length > 0 ? (
        <StyledPlaceholder>
          <StyledList>
            {data.relatedMethods.map((method) => (
              <StyledItem key={method._id}>
                <SwipeToDelete onDelete={() => deleteBrewRecipe(method._id)}>
                  <BrewMethod
                    showModal={() => showClickedRecipe(method._id)}
                    method={method.method}
                    coffee={method.coffee}
                    water={method.water}
                    time={method.time}
                    grind={method.grind}
                  />
                </SwipeToDelete>
              </StyledItem>
            ))}
          </StyledList>
        </StyledPlaceholder>
      ) : (
        <StyledSimpleDiv>You have no recipes yet! Create one!</StyledSimpleDiv>
      )}
      {showModal && (
        <Window onClose={() => setShowModal(false)}>
          <EditBrewMethodForm
            onSubmit={onChangeEntries}
            method={pickedRecipe.method}
            coffee={pickedRecipe.coffee}
            water={pickedRecipe.water}
            time={pickedRecipe.time}
            grind={pickedRecipe.grind}
            onDelete={() => deleteBrewRecipe(pickedRecipe._id)}
          />
        </Window>
      )}
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return { props: { session } };
}
