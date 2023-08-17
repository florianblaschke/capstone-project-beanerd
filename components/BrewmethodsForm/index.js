import {
  StyledGridForm,
  StyledLabel,
  StyledSelect,
  StyledInputGridVariant,
  StyledLabelVariant,
  StyledGridButton,
  StyledDivGridVariant,
} from "@/lib/styled-components";

export default function BrewMethodsForm({ onSubmit }) {
  return (
    <StyledGridForm onSubmit={onSubmit}>
      <StyledLabel htmlFor="method">Brühmethode</StyledLabel>
      <StyledSelect id="method" name="method">
        <option value="filter">Filter</option>
        <option value="bialetti">Herdkännchen</option>
        <option value="espresso">Siebträger</option>
      </StyledSelect>
      <StyledLabel>Brühverhältnis</StyledLabel>
      <StyledDivGridVariant>
        <StyledLabelVariant htmlFor="coffee">Kaffee</StyledLabelVariant>
        <StyledInputGridVariant
          placeholder="Kaffee in g"
          id="coffee"
          name="coffee"
          type="number"
        />
        <StyledLabelVariant htmlFor="water">Wasser</StyledLabelVariant>
        <StyledInputGridVariant
          placeholder="Wasser in g"
          id="water"
          name="water"
          type="number"
        />
      </StyledDivGridVariant>
      <StyledLabelVariant htmlFor="time">Brühzeit</StyledLabelVariant>
      <StyledInputGridVariant placeholder="Sekunden" id="time" name="time" />
      <StyledLabel htmlFor="grind">Mahlgrad</StyledLabel>
      <StyledSelect id="grind" name="grind">
        <option value="coarse">coarse</option>
        <option value="coarse-medium">coarse-medium</option>
        <option value="medium">medium</option>
        <option value="medium-fine">medium-fine</option>
        <option value="fine">fine</option>
        <option value="super-fine">super-fine</option>
      </StyledSelect>
      <StyledGridButton type="submit">Hinzufügen</StyledGridButton>
    </StyledGridForm>
  );
}
