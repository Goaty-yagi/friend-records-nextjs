
import type { Metadata } from "next";
import { store } from "@/redux/store";
import Layout from "./layout";
import React from "react";
import { useRouter } from "next/navigation";
import { friendApiSlice } from "@/redux/features/friendApiSlice";
import { UsernameUpdateForm } from "@/components/forms";

const appName = process.env.APP_NAME;

// const req = async (id: string) =>
//   await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/friend-detail/${id}`);

// export const metadata: Metadata = {
//   title: `${appName} | friend dtail `,
//   description: `${appName} friend dtail `,
// };
export async function generateMetadata({ searchParams }: { params: any, searchParams:any }) {
  console.log('searchParams',searchParams)
  const name = searchParams.name
  // const friend = friendList.find((e) => e.id === slug)
  return {
    title: `${appName} | friend detail ${name}`,
    description: `${appName} friend detail ${name}`,
  };
}
export default function Page({ params }: { params: any }) {
  return <Layout params={params} />;
}
