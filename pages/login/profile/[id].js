import { useRouter } from "next/router";
import { useState } from "react";
import BrewMethodsForm from "@/components/BrewmethodsForm";
import RoastDetailCardProfile from "@/components/RoastDetailCardProfile";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailProfile() {
  const [edit, setEdit] = useState(false);
  const [rateEdit, setRateEdit] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, mutate } = useSWR(`/api/user/${id}`, fetcher);

  if (isLoading) return <h1>Loading</h1>;

  async function addBrewMethod(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    const res = await fetch(`/api/user/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      return alert("Mist! Kaffee über die Füße gekippt!");
    }

    mutate();
  }

  function submitRating(event) {
    event.preventDefault();
  }

  return (
    <>
      <RoastDetailCardProfile
        name={data.name}
        roaster={data.roaster}
        arabica={data.arabica}
        robusta={data.robusta}
        level={data.level}
        provenance={data.provenance}
        score={data.score}
        edit={edit}
        setEdit={() => setEdit(!edit)}
        rateEdit={rateEdit}
        setRateEdit={() => setRateEdit(!rateEdit)}
        submitRating={submitRating}
      />
      {edit && <BrewMethodsForm onSubmit={addBrewMethod} />}
    </>
  );
}