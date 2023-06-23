import type { Metadata } from "next";
import Content from "./content";
import Layout from "./layout";

const appName = process.env.APP_NAME;
export const metadata: Metadata = {
  title: `${appName} | Dashboard`,
  description: `${appName} Dashboard page`,
};
export default function Page() {
  return (
    <>
      <Layout>
        <Content />
      </Layout>
    </>
  );
}
