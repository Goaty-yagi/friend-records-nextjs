import usePwaManagement from "@/hooks/pwas/use-pwa-management";
import { Button, Box,Text, Flex } from "@chakra-ui/react";
import SlideAnimatioWrapper from "../animations/slideAnimationWrapper";

export default function InstallButton() {
  const { install, installPrompt, isAccepted } = usePwaManagement();

  return (
    <>
      {installPrompt !== null && !isAccepted && (
        <SlideAnimatioWrapper direction="top" id={'pwa'}>
          {/* <Box w={'100%'} position={'absolute'} bottom={0} border={'solid red'} p={'0.5rem'} zIndex={1}> */}
          {/* <Text>You can install on your device!</Text> */}
          <Button onClick={install}>install</Button>
        {/* </Box> */}
        </SlideAnimatioWrapper>
      )}
    </>
  );
}
