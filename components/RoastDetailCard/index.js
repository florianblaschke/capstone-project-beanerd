import defaultPic from "@/public/default.jpg";
import { useRouter } from "next/router";
import {
  StyledDiv,
  StyledSectionVariant,
  StyledImageDetailVariant,
  StyledHeading,
  StyledParagraph,
  StyledRatingLessMargin,
  StyledNumberRating,
  StyledButtonFavorite,
  StyledButtonBack,
  StyledBackArrow,
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
  isFavorite,
}) {
  const router = useRouter();
  return (
    <StyledDiv $session={session}>
      <StyledSectionVariant>
        <StyledHeading>{name}</StyledHeading>
        <StyledParagraph>{roaster}</StyledParagraph>
        <StyledHeading>Arabica / Robusta</StyledHeading>
        <StyledParagraph>
          {arabica} / {robusta}
        </StyledParagraph>
        <StyledHeading>Roast level</StyledHeading>
        <StyledParagraph>{level}</StyledParagraph>
        <StyledHeading>Origin</StyledHeading>
        <StyledParagraph>{provenance}</StyledParagraph>
        <StyledRatingLessMargin>
          Rating:{" "}
          {score.length > 0
            ? Math.floor(
                score.reduce((acc, curr) => acc + curr, 0) / score.length
              )
            : 0}
          /100
        </StyledRatingLessMargin>
        <StyledNumberRating>
          {score.length} {score.length === 1 ? "Rating" : "Ratings"}
        </StyledNumberRating>
      </StyledSectionVariant>
      <StyledButtonBack onClick={() => router.push("/")}>
        <StyledBackArrow></StyledBackArrow> Back
      </StyledButtonBack>
      {session && (
        <StyledButtonFavorite onClick={onFavorite}>
          {isFavorite ? "Favorite" : "Mark favorite"}
        </StyledButtonFavorite>
      )}
      <StyledImageDetailVariant
        priority={true}
        src={defaultPic}
        width={""}
        height={""}
        alt="Coffee-Package"
      />
    </StyledDiv>
  );
}
