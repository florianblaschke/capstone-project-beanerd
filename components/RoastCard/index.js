import defaultPic from "@/public/default.jpg";
import heart from "@/public/heart.svg";
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
  StyledSVG,
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
      {isFavorite && (
        <StyledFavDiv>
          <StyledSVG
            src={heart}
            width={""}
            height={""}
            alt={"heart of coffeebeans"}
          />
        </StyledFavDiv>
      )}
    </StyledDivCardVariant>
  );
}
