import { StyledFooter, StyledNavLink } from "@/lib/styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import addRoastIcon from "@/public/addRoastIcon.svg";
import homeIcon from "@/public/homeIcon.svg";
import searchIcon from "@/public/searchIcon.svg";
import profileIcon from "@/public/profileIcon.svg";

export default function Navigation({ className }) {
  const router = useRouter();
  return (
    <StyledFooter className={className}>
      <StyledNavLink $active={router.route === "/"} href={"/"}>
        <Image src={homeIcon} height={50} width={50} alt="home" />
        Home
      </StyledNavLink>
      <StyledNavLink $active={router.route === "/search"} href={"/search"}>
        <Image src={searchIcon} height={50} width={50} alt="search" />
        Search
      </StyledNavLink>
      <StyledNavLink $active={router.route === "/addroast"} href={"/addroast"}>
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
