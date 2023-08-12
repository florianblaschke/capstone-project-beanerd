import Head from "next/head";
import styled from "styled-components";
import RoastCard from "@/components/RoastCard";
import useSWR from "swr";

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
      <StyUl>
        {data.map((roast) => (
          <StyLi key={roast._id}>
            <RoastCard
              id={roast._id}
              name={roast.name}
              roaster={roast.roaster}
              score={roast.score}
            />
          </StyLi>
        ))}
      </StyUl>
    </>
  );
}

export const StyUl = styled.ul`
  list-style: none;
`;

export const StyLi = styled.li`
  margin: 12px 0px 12px 0px;
`;
