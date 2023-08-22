import { useRouter } from "next/router";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/Modals/Toast/toastContext";
import useSWR from "swr";
import RoastDetailCard from "@/components/RoastDetailCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Detail() {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const [edit, setEdit] = useState(false);
  const toast = useToast();
  const { data, isLoading, mutate } = useSWR(`api/roasts/${id}`, fetcher);

  if (isLoading) return <h1>... is Loading</h1>;

  if (!data) return <h1>Den Kaffee gibts wohl nicht ...</h1>;

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
      toast.errorToast("Diesen Kaffee gibt es bereits!");
    }
    if (res.status === 401) {
      toast.errorToast("Da ist was schief gelaufen! Probiere es nochmal!");
    }

    if (res.ok) {
      toast.successToast("Änderungen gespeichert!");
      mutate();
      setEdit(!edit);
    }
  }

  async function addToFavorites() {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    });

    if (res.status === 418) {
      return toast.errorToast("Dieser Roast ist schon in deinen Favoriten!");
    }

    if (res.status === 500) {
      return toast.errorToast(
        "Aua! Da haben wir uns an der Dampflanze die Finger verbrannt und konnten deine Anfrage daher nicht bearbeiten!"
      );
    }

    if (res.ok) {
      return toast.successToast("Zu Favoriten hinzugefügt!");
    }
  }

  return (
    <RoastDetailCard
      edit={edit}
      setEdit={setEdit}
      onSubmit={handleEditRoast}
      onFavorite={addToFavorites}
      name={data.name}
      roaster={data.roaster}
      arabica={data.arabica}
      robusta={data.robusta}
      level={data.level}
      provenance={data.provenance}
      score={data.score.map(({ rating }) => rating)}
      session={session}
    />
  );
}
