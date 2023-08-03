import {
  StyLabel,
  StyInput,
  StySliderLabel,
  StySelect,
  StyDiv,
  StySlider,
  StyInputTwo,
  StyLabelTwo,
  StyButton,
} from "../Form";

import { useState } from "react";
import styled from "styled-components";

export default function EditForm({
  onSubmit,
  name,
  roaster,
  arabica,
  robusta,
  level,
  provenance,
}) {
  const [arabicaRatio, setArabica] = useState(arabica);
  const [robustaRatio, setRobusta] = useState(robusta);

  function showRatio(event) {
    let ara = Number(event.target.value);
    let rob = 100 - ara;

    setArabica(ara);
    setRobusta(rob);
  }

  return (
    <StyForm onSubmit={onSubmit}>
      <StyLabel htmlFor="name">Name:</StyLabel>
      <StyInput
        pattern="^(?=.*[a-zA-ZäöüÄÖÜß])[a-zA-ZäöüÄÖÜß\d\s]+$"
        type="text"
        id="name"
        name="name"
        defaultValue={name}
        title="Sonderzeichen und alleinstehende Zahlen sind nicht erlaubt"
      />
      <StyLabel htmlFor="roaster">Röster:</StyLabel>
      <StyInput
        pattern="^(?=.*[a-zA-ZäöüÄÖÜß])[a-zA-ZäöüÄÖÜß\d\s]+$"
        type="text"
        id="roaster"
        name="roaster"
        defaultValue={roaster}
        title="Sonderzeichen und alleinstehende Zahlen sind nicht erlaubt"
      />
      <StySliderLabel htmlFor="arabica">
        Arabica {arabicaRatio} / {robustaRatio} Robusta
      </StySliderLabel>
      <StySlider
        defaultValue={arabicaRatio}
        onChange={showRatio}
        type="range"
        min="0"
        max="100"
        step="5"
        id="arabica"
        name="arabica"
      />
      <StyDiv>
        <StyLabelTwo htmlFor="provenance">Herkunft:</StyLabelTwo>
        <StyLabel htmlFor="level">Röstgrad:</StyLabel>
        <StyInputTwo
          pattern="^(?=.*[a-zA-ZäöüÄÖÜß])[a-zA-ZäöüÄÖÜß\d\s]+$"
          type="text"
          id="provenance"
          name="provenance"
          defaultValue={provenance}
          title="Sonderzeichen und alleinstehende Zahlen sind nicht erlaubt"
        />
        <StySelect defaultValue={level} id="level" name="level">
          <option value="light">light</option>
          <option value="medium">medium</option>
          <option value="dark">dark</option>
        </StySelect>
      </StyDiv>
      <StyButton>Speichern</StyButton>
    </StyForm>
  );
}

const StyForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  align-items: center;
  padding: 20px;
  height: auto;
`;
