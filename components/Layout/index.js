import Navigation from "./navigation";
import styled from "styled-components";
import { useSession } from "next-auth/react";

export default function Layout({ children, className }) {
  const { data: sessionData } = useSession();
  return (
    <>
      <StyMain className={className}>{children}</StyMain>
      <Navigation session={sessionData} className={className} />
    </>
  );
}

const StyMain = styled.main`
  margin-bottom: 24px;
  height: inherit;
  position: relative;
`;
