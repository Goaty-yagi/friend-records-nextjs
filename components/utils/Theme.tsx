"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion, AnimationDefinition } from "framer-motion";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface definitionProps {
  opacity: number;
  y: number;
}

function aniationComplite(
  definition: definitionProps,
  setter: Dispatch<boolean>
) {
  if (definition!.opacity) {
    setter(true);
  }
}

export default function Theme() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMounted, setIsMounted] = useState(false);
  const bg = useColorModeValue("rgb(255, 235, 197)", "purple.500");
  const hover = useColorModeValue(
    { bg: "orange", color: "white" },
    { bg: "purple" }
  );
  const [animationEnd, setAnimationEnd] = useState(true);
  useEffect(() => {
    if (!isMounted) {
      return setIsMounted(true);
    }
  }, []);

  return (
    <Box
      onClick={
        animationEnd
          ? (e) => {
              e.preventDefault();
              toggleColorMode();
              setAnimationEnd(false);
            }
          : () => {}
      }
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={useColorModeValue("light", "dark")} // animation doesn't work without key. why??
          initial={{ y: isMounted ? -20 : 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onAnimationComplete={(d) => {
            aniationComplite(d as definitionProps, setAnimationEnd);
          }}
        >
          <Box
            borderRadius={"0.4rem"}
            p="0.47rem"
            fontSize={"1.5rem"}
            transition=".5s"
            bg={bg}
            _hover={hover}
          >
            {colorMode === "light" ? <FiSun /> : <FiMoon />}
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
