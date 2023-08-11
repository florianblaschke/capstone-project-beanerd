import { StyLabel, StySelect, StyButton, StyLabelTwo } from "../Form";
import styled from "styled-components";

export default function BrewMethodsForm({ onSubmit }) {
  return (
    <StyGridForm onSubmit={onSubmit}>
      <StyLabel htmlFor="method">Brühmethode</StyLabel>
      <StySelect id="method" name="method">
        <option value="filter">Filter</option>
        <option value="coffeemaker">Herdkännchen</option>
        <option value="espresso">Siebträger</option>
      </StySelect>

      <StyLabel htmlFor="coffee">Brühverhältnis</StyLabel>
      <div>
        <StyGridInput id="coffee" name="coffee" type="number" />
        <StyLabel hidden htmlFor="water"></StyLabel>
        {":"}
        <StyGridInput id="water" name="water" type="number" />
      </div>

      <StyLabelTwo htmlFor="time">Brühzeit</StyLabelTwo>
      <StyGridInput id="time" name="time" ty />

      <StyLabel htmlFor="grind">Mahlgrad</StyLabel>
      <StySelect id="grind" name="grind">
        <option value="coarse">grob</option>
        <option value="medium-coarse">mittel-grob</option>
        <option value="medium">mittel</option>
        <option value="medium-fine">mittel-fein</option>
        <option value="fine">fein</option>
        <option value="super-fine">super-fein</option>
      </StySelect>
      <StyGridButton>Hinzufügen</StyGridButton>
    </StyGridForm>
  );
}

const StyGridForm = styled.form`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: repeat(4, 1fr) 32px;
  gap: -0.5rem;
  align-items: center;
`;

const StyGridInput = styled.input`
  border-radius: 8px;
  border: 0.5px solid #000;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 15vw;
  height: 30px;
  margin: 8px;
  -moz-appearance: textfield;
`;

const StyGridButton = styled(StyButton)`
  width: inherit;
`;
