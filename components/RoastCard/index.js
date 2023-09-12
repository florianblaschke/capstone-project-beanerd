import defaultPic from "@/public/default.jpg";
import {
  StyledLinkProfile,
  StyledDivCardVariant,
  StyledImage,
  StyledSection,
  StyledHeading,
  StyledParagraph,
  StyledRating,
  StyledNumberRating,
  StyledFavDiv,
} from "@/lib/styled-components";

export default function RoastCard({ name, roaster, score, id, isFavorite }) {
  return (
    <StyledDivCardVariant>
      <StyledLinkProfile href={`/${id}`}>
        <StyledImage
          priority={true}
          src={defaultPic}
          width={100}
          height={""}
          alt="Coffee-Package"
        />
        <StyledSection>
          <StyledHeading>{name}</StyledHeading>
          <StyledParagraph>{roaster}</StyledParagraph>
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
        </StyledSection>
      </StyledLinkProfile>
      {isFavorite && <StyledFavDiv>🖤</StyledFavDiv>}
    </StyledDivCardVariant>
  );
}
