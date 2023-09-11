import { StyledFooter, StyledLink } from "@/lib/styled-components";
export default function Navigation({ className, session }) {
  return (
    <StyledFooter className={className}>
      <StyledLink href={"/"}>Startseite</StyledLink>
      <StyledLink href={"/search"}>Suchen</StyledLink>
      <StyledLink href={"/addroast"}>
        Kaffee <br />
        hinzufügen
      </StyledLink>
      <StyledLink href={"/login"}>
        {session ? "Favoriten" : "Profil"}
      </StyledLink>
    </StyledFooter>
  );
}
