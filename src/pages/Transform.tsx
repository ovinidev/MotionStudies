import { Box, Flex, HStack } from "@chakra-ui/react";
// CSS Transform:
// matrix (resume todas)
// translate (deslocamento)
// scale (escala)
// rotate (rotação)
// skew (entortar/esticar)
// perspective (perspectiva de ângulo)

export const Transform = () => {
  return (
    <Flex h="100vh" align="center" justify="center">
      <HStack spacing="4" css={{ perspective: "500px" }}>
        <Box
          bg="pink.500"
          borderRadius="16px"
          h="100px"
          w="100px"
          cursor="pointer"
          transition="all 0.5s ease"
          _hover={{
            transform: "scale(1.2)",
          }}
        />
        <Box
          bg="blue.500"
          borderRadius="16px"
          h="100px"
          w="100px"
          cursor="pointer"
          transition="all 0.5s ease"
          transform="skew(7deg)"
          _hover={{
            transform: "scale(1.2)",
          }}
        />
        <Box
          bg="purple.500"
          borderRadius="16px"
          h="100px"
          w="100px"
          cursor="pointer"
          transition="all 0.5s ease"
          transform="rotateY(65deg)"
          _hover={{
            transform: "scale(1.2)",
          }}
        />
        <Box
          bg="pink.500"
          borderRadius="16px"
          h="100px"
          w="100px"
          cursor="pointer"
          transition="all 0.5s ease"
          transformOrigin="50% 100%"
          _hover={{
            transform: "rotate(180deg)",
          }}
          translateX="200px"
        />
        <Box
          bg="purple.100"
          borderRadius="16px"
          h="100px"
          transition="all 0.5s ease"
          w="100px"
          transform="rotateX(15deg)"
          css={{ transformStyle: "preserve-3d", perspective: "200px" }}
          _hover={{
            transform: "rotateX(55deg)",
          }}
        >
          <Box
            transition="all 0.5s ease"
            bg="green.500"
            borderRadius="16px"
            h="100px"
            w="100px"
            cursor="pointer"
            transform="rotateX(90deg)"
            _hover={{
              transform: "rotateX(125deg)",
            }}
          />
        </Box>
        <Box
          transition="all 0.5s ease"
          bg="purple.500"
          borderRadius="16px"
          h="100px"
          w="100px"
          cursor="pointer"
          _hover={{
            transform: "translateY(-25px)",
          }}
        />
      </HStack>
    </Flex>
  );
};
