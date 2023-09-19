import defaultPic from "@/public/default.jpg";
import Window from "../Modals/Window/window";
import { useState } from "react";
import {
  StyledDiv,
  StyledHeading,
  StyledParagraph,
  StyledNumberRating,
  StyledDivButtonWrapper,
  StyledButton,
  StyledInputRating,
  StyledLabel,
  StyledImageBackground,
  StyledRatingLessMargin,
  StyledFormRating,
  StyledSection,
  StyledSliderLabel,
} from "@/lib/styled-components";

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
      <StyledImageBackground
        priority={true}
        src={defaultPic}
        width={350}
        height={600}
        alt="Coffee-Package"
      />
      <StyledSection>
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
        <>
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
        </>
        {rateEdit && (
          <Window onClose={setRateEdit}>
            <StyledFormRating onSubmit={submitRating}>
              <StyledSliderLabel htmlFor="rating">
                Your rating: {rating}
              </StyledSliderLabel>
              <StyledInputRating
                onChange={showRating}
                type="range"
                min="0"
                max="100"
                id="rating"
                name="rating"
              />
              <StyledButton>Submit rating</StyledButton>
            </StyledFormRating>
          </Window>
        )}
      </StyledSection>
      <StyledDivButtonWrapper>
        <StyledButton onClick={setEdit}>
          {edit ? "Cancel" : "Add Brew recipe"}
        </StyledButton>
        <StyledButton onClick={setRateEdit}>
          {rateEdit ? "Cancel" : "Rate this coffee"}
        </StyledButton>
      </StyledDivButtonWrapper>
    </StyledDiv>
  );
}
