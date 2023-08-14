import { useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import styled from "styled-components";
import CreateAccount from "@/components/LoginForms/createAccountForm";
import Login from "@/components/LoginForms";

export default function Profile() {
  const [formSelect, setFormSelect] = useState(false);
  const router = useRouter();

  async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const res = await signIn("credentials", {
      redirect: false,
      name: data.name,
      password: data.password,
      callbackUrl: "/login/profile",
    });

    if (!res.ok) {
      return alert("Benutzername oder Passwort falsch!");
    }

    router.push(res.url);
  }

  async function createAccount(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const { password, confirm } = data;
    if (password !== confirm) {
      return alert("Passwörter stimmen nicht überein!");
    }

    const res = await fetch("api/auth/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.status === 418) {
      return alert("Sry, dieser Name ist leider schon vergeben!");
    }
    if (res.status === 400) {
      return alert("Huups, da ist uns wohl der Tamper auf den Fuß gefallen...");
    }
    if (res.ok) {
      setFormSelect(!formSelect);
      alert("Benutzer erfolgreich angelegt!");
    }
  }

  return (
    <>
      {!formSelect && (
        <StyDiv>
          <StyImage
            priority={true}
            src={logo}
            width={300}
            height={200}
            style={{ objectFit: "contain" }}
            alt="Beanerd Logo"
          ></StyImage>
          <Login onSubmit={onLogin} />
          <StySection>
            Bitte melde dich an, um auf dein Profil zuzugreifen!
            <StyButtonBorderless onClick={() => setFormSelect(!formSelect)}>
              Noch kein Profil? Hier geht es zur Registrierung!
            </StyButtonBorderless>
          </StySection>
        </StyDiv>
      )}
      {formSelect && (
        <StyDiv>
          <StyImage
            priority={true}
            src={logo}
            width={300}
            height={200}
            style={{ objectFit: "contain" }}
            alt="Beanerd Logo"
          ></StyImage>
          <CreateAccount onSubmit={createAccount} />
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

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: "/login/profile",
        permanent: false,
      },
    };
  }
  return { props: { session } };
}

export const StyDiv = styled.div`
  height: inherit;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const StySection = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  padding: 16px;
  height: 50vh;
`;

const StyButtonBorderless = styled.section`
  border: none;
  background-color: white;
  font-size: 12px;
  font-weight: 200;
  padding: 16px;
`;

const StyImage = styled(Image)`
  margin-top: 32px;
`;
