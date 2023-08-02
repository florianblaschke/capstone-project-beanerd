import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import RoastDetailCard from "@/components/RoastDetailCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Detail() {
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const { id } = router.query;
  const { data, isLoading, mutate } = useSWR(`api/roasts/${id}`, fetcher);

  if (isLoading) return <h1>... is Loading</h1>;

  function setMode() {
    setEdit(!edit);
  }

  async function handleEditRoast(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.arabica = Number(data.arabica);
    data.robusta = 100 - data.arabica;

    const res = await fetch(`api/roasts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.status === 400) {
      alert("This roast already exists");
    }
    if (res.status === 401) {
      alert("Something went wrong – please try again");
    }

    if (res.ok) {
      mutate();
      setMode();
    }
  }

  async function handleDeleteRoast() {
    const res = await fetch(`api/roasts/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.push("/");
    }
  }

  return (
    <RoastDetailCard
      edit={edit}
      setMode={setMode}
      onDelete={handleDeleteRoast}
      onSubmit={handleEditRoast}
      name={data.name}
      roaster={data.roaster}
      arabica={data.arabica}
      robusta={data.robusta}
      level={data.level}
      provenance={data.provenance}
      score={data.score}
    />
  );
}
