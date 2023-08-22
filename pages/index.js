import Head from "next/head";
import RoastCard from "@/components/RoastCard";
import { StyledList, StyledItem } from "@/lib/styled-components";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
console.log(test);

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
      <StyledList>
        {data.map((roast) => (
          <StyledItem key={roast._id}>
            <RoastCard
              id={roast._id}
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
