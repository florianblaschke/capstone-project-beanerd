import styled from "styled-components";
import { useState } from "react";

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
    <StyForm onSubmit={onSubmit}>
      <StyLabel htmlFor="name">Name:</StyLabel>
      <StyInput
        pattern="^(?=.*[a-zA-Z])[a-zA-Z\d\s]+$"
        type="text"
        id="name"
        name="name"
      />
      <StyLabel htmlFor="roaster">Röster:</StyLabel>
      <StyInput
        pattern="^(?=.*[a-zA-Z])[a-zA-Z\d\s]+$"
        type="text"
        id="roaster"
        name="roaster"
      />
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
      <StyDiv>
        <StyLabelTwo htmlFor="provenance">Herkunft:</StyLabelTwo>
        <StyLabel htmlFor="level">Röstgrad:</StyLabel>
        <StyInputTwo
          pattern="^[a-zA-Z\s-]+$"
          type="text"
          id="provenance"
          name="provenance"
        />
        <StySelect id="level" name="level">
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
  margin: 8px;
  width: 80%;
  background-color: white;
  text-align: center;
`;

const StySliderLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  height: 14px;
  margin: 8.5px;
  align-self: center;
`;

const StySlider = styled.input`
  width: 60vw;
  margin: 8px;
  align-self: center;
`;

const StyLabelTwo = styled.label`
  font-size: 12px;
  font-weight: 400;
  width: ;
  height: 14px;
  margin: 8px;
`;

const StyInputTwo = styled.input`
  border-radius: 8px;
  border: 0.5px solid #000;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 80%;
  height: 30px;
  margin: 8px;
`;

const StyDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.2fr 0.2fr;
  justify-items: center;
`;

const StyButton = styled.button`
  align-self: center;
  margin: 24px;
  padding: 8px;
  width: 33%;
  border-radius: 4px;
  background-color: white;
  border: solid black 0.5px;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
