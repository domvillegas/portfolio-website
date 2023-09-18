import React from "react";
import { AppProps } from "next/app";
import "../styles/global-styles.scss";
import Head from "next/head";

export const getServerSideProps = () => {};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>dom</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}