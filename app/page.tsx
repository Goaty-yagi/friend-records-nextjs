
import Contents from '@/components/home/Contents'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${process.env.APP_NAME} | Home`,
  description: "Friend record App",
};
export default function Home() {
  return (
    <main>
      <Contents/>
    </main>
  )
}
