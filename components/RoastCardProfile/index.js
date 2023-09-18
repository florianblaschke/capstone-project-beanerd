import defaultPic from "@/public/default.jpg";
import {
  StyledDivCardVariant,
  StyledLinkProfile,
  StyledImage,
  StyledHeading,
  StyledParagraph,
  StyledRating,
  StyledNumberRating,
  StyledDelete,
  StyledSection,
} from "@/lib/styled-components";

export default function RoastCardProfile({
  name,
  roaster,
  score,
  onDelete,
  id,
}) {
  return (
    <StyledDivCardVariant>
      <StyledLinkProfile href={`/login/profile/${id}`}>
        <StyledImage
          priority={false}
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
      <StyledDelete type="button" onClick={onDelete}>
        Löschen
      </StyledDelete>
    </StyledDivCardVariant>
  );
}
