import {
  StyledButtonCenterVariant,
  StyledLabel,
  StyledInput,
  StyledForm,
} from "@/public/lib/styled-components";

export default function Login({ onSubmit }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel htmlFor="name">Name:</StyledLabel>
      <StyledInput id="name" name="name" required />
      <StyledLabel htmlFor="password">Passwort:</StyledLabel>
      <StyledInput id="password" name="password" type="password" />
      <StyledButtonCenterVariant>Anmelden</StyledButtonCenterVariant>
    </StyledForm>
  );
}
