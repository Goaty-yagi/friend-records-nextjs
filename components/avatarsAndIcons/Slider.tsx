import {
    Box,
    Flex,
  } from "@chakra-ui/react";
  import { useEffect, useState, useRef, forwardRef } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { wrap } from "popmotion";
  
  function SlideItems({
    svgArray,
    setFun,
    eachSlideWidth,
    setSelectedIcon,
  }) {
    // const [array, setArray] = useState([]);
    // const [mounted, setMounted] = useState(false);
    const clickAction = (icon) => {
      setFun(icon);
      setSelectedIcon(icon);
    };
    let markup;
    if (svgArray.length) {
      markup = (
        <Flex >
          {svgArray.map((file, index) => {
            return (
              <Box
                h={eachSlideWidth + "px"}
                w={eachSlideWidth + "px"}
                key={index}
                borderRadius={'15px'}
                _hover={{ bg: "#ececec" }}
                transition={".3s"}
                position="relative"
                onClick={() => {
                  clickAction(file);
                }}
              >
                {file.svg}
              </Box>
            );
          })}
        </Flex>
      );
    }
    return <>{markup}</>;
  }
  function Slide({ svgArray, setFun, eachSlideWidth, setSelectedIcon }) {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, svgArray.length, page);
    const [animateWidth, setAnimateWidth] = useState(0);
    const [edge, setEdge] = useState(false);
    const [edgeAnime, setEdgeAnime] = useState(0);
    const paginate = (newDirection:number) => {
      const stopLength = svgArray.length - 3;
      if (stopLength === imageIndex) {
        if (newDirection === -1) {
          setEdge(false);
          setAnimateWidth(
            (pre) => (pre += newDirection > 0 ? -eachSlideWidth : eachSlideWidth)
          );
          setPage([page + newDirection, newDirection]);
          return;
        } else {
          setEdgeAnime(-20);
          setEdge((state) => true);
          return;
        }
      } else if (!imageIndex) {
        if (newDirection === 1) {
          setEdge(false);
          setAnimateWidth(
            (pre) => (pre += newDirection > 0 ? -eachSlideWidth : eachSlideWidth)
          );
          setPage([page + newDirection, newDirection]);
          return;
        } else {
          setEdgeAnime(20);
          setEdge((state) => true);
          return;
        }
      }
      setAnimateWidth(
        (pre) => (pre += newDirection > 0 ? -eachSlideWidth : eachSlideWidth)
      );
      setPage([page + newDirection, newDirection]);
    };
    let markup;
    if (svgArray.length) {
      markup = (
        <Flex
          w={"100%"}
          h={"100%"}
          position={"relative"}
          alignItems={"center"}
        >
          <Flex
            w="30px"
            h="40px"
            bg="none"
            zIndex={"1"}
            justifyContent={"center"}
            alignItems="center"
            fontSize={"16px"}
            border="none"
            borderRadius={"0.2rem"}
            transform="scale(-1)"
            transition={".3s"}
            _hover={{ bg: "rgba(0,0,0,.7)" }}
            onClick={() => (edge ? "" : paginate(-1))}
          >
            <Box display="inline-block">{"❯"}</Box>
          </Flex>
          <Box
            w={eachSlideWidth * 3}
            h={"60px"}
            overflowX={"hidden"}
            position={"relative"}
          >
            <Flex
              as={motion.div}
              position={"absolute"}
              animate={{
                x: edge ? [edgeAnime, animateWidth - animateWidth] : "",
              }}
              onAnimationComplete={() => {
                setEdge(false);
              }}
            >
              <motion.div animate={{ x: animateWidth }}>
                <SlideItems
                  svgArray={svgArray}
                  setFun={setFun}
                  eachSlideWidth={eachSlideWidth}
                  setSelectedIcon={setSelectedIcon}
                />
              </motion.div>
            </Flex>
          </Box>
          <Flex
            w="30px"
            h="40px"
            bg="none"
            right={"10px"}
            zIndex={"1"}
            justifyContent={"center"}
            alignItems="center"
            border="none"
            borderRadius={"0.2rem"}
            fontSize={"16px"}
            transition={".3s"}
            _hover={{ bg: "rgba(0,0,0,.7)" }}
            onClick={() => (edge ? "" : paginate(1))}
          >
            <Box>{"❯"}</Box>
          </Flex>
        </Flex>
      );
    }
    return <>{markup}</>;
  }
  
  function SlectedIcon(selecedSvg:string) {
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
            {selecedSvg}
          </Flex>
        </Flex>
      </>
    );
  }

interface Config{
  name:string
  svg:string
}

interface Props {
  svgArray:Config[]
  setFun:any
 defaultSvg?:string
}

  export default function Slider({ svgArray, setFun, defaultSvg}:Props) {
    const [selectedIcon, setSelectedIcon] = useState('');
    const [eachSlideWidth, setEachSlideWidth] = useState(56);
    const props = {
      h: eachSlideWidth,
      w: eachSlideWidth,
      fontSize: eachSlideWidth,
    };
    useEffect(() => {
      if (typeof defaultSvg !== "undefined") {
        setFun(defaultSvg);
        setSelectedIcon(() => defaultSvg);
      } else {
        setSelectedIcon(() => svgArray[0].svg);
        setFun(svgArray[0]);
      }
    }, []);
    return (
      <>
        <Flex w={"100%"} h={"100%"} alignItems={"center"} className={"out"}>
          <SlectedIcon selectedIcon={selectedIcon} />
  
          <Slide
            iconArray={svgArray}
            setIcon={setFun}
            eachSlideWidth={eachSlideWidth}
            props={props}
            setSelectedIcon={setSelectedIcon}
          />
        </Flex>
      </>
    );
  }
  