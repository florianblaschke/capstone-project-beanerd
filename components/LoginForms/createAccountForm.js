import { StyButton, StyLabel, StyInput } from "../Form";
import { StyFormLogin } from ".";

export default function CreateAccount({ onSubmit }) {
  return (
    <StyFormLogin onSubmit={onSubmit}>
      <StyLabel htmlFor="name">Name:</StyLabel>
      <StyInput id="name" name="name" required />
      <StyLabel htmlFor="password">Passwort:</StyLabel>
      <StyInput id="password" name="password" type="password" />
      <StyLabel htmlFor="confirm">Passwort bestätigen:</StyLabel>
      <StyInput id="confirm" name="confirm" type="password" />
      <StyButton>Profil erstellen</StyButton>
    </StyFormLogin>
  );
}
