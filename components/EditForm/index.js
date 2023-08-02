import {
  StyForm,
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
        pattern="^(?=.*[a-zA-Z])[a-zA-Z\d\s]+$"
        type="text"
        id="name"
        name="name"
        placeholder={name}
      />
      <StyLabel htmlFor="roaster">Röster:</StyLabel>
      <StyInput
        pattern="^(?=.*[a-zA-Z])[a-zA-Z\d\s]+$"
        type="text"
        id="roaster"
        name="roaster"
        placeholder={roaster}
      />
      <StySliderLabel htmlFor="arabica">
        Arabica {arabicaRatio} / {robustaRatio} Robusta
      </StySliderLabel>
      <StySlider
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
          pattern="^(?=.*[a-zA-Z])[a-zA-Z\d\s]+$"
          type="text"
          id="provenance"
          name="provenance"
          placeholder={provenance}
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
