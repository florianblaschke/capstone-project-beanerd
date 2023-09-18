import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";
import logo from "@/public/logo.svg";
import CreateAccount from "@/components/LoginForms/createAccountForm";
import Login from "@/components/LoginForms";
import { useToast } from "@/components/Modals/Toast/toastProvider";
import {
  StyledDivInheritVariant,
  StyledImageMarginTop,
  StyledSectionNoWidthVariant,
  StyledButtonBorderless,
  StyledImageBackground,
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
      return toast.errorToast("Username or Password is wrong!");
    }

    router.push(res.url);
  }

  async function createAccount(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const { password, confirm } = data;
    if (password !== confirm) {
      return toast.errorToast("Passwords are not matching!");
    }

    const res = await fetch("api/auth/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.status === 418) {
      return toast.errorToast("Sorry, this username is already taken!");
    }
    if (res.status === 400) {
      return toast.errorToast(
        "Ouch! Tamper fell on my foot and I messed up..."
      );
    }
    if (res.ok) {
      setFormSelect(!formSelect);
      toast.successToast("User successfully registered!");
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
            Sign in to see your profile!
            <StyledButtonBorderless onClick={() => setFormSelect(!formSelect)}>
              You have no profile? Sign up here!
            </StyledButtonBorderless>
          </StyledSectionNoWidthVariant>
        </StyledDivInheritVariant>
      )}
      {formSelect && (
        <StyledDivInheritVariant>
          <StyledImageBackground
            priority={false}
            src={logo}
            width={300}
            height={600}
            alt="Beanerd Logo"
          />
          <CreateAccount onSubmit={createAccount} />
          <StyledSectionNoWidthVariant>
            Create your profile, save your favorite roasts and create brew
            recipes!
            <StyledButtonBorderless onClick={() => setFormSelect(!formSelect)}>
              Already signed up? Log in here!
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
