import defaultPic from "@/public/default.jpg";
import { useState } from "react";
import {
  StyledDiv,
  StyledImageDetailVariant,
  StyledSectionVariant,
  StyledHeading,
  StyledParagraph,
  StyledRating,
  StyledNumberRating,
  StyledDivButtonVariant,
  StyledButton,
  StyledInputRating,
  StyledLabel,
} from "@/public/lib/styled-components";

export default function RoastDetailCardProfile({
  name,
  roaster,
  arabica,
  robusta,
  level,
  provenance,
  score,
  edit,
  setEdit,
  rateEdit,
  setRateEdit,
  submitRating,
}) {
  const [rating, setRating] = useState(50);

  function showRating(event) {
    setRating(event.target.value);
  }
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
        {!rateEdit && (
          <>
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
          </>
        )}
        {rateEdit && (
          <>
            <form onSubmit={submitRating}>
              <StyledLabel htmlFor="rating">
                Deine Bewertung: {rating}
              </StyledLabel>
              <StyledInputRating
                onChange={showRating}
                type="range"
                min="0"
                max="100"
                id="rating"
                name="rating"
              />
              <StyledButton>Abgeben</StyledButton>
            </form>
          </>
        )}
      </StyledSectionVariant>
      <StyledDivButtonVariant>
        <StyledButton onClick={setEdit}>
          {edit ? "Abbrechen" : "Brührezept hinzufügen"}
        </StyledButton>
        <StyledButton onClick={setRateEdit}>
          {rateEdit ? "Abbrechen" : "Bewertung abgeben"}
        </StyledButton>
      </StyledDivButtonVariant>
    </StyledDiv>
  );
}
