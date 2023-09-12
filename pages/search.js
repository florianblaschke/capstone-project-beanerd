import RoastCard from "@/components/RoastCard";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import {
  StyledList,
  StyledItem,
  StyledInput,
  StyledLabel,
  StyledSlider,
  StyledSliderLabel,
  StyledButton,
  StyledParagraph,
  StyledDivSearch,
  StyledPlaceholder,
} from "@/lib/styled-components";
import { useState } from "react";
import { roastsWithReducedScore, sortedForRatingDesc } from "@/lib/functions";

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
  const [showAll, setShowAll] = useState(false);

  if (isLoading || favoritesLoading) return <h1>Loading...</h1>;

  function search(queryLink) {
    let result = [];
    let value = queryLink.value;
    if (value && query === "" && !showAll) {
      if (value === "100") {
        const arabica = data.filter(({ arabica }) => arabica === 100);
        result.push(...arabica);
      }
      if (value === "0") {
        const robusta = data.filter(({ arabica }) => arabica === 0);
        result.push(...robusta);
      }
      if (value === "topRated") {
        const roastScore = roastsWithReducedScore(data);
        const topRated = sortedForRatingDesc(roastScore);
        result.push(...topRated);
      }
      if (value === "newIn") {
        const newIn = data.toReversed();
        result.push(...newIn);
      }
      return result;
    }
    if (typeof query === "number" && !showAll) {
      const search = data.filter((roast) => roast.arabica === query);
      result.push(...search);
      return result;
    }
    if (typeof query === "string" && !showAll) {
      const search = data.filter(
        (roast) =>
          roast.name.toLowerCase().includes(query.toLowerCase()) ||
          roast.roaster.toLowerCase().includes(query.toLowerCase()) ||
          roast.provenance.toLowerCase().includes(query.toLowerCase())
      );
      result.push(...search);
      return result;
    }
    result.push(...data);
    return result;
  }

  const filtered = search(searchQueryLink);

  return (
    <>
      <StyledDivSearch>
        {!showAll && (
          <>
            <StyledLabel htmlFor="search">Suche:</StyledLabel>
            <StyledInput
              onChange={(event) => setQuery(event.target.value)}
              id="search"
              name="search"
              placeholder="Suche nach Name, Rösterei oder Herkunft!"
            />
            <StyledSliderLabel>
              Search for Ratio:{" "}
              {typeof query === "number"
                ? `${query}/${100 - query}`
                : "50 / 50"}
            </StyledSliderLabel>
            <StyledSlider
              type="range"
              min={0}
              max={100}
              step={10}
              defaultValue={50}
              onChange={(event) => setQuery(Number(event.target.value))}
            />
          </>
        )}
        <StyledButton onClick={() => setShowAll(!showAll)}>
          {showAll ? "Filtern" : "Zeig mir alle!"}
        </StyledButton>
        <StyledParagraph>
          Für deine Suche gibt es {filtered.length} Ergebnisse!
        </StyledParagraph>
      </StyledDivSearch>
      <StyledPlaceholder>
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
      </StyledPlaceholder>
    </>
  );
}
