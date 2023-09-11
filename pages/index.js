import Head from "next/head";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import Sections from "@/components/Section";
import {
  roastsWithReducedScore as scoreForRoast,
  shuffle,
  sortedForRatingDesc,
} from "@/lib/functions";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data: session } = useSession();
  const { data, isLoading } = useSWR("api/roasts", fetcher);
  const { data: favorites, isLoading: favoritesLoading } = useSWR(
    session ? "api/user" : null,
    fetcher
  );
  if (isLoading || favoritesLoading) return <h1>... is Loading</h1>;

  const roastsWithReducedScore = scoreForRoast(data);
  const arabica = data.filter(({ arabica }) => arabica === 100);
  const robusta = data.filter(({ robusta }) => robusta === 100);
  const topRated = sortedForRatingDesc(roastsWithReducedScore);
  const newIn = data.toReversed();

  return (
    <>
      <Head>
        <title>BeaNerd</title>
        <meta name="description" content="Florian Capstone Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sections
        arabica={shuffle(arabica)}
        robusta={shuffle(robusta)}
        newIn={newIn}
        topRated={topRated}
        favorites={favorites}
        session={session}
      />
    </>
  );
}
