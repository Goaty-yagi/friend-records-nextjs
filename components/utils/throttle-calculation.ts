"use client";

// import { useEffect, useState } from "react";

export default function throttleCalculation({ data, status }: { data: string, status: number }) {
    const time = data ? Number(data.replace(/[^0-9]/g, "")) : 0
    const minutes = time ? Math.floor(time / 60) : 0
    const seconds = time ? time % 60 : 0
    const isError = status === 429 ? true : false
    return { minutes, seconds, isError }
}