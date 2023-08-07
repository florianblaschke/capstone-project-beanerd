import styled from "styled-components";
import { StyButton, StyLabel, StyInput } from "../Form";

export default function Login({ onSubmit }) {
  return (
    <StyFormLogin onSubmit={onSubmit}>
      <StyLabel htmlFor="name">Name:</StyLabel>
      <StyInput id="name" name="name" required />
      <StyLabel htmlFor="password">Passwort:</StyLabel>
      <StyInput id="password" name="password" type="password" />
      <StyButton>Anmelden</StyButton>
    </StyFormLogin>
  );
}

export const StyFormLogin = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  align-items: center;
  padding: 20px;
  height: auto;
`;
