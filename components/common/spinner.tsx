"use client";
import { ImSpinner3 } from "react-icons/im";
import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  size?: string;
}

export default function Spinner({ size }: Props) {
  const spinnerSize = () => {
    switch (size) {
      case "sm":
        return { fontSize: "0.8rem" };
      case "md":
        return { fontSize: "1.5rem" };
      case "lg":
        return { fontSize: "2rem" };
    }
  };

  return (
    <Center w={"100%"}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <ImSpinner3 {...(size ? spinnerSize() : "")} />
      </motion.div>
    </Center>
  );
}
