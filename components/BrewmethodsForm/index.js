import {
  StyledGridForm,
  StyledSelect,
  StyledInputGridVariant,
  StyledLabelVariant,
  StyledDivGridVariant,
  StyledLabelGrid,
  StyledGridButtonSpan,
} from "@/lib/styled-components";

export default function BrewMethodsForm({ onSubmit }) {
  return (
    <StyledGridForm onSubmit={onSubmit}>
      <StyledLabelGrid htmlFor="method">Method</StyledLabelGrid>
      <StyledSelect id="method" name="method">
        <option value="Filter">Filter</option>
        <option value="Bialetti">Bialetti</option>
        <option value="Espresso">Espresso</option>
      </StyledSelect>
      <StyledLabelGrid>Brew Ratio</StyledLabelGrid>
      <StyledDivGridVariant>
        <StyledLabelVariant htmlFor="coffee">Coffee</StyledLabelVariant>
        <StyledInputGridVariant
          placeholder="Coffee in g"
          id="coffee"
          name="coffee"
          type="number"
        />
        <StyledLabelVariant htmlFor="water">Water</StyledLabelVariant>
        <StyledInputGridVariant
          placeholder="Water in g"
          id="water"
          name="water"
          type="number"
        />
      </StyledDivGridVariant>
      <StyledLabelVariant htmlFor="time">Time</StyledLabelVariant>
      <StyledInputGridVariant placeholder="seconds" id="time" name="time" />
      <StyledLabelGrid htmlFor="grind">Grind</StyledLabelGrid>
      <StyledSelect id="grind" name="grind">
        <option value="coarse">coarse</option>
        <option value="coarse-medium">coarse-medium</option>
        <option value="medium">medium</option>
        <option value="medium-fine">medium-fine</option>
        <option value="fine">fine</option>
        <option value="super-fine">super-fine</option>
      </StyledSelect>
      <StyledGridButtonSpan type="submit">Add Recipe</StyledGridButtonSpan>
    </StyledGridForm>
  );
}
