import {
  StyledGridForm,
  StyledLabel,
  StyledSelect,
  StyledInputGridVariant,
  StyledLabelVariant,
  StyledGridButton,
} from "@/public/lib/styled-components";

export default function BrewMethodsForm({ onSubmit }) {
  return (
    <StyledGridForm onSubmit={onSubmit}>
      <StyledLabel htmlFor="method">Brühmethode</StyledLabel>
      <StyledSelect id="method" name="method">
        <option value="Filter">Filter</option>
        <option value="Herdkännchen">Herdkännchen</option>
        <option value="Espresso">Siebträger</option>
      </StyledSelect>
      <StyledLabel>Brühverhältnis</StyledLabel>
      <div>
        <StyledInputGridVariant
          placeholder="Kaffee in g"
          id="coffee"
          name="coffee"
          type="number"
        />
        <StyledInputGridVariant
          placeholder="Wasser in g"
          id="water"
          name="water"
          type="number"
        />
      </div>
      <StyledLabelVariant htmlFor="time">Brühzeit</StyledLabelVariant>
      <StyledInputGridVariant placeholder="Sekunden" id="time" name="time" />
      <StyledLabel htmlFor="grind">Mahlgrad</StyledLabel>
      <StyledSelect id="grind" name="grind">
        <option value="grob">grob</option>
        <option value="mittel-grob">mittel-grob</option>
        <option value="mittel">mittel</option>
        <option value="mittel-fein">mittel-fein</option>
        <option value="fein">fein</option>
        <option value="super-fein">super-fein</option>
      </StyledSelect>
      <StyledGridButton type="submit">Hinzufügen</StyledGridButton>
    </StyledGridForm>
  );
}
