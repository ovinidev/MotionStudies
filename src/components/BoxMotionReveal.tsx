import { chakra, BoxProps } from "@chakra-ui/react";
import {
  motion,
  isValidMotionProp,
  useAnimation,
  useInView,
} from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

interface BoxMotionRevealProps extends BoxProps {
  children: ReactNode;
}

export const BoxMotionReveal = ({
  children,
  ...rest
}: BoxMotionRevealProps) => {
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [control, isInView]);

  const boxVariant = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ChakraBox
      ref={ref}
      variants={boxVariant}
      initial={boxVariant.hidden}
      animate={control}
      bg="gray.100"
      w={300}
      h={200}
      exit={{ opacity: 0 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 0.7,
        ease: "easeIn",
      }}
      {...rest}
    >
      {children}
    </ChakraBox>
  );
};
