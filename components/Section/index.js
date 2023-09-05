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
        <StyledLinkSmooth href={"#topRated"}>Top bewertet</StyledLinkSmooth>
        <StyledLinkSmooth href={"#newIn"}>Neu</StyledLinkSmooth>
        <StyledLinkSmooth href={"#arabica"}>100% Arabica</StyledLinkSmooth>
        <StyledLinkSmooth href={"#robusta"}>100% Robusta</StyledLinkSmooth>
      </StyledDivButtonWrapperVariant>
      <StyledSectionWrapper>
        <StyledSectionUnder>
          <StyledHeadingSection id="topRated">
            Top bewertet
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
        <StyledHeadingSection id="newIn">Neu hinzugefügt</StyledHeadingSection>
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
          <StyledHeadingSection id="arabica">100% Arabica</StyledHeadingSection>
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
        <StyledHeadingSection id="robusta">100% Robusta</StyledHeadingSection>
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
