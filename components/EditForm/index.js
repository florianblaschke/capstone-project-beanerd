import { useState } from "react";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSliderLabel,
  StyledSlider,
  StyledSelect,
  StyledLabelVariant,
  StyledInputVariant,
  StyledButton,
  StyledDivGridVariant,
} from "@/lib/styled-components";
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
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel htmlFor="name">Name:</StyledLabel>
      <StyledInput
        pattern="^(?=.*[a-zA-ZäöüÄÖÜß])[a-zA-ZäöüÄÖÜß\d\s]+$"
        type="text"
        id="name"
        name="name"
        defaultValue={name}
        title="Sonderzeichen und alleinstehende Zahlen sind nicht erlaubt"
      />
      <StyledLabel htmlFor="roaster">Röster:</StyledLabel>
      <StyledInput
        pattern="^(?=.*[a-zA-ZäöüÄÖÜß])[a-zA-ZäöüÄÖÜß\d\s]+$"
        type="text"
        id="roaster"
        name="roaster"
        defaultValue={roaster}
        title="Sonderzeichen und alleinstehende Zahlen sind nicht erlaubt"
      />
      <StyledSliderLabel htmlFor="arabica">
        Arabica {arabicaRatio} / {robustaRatio} Robusta
      </StyledSliderLabel>
      <StyledSlider
        defaultValue={arabicaRatio}
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
          defaultValue={provenance}
          title="Sonderzeichen und alleinstehende Zahlen sind nicht erlaubt"
        />
        <StyledSelect defaultValue={level} id="level" name="level">
          <option value="light">light</option>
          <option value="medium">medium</option>
          <option value="dark">dark</option>
        </StyledSelect>
      </StyledDivGridVariant>
      <StyledButton>Speichern</StyledButton>
    </StyledForm>
  );
}
