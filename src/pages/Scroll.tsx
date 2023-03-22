import { Flex, HStack, Stack } from "@chakra-ui/react";
import { BoxMotionReveal } from "../components/BoxMotionReveal";

export const Scroll = () => {
  return (
    <Flex direction="column" w="100%" flexDir="column" align="center">
      <Stack spacing="8" w="80%">
        <Flex bg="gray.200" h="40rem" />
        <Flex bg="gray.200" h="40rem" />

        <Flex bg="gray.200" h="40rem" />
      </Stack>

      <Stack spacing="12" my="2rem">
        <BoxMotionReveal className="text">a</BoxMotionReveal>
        <BoxMotionReveal className="text">a</BoxMotionReveal>
        <BoxMotionReveal className="text">a</BoxMotionReveal>
        <BoxMotionReveal className="text">a</BoxMotionReveal>
        <BoxMotionReveal className="text">a</BoxMotionReveal>
        <BoxMotionReveal className="text">a</BoxMotionReveal>
        <BoxMotionReveal className="text">a</BoxMotionReveal>
        <BoxMotionReveal className="text">a</BoxMotionReveal>
      </Stack>

      <HStack spacing="6" my="2rem">
        <BoxMotionReveal className="text">a</BoxMotionReveal>
        <BoxMotionReveal className="text">a</BoxMotionReveal>
        <BoxMotionReveal className="text">a</BoxMotionReveal>
        <BoxMotionReveal className="text">a</BoxMotionReveal>
        <BoxMotionReveal className="text">a</BoxMotionReveal>
      </HStack>
      <Stack spacing="8" w="80%">
        <Flex bg="gray.200" h="40rem" />
        <Flex bg="gray.200" h="40rem" />

        <Flex bg="gray.200" h="40rem" />
      </Stack>
      <Stack spacing="8" w="80%">
        <Flex bg="gray.200" h="40rem" />
        <Flex bg="gray.200" h="40rem" />

        <Flex bg="gray.200" h="40rem" />
      </Stack>
    </Flex>
  );
};
