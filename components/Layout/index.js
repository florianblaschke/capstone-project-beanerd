import Navigation from "./navigation";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  fallback: ["system-ui"],
});

export default function Layout({ children }) {
  return (
    <>
      <main className={roboto.className}>{children}</main>
      <Navigation className={roboto.className} />
    </>
  );
}
