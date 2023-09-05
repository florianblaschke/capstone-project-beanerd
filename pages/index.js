import Head from "next/head";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import Sections from "@/components/Section";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data: session } = useSession();
  const { data, isLoading } = useSWR("api/roasts", fetcher);
  const { data: favorites, isLoading: favoritesLoading } = useSWR(
    session ? "api/user" : null,
    fetcher
  );
  if (isLoading || favoritesLoading) return <h1>... is Loading</h1>;

  const roastsWithReducedScore = data.map((roast) => {
    if (roast.score.length === 0) return { ...roast, reducedScore: 0 };
    const reducedScore =
      roast.score
        .map(({ rating }) => rating)
        .reduce((acc, curr) => acc + curr, 0) / roast.score.length;
    return { ...roast, reducedScore: reducedScore };
  });

  const arabica = data.filter(({ arabica }) => arabica === 100);
  const robusta = data.filter(({ robusta }) => robusta === 100);
  const topRated = roastsWithReducedScore.sort(
    (a, b) => b.reducedScore - a.reducedScore
  );
  const newIn = data.toReversed();

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

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
