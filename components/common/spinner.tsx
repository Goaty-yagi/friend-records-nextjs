"use client";
import styled from "@emotion/styled";
import { ImSpinner3 } from "react-icons/im";
import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Spinner() {

  return (
    <Center w={"100%"}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <ImSpinner3/>
      </motion.div>
    </Center>
  );
}
