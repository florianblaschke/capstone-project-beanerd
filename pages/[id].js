import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/Modals/Toast/toastProvider";
import LoadingAnimation from "@/components/Modals/LoadingAnimation";
import useSWR from "swr";
import RoastDetailCard from "@/components/RoastDetailCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Detail() {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const toast = useToast();
  const { data, isLoading } = useSWR(`api/roasts/${id}`, fetcher);
  const {
    data: favorites,
    isLoading: favoritesLoading,
    mutate,
  } = useSWR(session ? "api/user" : null, fetcher);
  if (isLoading || favoritesLoading) return <LoadingAnimation />;
  if (!data) return <h1>Den Kaffee gibts wohl nicht ...</h1>;

  const isFavorite =
    session && favorites.roasts.some((roast) => roast._id === id);

  async function addToFavorites() {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    });

    if (res.status === 418) {
      return toast.errorToast("This roast is already a favorite!");
    }

    if (res.status === 500) {
      return toast.errorToast(
        "Ouch! The steam wand went Expelliarmus on us! Need to try again!"
      );
    }

    if (res.ok) {
      mutate();
      return toast.successToast("Added to favorites!");
    }
  }

  return (
    <>
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
        isFavorite={isFavorite}
      />
    </>
  );
}
