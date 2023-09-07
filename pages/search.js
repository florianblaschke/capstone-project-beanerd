import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { StyledList, StyledItem } from "@/lib/styled-components";
import RoastCard from "@/components/RoastCard";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Search() {
  const { data: session } = useSession();
  const { data, isLoading } = useSWR("/api/roasts", fetcher);
  const router = useRouter();
  const searchQueryLink = router.query;
  const [query, setQuery] = useState("");

  if (isLoading) return <h1>Loading...</h1>;

  const filtered = data.filter((roast) =>
    roast.name.toLowerCase().includes(query.toLowerCase())
  );

  console.log(filtered);
  return (
    <>
      <StyledDiv>
        <label htmlFor="search">Was suchst du?</label>
        <input
          onChange={(event) => setQuery(event.target.value)}
          id="search"
          name="search"
        />
      </StyledDiv>
      <StyledList>
        {filtered.map((roast) => (
          <StyledItem key={roast._id}>
            <RoastCard
              id={roast._id}
              isFavorite={
                session &&
                favorites.roasts.some(
                  (roastEntry) => roastEntry._id === roast._id
                )
              }
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

const StyledDiv = styled.div`
  height: inherit;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`;
