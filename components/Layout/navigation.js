import Link from "next/link";
import { styled } from "styled-components";

export default function Navigation({ className }) {
  return (
    <StyFooter className={className}>
      <StyLink href={"/"}>Startseite</StyLink>
      <StyLink href={"/addroast"}>Kaffee hinzufügen</StyLink>
    </StyFooter>
  );
}

const StyFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  position: sticky;
  bottom: 0px;
  height: 6vh;
  background-color: white;
`;

const StyLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid black 0.5px;
  width: 50%;
  height: 100%;
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-size: 12px;
`;
