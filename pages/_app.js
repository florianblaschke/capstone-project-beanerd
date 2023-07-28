import GlobalStyle from "@/styles";
import Head from "next/head";
import { styled } from "styled-components";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Beanerd</title>
      </Head>
      <main class={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
