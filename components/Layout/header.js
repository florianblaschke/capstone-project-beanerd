import {
  StyledGreeting,
  StyledHeader,
  StyledLogOutButton,
} from "@/lib/styled-components";

export default function Header({ name, signOut }) {
  return (
    <StyledHeader>
      <StyledGreeting>Hi {name}!</StyledGreeting>
      <StyledLogOutButton onClick={signOut}>Abmelden</StyledLogOutButton>
    </StyledHeader>
  );
}
