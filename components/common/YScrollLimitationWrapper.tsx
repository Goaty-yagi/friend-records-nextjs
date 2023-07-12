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
      console.log("lisrect",lisrect, window.innerHeight - lisrect.top - 48)
      setMaxH(window.innerHeight - lisrect.top - 48);
    }
  }, [listRef.current]);

  //   function UnlimitedWrapper({children}:{'children': React.ReactNode}) {
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