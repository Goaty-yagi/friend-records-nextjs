import type { Metadata } from "next";
import { store } from "@/redux/store";
import Layout from "./layout";
import React from "react";
import { friendApiSlice } from "@/redux/features/friendApiSlice";

const appName = process.env.APP_NAME;

// const req = async (id: string) =>
//   await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/friend-detail/${id}`);

export const metadata: Metadata = {
  title: `${appName} | friend dtail `,
  description: `${appName} friend dtail `,
};
// export async function generateMetadata({ params }: { params: any }) {
//   const slug = params.slug
//   const friendList = store.getState().friend;
//   console.log("FL",friendList)
//   // const friend = friendList.find((e) => e.id === slug)
//   return {
//     title: `${appName} | friend dtail`,
//     description: `${appName} friend dtail`,
//   };
// }
export default function Page({ params }: { params: any }) {
  return <Layout params={params} />;
}
