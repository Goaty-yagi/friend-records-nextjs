import { Flex } from "@chakra-ui/react";
import Image from "next/legacy/image";

export default function SlectedSvg({selectedSvg}:{selectedSvg:string}) {
    return (
      <>
        <Flex fontSize={"2rem"} mr={"1rem"} alignItems={"center"}>
          <Flex
            w={"50px"}
            h={"50px"}
            border={"solid #eeeeee"}
            borderRadius={"5px"}
            bg={'#c2bfbfa1'}
            justifyContent={"center"}
            alignItems={"center"}
            position={'relative'}
          >
            {selectedSvg && ( <Image  src={selectedSvg}  layout="fill"/>)}
          </Flex>
        </Flex>
      </>
    );
  }