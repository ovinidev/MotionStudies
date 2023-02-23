import {
  Circle,
  Flex,
  Heading,
  HStack,
  keyframes,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const GsapPage = () => {
  const containerSetRef = useRef(null);
  const containerToRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.set(containerSetRef.current, {
      x: -200,
      y: -200,
    });

    gsap.from(containerToRef.current, {
      x: 400,
      y: 200,
      duration: 4,
      ease: "expo",
    });

    gsap.fromTo(
      containerToRef.current,
      {
        x: -200,
        opacity: 0,
        y: 0,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 2,
        repeat: -1,
        yoyo: true,
        delay: 2,
      }
    );
  }, []);

  const handleClick = () => {
    gsap.fromTo(
      containerToRef.current,
      {
        rotate: 0,
      },
      {
        rotate: 360,
      }
    );
  };

  const animate = keyframes`
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

  return (
    <Flex direction="column" w="100%" flexDir="column" align="center">
      <Heading ref={headingRef} m="16px 0">
        GSAP: método set()
      </Heading>
      <Text>É um método que seta as configurações iniciais do elemento</Text>

      <HStack ref={containerSetRef} spacing="4" maxW={1200} h={300} m="0 auto">
        <Flex w={240} h="90%" bg="#1A1A1A" borderRadius="10px"></Flex>

        <Flex w={240} h="90%" bg="#1A1A1A" borderRadius="10px"></Flex>

        <Flex w={240} h="90%" bg="#1A1A1A" borderRadius="10px"></Flex>
      </HStack>

      <Heading ref={headingRef} m="16px 0">
        GSAP: método to()
      </Heading>

      <Text>É um método que seta as configurações finais do elemento</Text>

      <HStack
        onClick={handleClick}
        className="container"
        ref={containerToRef}
        spacing="4"
        maxW={1200}
        h={300}
        m="0 auto"
      >
        <Flex w={240} h="90%" bg="#1A1A1A" borderRadius="10px"></Flex>

        <Flex w={240} h="90%" bg="#1A1A1A" borderRadius="10px"></Flex>

        <Flex w={240} h="90%" bg="#1A1A1A" borderRadius="10px"></Flex>
      </HStack>

      <Flex
        animation={`${animate} 1s linear infinite`}
        h="100px"
        w="100px"
        borderRadius="50%"
        border="12px solid #3498db"
        borderTop="12px solid #f3f3f3"
      />

      <Circle
        size="100px"
        border="12px solid #3498db"
        borderTop="12px solid #f3f3f3"
      />
    </Flex>
  );
};
