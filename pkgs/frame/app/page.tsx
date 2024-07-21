import { fetchMetadata } from "frames.js/next";
import { Metadata } from "next";
import Head from "next/head";
import { appURL } from "./utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Frames Next.js Example",
    other: {
      ...(await fetchMetadata(
        new URL("/frames", appURL())
      )),
    },
  };
}

export default async function Home() {
  return (
    <>
      <Head>
        <title>Frames.js app</title>
       
      </Head>
      <div>
        GM user data example.
      </div>
    </>
  );
}
