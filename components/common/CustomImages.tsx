import { Flex, Skeleton, Progress } from "@chakra-ui/react";
import Image from "next/legacy/image";
import { useState } from "react";

interface Props {
    src:string,
    alt:string,
    layout?:string,
    objectFit?:string,
    objectPosition?:string
    width?:string,
    height?:string
}

export default function CustomImage({ ...style }:any) {
  //props contain image props like below
  // props: {
  //   src:'',
  //   alt:'',
  //   layout:'',
  //   objectFit:'',
  //   objectPosition:''
  //   width:'',
  //   height:''
  // }
  const [isLoaded, setIsLoaded] = useState(false);
  function onLoading() {
    setIsLoaded(true);
  }
  return (
    <Flex h="100%" w="100%" justifyContent={"center"} alignItems="center">
     
        <Image
        {...style}
          onLoadingComplete={() => onLoading()}
        />
        {!isLoaded&&(
          <Skeleton height="100%" w="100%"/>
        )}
    </Flex>
  );
}