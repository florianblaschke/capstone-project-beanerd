import GlobalStyle from "@/styles";
import Head from "next/head";
import Layout from "@/components/Layout";
import { SessionProvider } from "next-auth/react";
import { Roboto } from "next/font/google";
import ToastContextProvider from "@/components/Modals/Toast/toastContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  fallback: ["system-ui"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Beanerd</title>
      </Head>
      <SessionProvider session={session}>
        <ToastContextProvider>
          <Layout className={roboto.className}>
            <Component {...pageProps} />
          </Layout>
        </ToastContextProvider>
      </SessionProvider>
    </>
  );
}
