import defaultPic from "@/public/default.jpg";
import styled from "styled-components";
import { useState } from "react";
import {
  StyDiv,
  StyImage,
  StyDivText,
  StyHTwo,
  StyP,
  StyRating,
  StyNumberRating,
  StyButtonDiv,
  StyButton,
} from "../RoastDetailCard";
import { StyLabel } from "../Form";

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
    let value = event.target.value;
    setRating(value);
  }
  return (
    <StyDiv>
      <StyImage
        priority={true}
        src={defaultPic}
        width={""}
        height={""}
        alt="Coffee-Package"
      ></StyImage>
      <StyDivText>
        <StyHTwo>{name}</StyHTwo>
        <StyP>{roaster}</StyP>
        <StyHTwo>Arabica / Robusta</StyHTwo>
        <StyP>
          {arabica} / {robusta}
        </StyP>
        <StyHTwo>Röstgrad</StyHTwo>
        <StyP>{level}</StyP>
        <StyHTwo>Herkunft</StyHTwo>
        <StyP>{provenance}</StyP>
        {!rateEdit && (
          <>
            <StyRating>
              Bewertung:{" "}
              {score.length > 0
                ? Math.floor(
                    score.reduce((acc, curr) => acc + curr, 0) / score.length
                  )
                : 0}
              /100
            </StyRating>
            <StyNumberRating>
              {score.length} {score.length === 1 ? "Bewertung" : "Bewertungen"}
            </StyNumberRating>
          </>
        )}
        {rateEdit && (
          <>
            <form onSubmit={submitRating}>
              <StyLabel htmlFor="rating">Deine Bewertung: {rating}</StyLabel>
              <StyInputRating
                onChange={showRating}
                type="range"
                min="0"
                max="100"
                id="rating"
                name="rating"
              />
              <StyButton>Abgeben</StyButton>
            </form>
          </>
        )}
      </StyDivText>
      <StyButtonDiv>
        <StyButton onClick={setEdit}>
          {edit ? "Abbrechen" : "Brührezept hinzufügen"}
        </StyButton>
        <StyButton onClick={setRateEdit}>
          {rateEdit ? "Abbrechen" : "Bewertung abgeben"}
        </StyButton>
      </StyButtonDiv>
    </StyDiv>
  );
}

const StyInputRating = styled.input`
  font-size: 12px;
  margin: 40px 0px 5px 0px;
  text-align: center;
`;
