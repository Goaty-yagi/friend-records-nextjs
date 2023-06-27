import { RegisterForm } from "@/components/forms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "site name | register",
  description: "site name Auth register page",
};
export default function Page() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "600px" }}>
        {<RegisterForm />}</div>
    </div> 
  );
}
