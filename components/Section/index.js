import Link from "next/link";
import RoastCard from "../RoastCard";
import {
  StyledList,
  StyledItem,
  StyledSectionWrapper,
  StyledSectionOver,
  StyledSectionUnder,
  StyledHeadingSection,
  StyledLinkSmooth,
  StyledDivButtonWrapperVariant,
  StyledLinkVariant,
  StyledParagraph,
} from "@/lib/styled-components";

export default function Sections({
  arabica,
  robusta,
  newIn,
  topRated,
  favorites,
  session,
}) {
  return (
    <>
      <StyledDivButtonWrapperVariant>
        Willkommen bei Beanerd! Suchst du etwas Bestimmtes?
        <StyledLinkSmooth href={"#topRated"} scroll={false}>
          Top bewertet
        </StyledLinkSmooth>
        <StyledLinkSmooth href={"#newIn"} scroll={false}>
          Neu
        </StyledLinkSmooth>
        <StyledLinkSmooth href={"#arabica"} scroll={false}>
          100% Arabica
        </StyledLinkSmooth>
        <StyledLinkSmooth href={"#robusta"} scroll={false}>
          100% Robusta
        </StyledLinkSmooth>
      </StyledDivButtonWrapperVariant>
      <StyledSectionWrapper>
        <StyledSectionUnder>
          <StyledHeadingSection id="topRated">
            <StyledLinkVariant
              href={{
                pathname: "/search",
                query: { value: "topRated" },
              }}
            >
              Top bewertet
              <StyledParagraph>Klicken, um alle anzuzeigen</StyledParagraph>
            </StyledLinkVariant>
          </StyledHeadingSection>
          <StyledList>
            {topRated.map((roast, i) =>
              i >= 3 ? null : (
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
              )
            )}
          </StyledList>
        </StyledSectionUnder>
      </StyledSectionWrapper>
      <StyledSectionOver>
        <StyledHeadingSection id="newIn">
          <StyledLinkVariant
            href={{ pathname: "/search", query: { value: "newIn" } }}
          >
            Neu hinzugefügt
            <StyledParagraph>Klicken, um alle anzuzeigen</StyledParagraph>
          </StyledLinkVariant>
        </StyledHeadingSection>
        <StyledList>
          {newIn.map((roast, i) =>
            i >= 3 ? null : (
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
            )
          )}
        </StyledList>
      </StyledSectionOver>
      <StyledSectionWrapper>
        <StyledSectionUnder>
          <StyledHeadingSection id="arabica">
            <StyledLinkVariant
              href={{ pathname: "/search", query: { value: 100 } }}
            >
              100% Arabica
              <StyledParagraph>Klicken, um alle anzuzeigen</StyledParagraph>
            </StyledLinkVariant>
          </StyledHeadingSection>
          <StyledList>
            {arabica.map((roast, i) =>
              i >= 3 ? null : (
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
              )
            )}
          </StyledList>
        </StyledSectionUnder>
      </StyledSectionWrapper>
      <StyledSectionOver>
        <StyledHeadingSection id="robusta">
          <StyledLinkVariant
            href={{ pathname: "/search", query: { value: 0 } }}
          >
            100% Robusta
            <StyledParagraph>Klicken, um alle anzuzeigen</StyledParagraph>
          </StyledLinkVariant>
        </StyledHeadingSection>
        <StyledList>
          {robusta.map((roast, i) =>
            i >= 3 ? null : (
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
            )
          )}
        </StyledList>
      </StyledSectionOver>
    </>
  );
}
