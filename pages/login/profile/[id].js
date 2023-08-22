import { useRouter } from "next/router";
import { useState } from "react";
import { getSession } from "next-auth/react";
import { StyledList, StyledItem } from "@/lib/styled-components";
import { useToast } from "@/components/Modals/Toast/toastContext";
import BrewMethodsForm from "@/components/BrewmethodsForm";
import RoastDetailCardProfile from "@/components/RoastDetailCardProfile";
import BrewMethod from "@/components/Methods";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailProfile() {
  const [edit, setEdit] = useState(false);
  const [rateEdit, setRateEdit] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const toast = useToast();
  const { data, isLoading, mutate } = useSWR(`/api/user/${id}`, fetcher);

  if (isLoading) return <h1>Loading</h1>;
  if (!data) return <h1>Den Kaffee gibts wohl nicht ...</h1>;

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
      return toast.errorToast("Mist! Kaffee über die Füße gekippt!");
    }
    toast.successToast("Brühmethode erfolgreich gespeichert!");
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
      return toast.errorToast(
        "Dein Rating passt uns nicht! Eine Zahl von 0 - 100!"
      );
    }
    if (res.status === 202) {
      setRateEdit(!rateEdit);
      mutate();
      return toast.successToast("Dein Rating wurde erfolgreich angepasst!");
    }
    if (res.status === 201) {
      setRateEdit(!rateEdit);
      mutate();
      return toast.successToast("Dein Rating wurde erfolgreich gespeichert!");
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
      {edit && <BrewMethodsForm onSubmit={addBrewMethod} />}
      {data.relatedMethods.length > 0 ? (
        <StyledList>
          {data.relatedMethods.map((method) => (
            <StyledItem key={method._id}>
              <BrewMethod
                method={method.method}
                coffee={method.coffee}
                water={method.water}
                time={method.time}
                grind={method.grind}
              />
            </StyledItem>
          ))}
        </StyledList>
      ) : (
        "Du hast noch keine Brühmethode für diesen Kaffee!"
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
