import { StyledFooter, StyledLink } from "@/public/lib/styled-components";
export default function Navigation({ className, session }) {
  return (
    <StyledFooter className={className}>
      <StyledLink href={"/"}>Startseite</StyledLink>
      <StyledLink href={"/addroast"}>Kaffee hinzufügen</StyledLink>
      <StyledLink href={"/login"}>
        {session ? "Favoriten" : "Profil"}
      </StyledLink>
    </StyledFooter>
  );
}
