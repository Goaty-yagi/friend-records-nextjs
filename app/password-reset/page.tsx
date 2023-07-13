
import type { Metadata } from "next";
import Layout from "./layout";

const appName = process.env.APP_NAME;
export const metadata: Metadata = {
  title: `${appName} | password reset`,
  description: `${appName} password reset page`,
}


export default function Page() {
  return (
    <>
    </>
  );
}
