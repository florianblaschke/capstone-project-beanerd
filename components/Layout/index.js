import Navigation from "./navigation";
import styled from "styled-components";

export default function Layout({ children, className }) {
  return (
    <>
      <StyMain className={className}>{children}</StyMain>
      <Navigation className={className} />
    </>
  );
}

const StyMain = styled.main`
  margin-bottom: 24px;
`;
