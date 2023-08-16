import Navigation from "./navigation";
import { useSession } from "next-auth/react";
import { StyledMain } from "@/public/lib/styled-components";

export default function Layout({ children, className }) {
  const { data: sessionData } = useSession();
  return (
    <>
      <StyledMain className={className}>{children}</StyledMain>
      <Navigation session={sessionData} className={className} />
    </>
  );
}
