import Head from "next/head";
import RoastCard from "@/components/RoastCard";
import { StyledList, StyledItem } from "@/lib/styled-components";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data: session } = useSession();
  const { data, isLoading } = useSWR("api/roasts", fetcher);
  const { data: favorites, isLoading: favoritesLoading } = useSWR(
    () => (session ? "api/user" : null),
    fetcher
  );
  if (isLoading || favoritesLoading) return <h1>... is Loading</h1>;

  function isFavorite(id) {
    if (session) {
      return favorites.roasts.some((roast) => roast._id === id);
    } else return false;
  }

  return (
    <>
      <Head>
        <title>BeaNerd</title>
        <meta name="description" content="Florian Capstone Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledList>
        {data.map((roast) => (
          <StyledItem key={roast._id}>
            <RoastCard
              id={roast._id}
              isFavorite={isFavorite(roast._id)}
              name={roast.name}
              roaster={roast.roaster}
              score={roast.score.map(({ rating }) => rating)}
            />
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
}
