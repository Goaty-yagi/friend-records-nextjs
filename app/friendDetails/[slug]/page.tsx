
import Layout from "./layout";
import React from "react";

export async function generateMetadata({ searchParams }: {searchParams:any }) {
  const appName = process.env.APP_NAME;
  const name = searchParams.name
  return {
    title: `Friend detail ${name}`,
    description: `${appName} friend detail ${name}`,
  };
}
export default function Page({ params }: { params: any }) {
  return <Layout params={params} />;
}
