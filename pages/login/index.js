import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";
import logo from "@/public/logo.svg";
import CreateAccount from "@/components/LoginForms/createAccountForm";
import Login from "@/components/LoginForms";
import { useToast } from "@/components/Modals/Toast/ToastContext";
import {
  StyledDivInheritVariant,
  StyledImageMarginTop,
  StyledSectionNoWidthVariant,
  StyledButtonBorderless,
} from "@/lib/styled-components";

export default function Profile() {
  const [formSelect, setFormSelect] = useState(false);
  const toast = useToast();
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
      return toast.errorToast("Benutzername oder Passwort falsch!");
    }

    router.push(res.url);
  }

  async function createAccount(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const { password, confirm } = data;
    if (password !== confirm) {
      return toast.errorToast("Passwörter stimmen nicht überein!");
    }

    const res = await fetch("api/auth/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.status === 418) {
      return toast.errorToast("Sry, dieser Name ist leider schon vergeben!");
    }
    if (res.status === 400) {
      return toast.errorToast(
        "Huups, da ist uns wohl der Tamper auf den Fuß gefallen..."
      );
    }
    if (res.ok) {
      setFormSelect(!formSelect);
      toast.successToast("Benutzer erfolgreich angelegt!");
    }
  }

  return (
    <>
      {!formSelect && (
        <StyledDivInheritVariant>
          <StyledImageMarginTop
            priority={true}
            src={logo}
            width={300}
            height={200}
            alt="Beanerd Logo"
          />
          <Login onSubmit={onLogin} />
          <StyledSectionNoWidthVariant>
            Bitte melde dich an, um auf dein Profil zuzugreifen!
            <StyledButtonBorderless onClick={() => setFormSelect(!formSelect)}>
              Noch kein Profil? Hier geht es zur Registrierung!
            </StyledButtonBorderless>
          </StyledSectionNoWidthVariant>
        </StyledDivInheritVariant>
      )}
      {formSelect && (
        <StyledDivInheritVariant>
          <StyledImageMarginTop
            priority={false}
            src={logo}
            width={300}
            height={200}
            alt="Beanerd Logo"
          />
          <CreateAccount onSubmit={createAccount} />
          <StyledSectionNoWidthVariant>
            Hier kannst du dir dein Profil erstellen! Bitte merke dir deinen
            Benutzernamen und Passwort gut!
            <StyledButtonBorderless onClick={() => setFormSelect(!formSelect)}>
              Du hast schon ein Profil? Hier gelangst du zur Anmeldung!
            </StyledButtonBorderless>
          </StyledSectionNoWidthVariant>
        </StyledDivInheritVariant>
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
