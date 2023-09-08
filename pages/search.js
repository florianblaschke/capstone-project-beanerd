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
  const { data: favorites, isLoading: favoritesLoading } = useSWR(
    session ? "api/user" : null,
    fetcher
  );
  const router = useRouter();
  const searchQueryLink = router.query;
  const [query, setQuery] = useState("");

  if (isLoading || favoritesLoading) return <h1>Loading...</h1>;

  function search(queryLink) {
    let result = [];
    let value = queryLink.value;
    if (value && query === "") {
      if (value === "100") {
        const arabica = data.filter(({ arabica }) => arabica === 100);
        result.push(...arabica);
      }
      if (value === "0") {
        const robusta = data.filter(({ arabica }) => arabica === 0);
        result.push(...robusta);
      }
      if (value === "topRated") {
        const roastsWithReducedScore = data.map((roast) => {
          if (roast.score.length === 0) return { ...roast, reducedScore: 0 };
          const reducedScore =
            roast.score
              .map(({ rating }) => rating)
              .reduce((acc, curr) => acc + curr, 0) / roast.score.length;
          return { ...roast, reducedScore: reducedScore };
        });
        const topRated = roastsWithReducedScore.sort(
          (a, b) => b.reducedScore - a.reducedScore
        );
        result.push(...topRated);
      }
      if (value === "newIn") {
        const newIn = data.toReversed();
        result.push(...newIn);
      }
      return result;
    }
    if (typeof query === "number") {
      const search = data.filter((roast) => roast.arabica === query);
      result.push(...search);
      return result;
    }
    if (typeof query === "string") {
      const search = data.filter(
        (roast) =>
          roast.name.toLowerCase().includes(query.toLowerCase()) ||
          roast.roaster.toLowerCase().includes(query.toLowerCase()) ||
          roast.provenance.toLowerCase().includes(query.toLowerCase())
      );
      result.push(...search);
      return result;
    }
  }
  const filtered = search(searchQueryLink);

  return (
    <>
      <StyledDiv>
        <label htmlFor="search">Was suchst du?</label>
        <input
          onChange={(event) => setQuery(event.target.value)}
          id="search"
          name="search"
        />
        <label>Nach Bohnenverhältnis suchen</label>
        <input
          type="range"
          min={0}
          max={100}
          step={10}
          onChange={(event) => setQuery(Number(event.target.value))}
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
