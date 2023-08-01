import { styled } from "styled-components";
import { useState } from "react";
import { StyButton } from "../RoastDetailCard";

export default function Form({ onSubmit }) {
  const [arabica, setArabica] = useState(0);
  const [robusta, setRobusta] = useState(0);

  function showRatio(event) {
    let ara = event.target.value;
    let rob = 100 - ara;

    setArabica(ara);
    setRobusta(rob);
  }

  return (
    <StyForm onSubmit={onSubmit}>
      <StyLabel htmlFor="name">Name:</StyLabel>
      <StyInput type="text" min="1" max="24" id="name" name="name" />
      <StyLabel htmlFor="roaster">Röster:</StyLabel>
      <StyInput type="text" min="1" max="32" id="roaster" name="roaster" />
      <StySliderLabel htmlFor="arabica">
        Arabica {arabica} / {robusta} Robusta
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
      <StyLabel htmlFor="level">Röstgrad:</StyLabel>
      <StySelect id="level" name="level">
        <option value="light">light</option>
        <option value="medium">medium</option>
        <option value="dark">dark</option>
      </StySelect>
      <StyLabel htmlFor="provenance">Herkunft:</StyLabel>
      <StyInput
        type="text"
        min="6"
        max="24"
        id="provenance"
        name="provenance"
      />
      <StyButton>Speichern</StyButton>
    </StyForm>
  );
}

const StyForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  padding: 20px;
  height: 100vh;
`;

const StyLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  width: 63px;
  height: 14px;
  margin: 8px;
`;

const StyInput = styled.input`
  border-radius: 8px;
  border: 0.5px solid #000;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 284px;
  height: 30px;
  margin: 8px;
`;

const StySelect = styled.select`
  border-radius: 8px;
  border: 0.5px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 284px;
  height: 30px;
`;

const StySliderLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  width: 80vw;
  height: 14px;
  margin: 8px;
`;

const StySlider = styled.input`
  width: 60vw;
  margin: 8px;
  align-self: center;
`;
