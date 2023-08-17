import { useState } from "react";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSliderLabel,
  StyledSlider,
  StyledDivGridVariant,
  StyledLabelVariant,
  StyledInputVariant,
  StyledSelect,
  StyledButtonCenterVariant,
} from "@/lib/styled-components";

export default function Form({ onSubmit }) {
  const [arabica, setArabica] = useState(50);
  const [robusta, setRobusta] = useState(50);

  function showRatio(event) {
    let ara = Number(event.target.value);
    let rob = 100 - ara;

    setArabica(ara);
    setRobusta(rob);
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel htmlFor="name">Name:</StyledLabel>
      <StyledInput
        pattern="^(?=.*[a-zA-ZäöüÄÖÜß])[a-zA-ZäöüÄÖÜß\d\s]+$"
        type="text"
        id="name"
        name="name"
        title="Sonderzeichen und alleinstehende Zahlen sind nicht erlaubt"
      />
      <StyledLabel htmlFor="roaster">Röster:</StyledLabel>
      <StyledInput
        pattern="^(?=.*[a-zA-ZäöüÄÖÜß])[a-zA-ZäöüÄÖÜß\d\s]+$"
        type="text"
        id="roaster"
        name="roaster"
        title="Sonderzeichen und alleinstehende Zahlen sind nicht erlaubt"
      />
      <StyledSliderLabel htmlFor="arabica">
        Arabica {arabica} / {robusta} Robusta
      </StyledSliderLabel>
      <StyledSlider
        onChange={showRatio}
        type="range"
        min="0"
        max="100"
        step="5"
        id="arabica"
        name="arabica"
      />
      <StyledDivGridVariant>
        <StyledLabelVariant htmlFor="provenance">Herkunft:</StyledLabelVariant>
        <StyledLabel htmlFor="level">Röstgrad:</StyledLabel>
        <StyledInputVariant
          pattern="^(?=.*[a-zA-ZäöüÄÖÜß])[a-zA-ZäöüÄÖÜß\d\s]+$"
          type="text"
          id="provenance"
          name="provenance"
          title="Sonderzeichen und alleinstehende Zahlen sind nicht erlaubt"
        />
        <StyledSelect id="level" name="level">
          <option value="light">light</option>
          <option value="medium">medium</option>
          <option value="dark">dark</option>
        </StyledSelect>
      </StyledDivGridVariant>
      <StyledButtonCenterVariant>Speichern</StyledButtonCenterVariant>
    </StyledForm>
  );
}
