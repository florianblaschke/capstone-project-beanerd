import Head from "next/head";
import { Roboto } from "next/font/google";
import RoastCard from "@/components/RoastCard";
import useSWR from "swr";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, isLoading } = useSWR("api/roasts", fetcher);

  if (isLoading) return <h1>... is Loading</h1>;
  return (
    <>
      <Head>
        <title>BeaNerd</title>
        <meta name="description" content="Florian Capstone Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data.map((roast) => (
        <RoastCard
          key={roast._id}
          name={roast.name}
          roaster={roast.roaster}
          score={roast.score}
        />
      ))}
    </>
  );
}
