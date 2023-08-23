import {
  StyledGridFormEdit,
  StyledLabelEdit,
  StyledLabel,
  StyledSelect,
  StyledSelectEdit,
  StyledLabelVariant,
  StyledInputGridVariant,
  StyledGridButton,
} from "@/lib/styled-components";

export default function EditBrewMethodForm({
  onSubmit,
  onClose,
  method,
  coffee,
  water,
  time,
  grind,
}) {
  return (
    <StyledGridFormEdit onSubmit={onSubmit}>
      <StyledLabelEdit htmlFor="method">Brühmethode</StyledLabelEdit>
      <StyledSelectEdit id="method" name="method" defaultValue={method}>
        <option value="filter">Filter</option>
        <option value="bialetti">Herdkännchen</option>
        <option value="espresso">Siebträger</option>
      </StyledSelectEdit>
      <StyledLabelVariant htmlFor="coffee">Kaffee</StyledLabelVariant>
      <StyledLabelVariant htmlFor="water">Wasser</StyledLabelVariant>
      <StyledInputGridVariant
        defaultValue={coffee}
        id="coffee"
        name="coffee"
        type="number"
      />
      <StyledInputGridVariant
        defaultValue={water}
        id="water"
        name="water"
        type="number"
      />
      <StyledLabelVariant htmlFor="time">Brühzeit</StyledLabelVariant>
      <StyledLabel htmlFor="grind">Mahlgrad</StyledLabel>
      <StyledInputGridVariant
        placeholder="Sekunden"
        id="time"
        name="time"
        defaultValue={time}
      />
      <StyledSelect id="grind" name="grind" defaultValue={grind}>
        <option value="coarse">coarse</option>
        <option value="coarse-medium">coarse-medium</option>
        <option value="medium">medium</option>
        <option value="medium-fine">medium-fine</option>
        <option value="fine">fine</option>
        <option value="super-fine">super-fine</option>
      </StyledSelect>
      <StyledGridButton>Speichern</StyledGridButton>
      <StyledGridButton type="button" onClick={onClose}>
        Abbrechen
      </StyledGridButton>
    </StyledGridFormEdit>
  );
}
