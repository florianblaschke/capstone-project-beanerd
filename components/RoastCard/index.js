import defaultPic from "@/public/default.jpg";
import {
  StyledLinkVariant,
  StyledDivCardVariant,
  StyledImage,
  StyledSection,
  StyledHeading,
  StyledParagraph,
  StyledRating,
  StyledNumberRating,
} from "@/lib/styled-components";
import styled from "styled-components";

export default function RoastCard({ name, roaster, score, id, isFavorite }) {
  return (
    <StyledLinkVariant href={`/${id}`}>
      <StyledDivCardVariant>
        <StyledImage
          priority={true}
          src={defaultPic}
          width={""}
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
      </StyledDivCardVariant>
      {isFavorite && <StyledP>🖤</StyledP>}
    </StyledLinkVariant>
  );
}

const StyledP = styled.p`
  position: absolute;
  top: 8px;
  right: 8px;
  height: 8%;
  font-weight: 400;
  font-size: 10px;
  margin: 0px;
`;
