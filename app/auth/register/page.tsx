import type { Metadata } from "next";
import Layout from "./layout";

const appName = process.env.APP_NAME;
export const metadata: Metadata = {
  title: `Register`,
  description: `${appName} register page`,
};
export default function Page() {
  return (
   <><Layout/></>
  );
}
