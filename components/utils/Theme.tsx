"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export default function Theme() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("rgb(255, 235, 197)", "purple.500");
  const hover = useColorModeValue(
    { bg: "orange", color: "white" },
    { bg: "purple" }
  );

  return (
    <Box
      onClick={(e) => {
        e.preventDefault();
        toggleColorMode();
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={useColorModeValue("light", "dark")} // animation doesn't work without key. why??
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            aria-label={"theme"}
            borderRadius={"0.4rem"}
            p="0.47rem"
            fontSize={"1.5rem"}
            transition=".5s"
            bg={bg}
            icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
            _hover={hover}
          />
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
