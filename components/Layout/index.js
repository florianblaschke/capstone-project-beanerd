import Navigation from "./navigation";
import Header from "./header";
import { useSession, signOut } from "next-auth/react";
import { StyledMain } from "@/lib/styled-components";

export default function Layout({ children, className }) {
  const { data: sessionData } = useSession();
  return (
    <>
      {sessionData && (
        <Header name={sessionData.user.name} signOut={() => signOut()} />
      )}
      <StyledMain $sessionActive={sessionData} className={className}>
        {children}
      </StyledMain>
      <Navigation session={sessionData} className={className} />
    </>
  );
}
