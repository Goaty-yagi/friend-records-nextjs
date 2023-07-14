import { useEffect, useState, useRef, RefObject } from "react";
import { Flex, Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  isLimited: boolean;
}

export default function YScrollLimitationWrapper({
  children,
  isLimited,
}: Props) {
  //this is a wrapper which limite Y scroll from the parent to the bottom
  const listRef = useRef() as RefObject<HTMLDivElement>;
  const [maxH, setMaxH] = useState(0);
  useEffect(() => {
    if (listRef.current) {
      const lisrect = listRef?.current.getBoundingClientRect();
      setMaxH(window.innerHeight - lisrect.top - 36);
    }
  }, [listRef.current]);

  if (!isLimited) {
    return <>{children}</>;
  }

  return (
    <>
      <Box
        w={"100%"}
        ref={listRef}
        maxH={maxH}
        h={maxH}
        overflowY={"auto"}
        overflowX={"hidden"}
      >
        {children}
      </Box>
    </>
  );
}
