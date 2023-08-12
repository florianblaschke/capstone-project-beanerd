import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { StyUl, StyLi } from "@/pages";
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
  const { data, isLoading, mutate } = useSWR(`/api/user/${id}`, fetcher);

  if (isLoading) return <h1>Loading</h1>;

  console.log(data);

  console.log(data.relatedMethods.length);
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

    if (!res.ok) {
      return alert("Mist! Kaffee über die Füße gekippt!");
    }

    mutate();
    setEdit(!edit);
  }

  function submitRating(event) {
    event.preventDefault();
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
        score={data.pickedRoast.score}
        edit={edit}
        setEdit={() => setEdit(!edit)}
        rateEdit={rateEdit}
        setRateEdit={() => setRateEdit(!rateEdit)}
        submitRating={submitRating}
      />
      {edit && <BrewMethodsForm onSubmit={addBrewMethod} />}
      {data.relatedMethods.length > 0 ? (
        <StyUlMethod>
          {data.relatedMethods.map((method) => (
            <StyLi key={method._id}>
              <BrewMethod
                method={method.method}
                coffee={method.coffee}
                water={method.water}
                time={method.time}
                grind={method.grind}
              />
            </StyLi>
          ))}
        </StyUlMethod>
      ) : (
        "Du hast noch keine Brühmethode für diesen Kaffee!"
      )}
    </>
  );
}

const StyUlMethod = styled.ul`
  list-style: none;
  padding: 12px;
  margin: 0px;
`;
