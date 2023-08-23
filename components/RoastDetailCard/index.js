import defaultPic from "@/public/default.jpg";
import { useRouter } from "next/router";
import {
  StyledDiv,
  StyledSectionVariant,
  StyledImageDetailVariant,
  StyledHeading,
  StyledParagraph,
  StyledRating,
  StyledNumberRating,
  StyledDivButtonWrapper,
  StyledButton,
} from "@/lib/styled-components";

export default function RoastDetailCard({
  name,
  roaster,
  arabica,
  robusta,
  level,
  provenance,
  score,
  session,
  onFavorite,
}) {
  const router = useRouter();

  return (
    <StyledDiv>
      <StyledImageDetailVariant
        priority={true}
        src={defaultPic}
        width={""}
        height={""}
        alt="Coffee-Package"
      />
      <StyledSectionVariant>
        <StyledHeading>{name}</StyledHeading>
        <StyledParagraph>{roaster}</StyledParagraph>
        <StyledHeading>Arabica / Robusta</StyledHeading>
        <StyledParagraph>
          {arabica} / {robusta}
        </StyledParagraph>
        <StyledHeading>Röstgrad</StyledHeading>
        <StyledParagraph>{level}</StyledParagraph>
        <StyledHeading>Herkunft</StyledHeading>
        <StyledParagraph>{provenance}</StyledParagraph>
        <StyledRating>
          Bewertung:{" "}
          {score.length > 0
            ? Math.floor(
                score.reduce((acc, curr) => acc + curr, 0) / score.length
              )
            : 0}
          /100
        </StyledRating>
        <StyledNumberRating>
          {score.length} {score.length === 1 ? "Bewertung" : "Bewertungen"}
        </StyledNumberRating>
      </StyledSectionVariant>
      <StyledDivButtonWrapper>
        <StyledButton onClick={() => router.push("/")}>Zurück</StyledButton>
        {session && (
          <StyledButton onClick={onFavorite}>Favorisieren</StyledButton>
        )}
      </StyledDivButtonWrapper>
    </StyledDiv>
  );
}
