import { StyLabel, StySelect, StyButton, StyLabelTwo } from "../Form";
import styled from "styled-components";

export default function BrewMethodsForm({ onSubmit }) {
  return (
    <StyGridForm onSubmit={onSubmit}>
      <StyLabel htmlFor="method">Brühmethode</StyLabel>
      <StySelect id="method" name="method">
        <option value="Filter">Filter</option>
        <option value="Herdkännchen">Herdkännchen</option>
        <option value="Espresso">Siebträger</option>
      </StySelect>

      <StyLabel htmlFor="coffee">Brühverhältnis</StyLabel>
      <div>
        <StyGridInput
          placeholder="Kaffee in g"
          id="coffee"
          name="coffee"
          type="number"
        />
        <StyLabel hidden htmlFor="water"></StyLabel>
        {":"}
        <StyGridInput
          placeholder="Wasser in g"
          id="water"
          name="water"
          type="number"
        />
      </div>

      <StyLabelTwo htmlFor="time">Brühzeit</StyLabelTwo>
      <StyGridInput placeholder="Sekunden" id="time" name="time" />

      <StyLabel htmlFor="grind">Mahlgrad</StyLabel>
      <StySelect id="grind" name="grind">
        <option value="grob">grob</option>
        <option value="mittel-grob">mittel-grob</option>
        <option value="mittel">mittel</option>
        <option value="mittel-fein">mittel-fein</option>
        <option value="fein">fein</option>
        <option value="super-fein">super-fein</option>
      </StySelect>
      <StyGridButton>Hinzufügen</StyGridButton>
    </StyGridForm>
  );
}

const StyGridForm = styled.form`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: repeat(4, 1fr) 32px;
  align-items: center;
`;

const StyGridInput = styled.input`
  border-radius: 8px;
  border: 0.5px solid #000;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 24vw;
  height: 30px;
  margin: 8px;
`;

const StyGridButton = styled(StyButton)`
  width: inherit;
`;
