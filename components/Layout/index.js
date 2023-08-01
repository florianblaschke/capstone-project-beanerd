import Navigation from "./navigation";

export default function Layout({ children, className }) {
  return (
    <>
      <main className={className}>{children}</main>
      <Navigation className={className} />
    </>
  );
}
