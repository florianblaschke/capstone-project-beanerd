import {
  StyledGridFormEdit,
  StyledLabelEdit,
  StyledLabel,
  StyledSelect,
  StyledSelectEdit,
  StyledLabelVariant,
  StyledInputGridVariant,
  StyledGridButton,
  StyledGridButtonSpan,
} from "@/lib/styled-components";

export default function EditBrewMethodForm({
  onSubmit,
  onClose,
  method,
  coffee,
  water,
  time,
  grind,
  onDelete,
}) {
  return (
    <StyledGridFormEdit onSubmit={onSubmit}>
      <StyledLabelEdit htmlFor="method">Method</StyledLabelEdit>
      <StyledSelectEdit id="method" name="method" defaultValue={method}>
        <option value="filter">Filter</option>
        <option value="bialetti">Bialetti</option>
        <option value="espresso">Espresso</option>
      </StyledSelectEdit>
      <StyledLabelVariant htmlFor="coffee">Coffee</StyledLabelVariant>
      <StyledLabelVariant htmlFor="water">Water</StyledLabelVariant>
      <StyledInputGridVariant
        defaultValue={coffee}
        id="coffee"
        name="coffee"
        type="number"
        min="1"
        required
      />
      <StyledInputGridVariant
        defaultValue={water}
        id="water"
        name="water"
        type="number"
        min="1"
        required
      />
      <StyledLabelVariant htmlFor="time">Time</StyledLabelVariant>
      <StyledLabel htmlFor="grind">Grind</StyledLabel>
      <StyledInputGridVariant
        placeholder="Sekunden"
        type="number"
        id="time"
        name="time"
        min="1"
        defaultValue={time}
        required
      />
      <StyledSelect id="grind" name="grind" defaultValue={grind}>
        <option value="coarse">coarse</option>
        <option value="coarse-medium">coarse-medium</option>
        <option value="medium">medium</option>
        <option value="medium-fine">medium-fine</option>
        <option value="fine">fine</option>
        <option value="super-fine">super-fine</option>
      </StyledSelect>
      <StyledGridButton type="submit">Save</StyledGridButton>
      <StyledGridButton type="button" onClick={onClose}>
        Cancel
      </StyledGridButton>
      <StyledGridButtonSpan type="button" onClick={onDelete}>
        Delete
      </StyledGridButtonSpan>
    </StyledGridFormEdit>
  );
}
