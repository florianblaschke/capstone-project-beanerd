import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/Modals/Toast/toastProvider";
import useSWR from "swr";
import RoastDetailCard from "@/components/RoastDetailCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Detail() {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const toast = useToast();
  const { data, isLoading } = useSWR(`api/roasts/${id}`, fetcher);

  if (isLoading) return <h1>... is Loading</h1>;

  if (!data) return <h1>Den Kaffee gibts wohl nicht ...</h1>;

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
