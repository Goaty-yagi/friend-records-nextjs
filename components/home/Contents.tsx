"use client";

import Image from "next/legacy/image";
import {
  Box,
} from "@chakra-ui/react";
import Layout from "./notLogin/Layout";
import { useAppSelector } from "@/redux/hooks";
import { Layout as FriendLayout } from "../friends";

export default function Contents() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
    return (
        <>
        {isAuthenticated ?(<><FriendLayout/></>):(<><Layout/></>)}
        </>
    )
}