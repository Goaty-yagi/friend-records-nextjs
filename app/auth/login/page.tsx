import type { Metadata } from "next";
import Layout from "./layout";

const appName = process.env.APP_NAME;
export const metadata: Metadata = {
  title: `${appName} | login`,
  description: `${appName} login page`,
};

export default function Page() {
  return (
    <>
    </>
  );
}
