import { useState } from "react";
import styled from "styled-components";
import CreateAccount from "@/components/LoginForms/createAccountForm";
import Login from "@/components/LoginForms";

export default function Profile() {
  const [formSelect, setFormSelect] = useState(false);
  return (
    <>
      {!formSelect && (
        <StyDiv>
          <Login />
          <StySection>
            Bitte melde dich an, um auf dein Profil zuzugreifen!
            <StyButtonBorderless onClick={() => setFormSelect(!formSelect)}>
              Noch kein Profil? Hier geht's zur Registrierung!
            </StyButtonBorderless>
          </StySection>
        </StyDiv>
      )}
      {formSelect && (
        <StyDiv>
          <CreateAccount />
          <StySection>
            Hier kannst du dir dein Profil erstellen! Bitte merke dir deinen
            Benutzernamen und Passwort gut!
            <StyButtonBorderless onClick={() => setFormSelect(!formSelect)}>
              Du hast schon ein Profil? Hier gelangst du zur Anmeldung!
            </StyButtonBorderless>
          </StySection>
        </StyDiv>
      )}
    </>
  );
}

const StyDiv = styled.div`
  height: 100vh;
`;
const StySection = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  padding: 16px;
`;

const StyButtonBorderless = styled.section`
  border: none;
  background-color: white;
  font-size: 12px;
  font-weight: 200;
  padding: 16px;
`;
