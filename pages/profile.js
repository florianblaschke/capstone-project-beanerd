import { useState } from "react";
import CreateAccount from "@/components/LoginForms/createAccountForm";
import Login from "@/components/LoginForms";

export default function Profile() {
  const [formSelect, setFormSelect] = useState(false);
  return (
    <>
      {!formSelect && (
        <>
          <Login />
          <section>
            Bitte melde dich an, um auf dein Profil zuzugreifen!
            <button onClick={() => setFormSelect(!formSelect)}>
              Noch kein Profil? Hier geht's zur Registrierung!
            </button>
          </section>
        </>
      )}
      {formSelect && (
        <>
          <CreateAccount />
          <section>
            Hier kannst du dir dein Profil erstellen! Bitte merke dir deinen
            Benutzernamen und Passwort gut!
            <button onClick={() => setFormSelect(!formSelect)}>
              Du hast schon ein Profil? Hier gelangst du zur Anmeldung!
            </button>
          </section>
        </>
      )}
    </>
  );
}
