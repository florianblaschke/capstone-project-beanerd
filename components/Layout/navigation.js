import { StyledFooter, StyledLink } from "@/lib/styled-components";
import { useRouter } from "next/router";

export default function Navigation({ className, session }) {
  const router = useRouter();
  return (
    <StyledFooter className={className}>
      <StyledLink $active={router.route === "/" ? true : false} href={"/"}>
        Startseite
      </StyledLink>
      <StyledLink
        $active={router.route === "/search" ? true : false}
        href={"/search"}
      >
        Suchen
      </StyledLink>
      <StyledLink
        $active={router.route === "/addroast" ? true : false}
        href={"/addroast"}
      >
        Kaffee <br />
        hinzufügen
      </StyledLink>
      <StyledLink
        $active={
          router.route === "/login"
            ? true
            : router.route === "/login/profile"
            ? true
            : false
        }
        href={"/login"}
      >
        {session ? "Favoriten" : "Profil"}
      </StyledLink>
    </StyledFooter>
  );
}
