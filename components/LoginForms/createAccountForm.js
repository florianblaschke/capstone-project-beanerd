import {
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledForm,
} from "@/public/lib/styled-components";

export default function CreateAccount({ onSubmit }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel htmlFor="name">Name:</StyledLabel>
      <StyledInput id="name" name="name" required />
      <StyledLabel htmlFor="password">Passwort:</StyledLabel>
      <StyledInput id="password" name="password" type="password" />
      <StyledLabel htmlFor="confirm">Passwort bestätigen:</StyledLabel>
      <StyledInput id="confirm" name="confirm" type="password" />
      <StyledButton>Profil erstellen</StyledButton>
    </StyledForm>
  );
}
