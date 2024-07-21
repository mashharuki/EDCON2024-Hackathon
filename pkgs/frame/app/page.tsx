import { fetchMetadata } from "frames.js/next";
import { Metadata } from "next";
import "./../css/global.css";
import Header from "./components/Header";
import PhotoCapture from "./components/PhotoCapture";
import { APP_NAME, appURL } from "./utils";

/**
 * generateMetadata method
 * @returns
 */
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: APP_NAME,
    other: {
      ...(await fetchMetadata(new URL("/frames", appURL()))),
    },
  };
}

/**
 * Home Component
 * @returns
 */
export default async function Home() {
  return (
    <>
      <Header />
      <PhotoCapture />
    </>
  );
}
