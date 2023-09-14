import { StyledFooter, StyledLink } from "@/lib/styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import addRoastIcon from "@/public/addRoastIcon.svg";
import homeIcon from "@/public/homeIcon.svg";
import searchIcon from "@/public/searchIcon.svg";
import profileIcon from "@/public/profileIcon.svg";
import styled from "styled-components";
import Link from "next/link";

export default function Navigation({ className, session }) {
  const router = useRouter();
  return (
    <StyledFooter className={className}>
      <StyledNavLink $active={router.route === "/" ? true : false} href={"/"}>
        <Image src={homeIcon} height={50} width={50} alt="home" />
        Home
      </StyledNavLink>
      <StyledNavLink
        $active={router.route === "/search" ? true : false}
        href={"/search"}
      >
        <Image src={searchIcon} height={50} width={50} alt="search" />
        Search
      </StyledNavLink>
      <StyledNavLink
        $active={router.route === "/addroast" ? true : false}
        href={"/addroast"}
      >
        <Image src={addRoastIcon} height={50} width={50} alt="add Roast" />
        Add
      </StyledNavLink>
      <StyledNavLink
        $active={
          router.route === "/login"
            ? true
            : router.route === "/login/profile"
            ? true
            : false
        }
        href={"/login"}
      >
        <Image src={profileIcon} height={50} width={50} alt="home" />
        Profile
      </StyledNavLink>
    </StyledFooter>
  );
}

const StyledNavLink = styled(Link)`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: black;
  background-color: rgba(96, 57, 47, 0.8);
  font-weight: 400;
  font-size: 12px;
  filter: ${(props) => (props.$active ? "invert(0.2)" : "")};
`;
