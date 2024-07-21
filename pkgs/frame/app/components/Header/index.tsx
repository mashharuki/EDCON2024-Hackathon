import { APP_NAME } from "@/app/utils";
import Head from "next/head";
import "./../../../css/global.css";

/**
 * Header Component
 * @returns
 */
export default async function Header() {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">OnChain Cheki</h1>
      </header>
    </>
  );
}
