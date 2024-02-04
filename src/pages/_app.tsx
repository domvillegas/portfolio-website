import React from "react";
import { AppProps } from "next/app";
import "../styles/global-styles.scss";
import Head from "next/head";
import { TopLeftValuesProvider } from "@/contexts/useTopLeftValues";
import ogImage from "../assets/images/ogImage.png";

export const getServerSideProps = () => {};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>dom</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💭</text></svg>"
        ></link>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
        <meta property="og:title" content="dom" />
        <meta property="og:site_name" content="domvillegas.com" />
        <meta property="og:url" content="domvilleegas.com" />
        <meta
          property="og:description"
          content="Dude from Portland, OR."
        />
        <meta property="og:image" content={ogImage.src} />
        <meta name="description" content="Dude from Portland, OR." />
      </Head>
      <TopLeftValuesProvider>
        <Component {...pageProps} />
      </TopLeftValuesProvider>
    </>
  );
}
