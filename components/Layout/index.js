import Navigation from "./navigation";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Navigation />
    </>
  );
}
