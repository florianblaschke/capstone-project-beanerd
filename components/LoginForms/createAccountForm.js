import {
  StyledButtonCenterVariant,
  StyledInput,
  StyledLabel,
  StyledForm,
} from "@/lib/styled-components";

export default function CreateAccount({ onSubmit }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel htmlFor="name">Name:</StyledLabel>
      <StyledInput id="name" name="name" required />
      <StyledLabel htmlFor="password">Password:</StyledLabel>
      <StyledInput id="password" name="password" type="password" required />
      <StyledLabel htmlFor="confirm">Confirm password:</StyledLabel>
      <StyledInput id="confirm" name="confirm" type="password" required />
      <StyledButtonCenterVariant>Create profile</StyledButtonCenterVariant>
    </StyledForm>
  );
}
