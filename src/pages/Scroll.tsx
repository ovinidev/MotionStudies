import { Box, Circle, Flex, Heading } from "@chakra-ui/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SectionProps {
  className: string;
}

const Section = ({ className }: SectionProps) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      className,
      {
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: className,
          markers: true,
          start: "top 80% ",
          end: "bottom 70% ",
          scrub: 1,
          // play, pause, resume, reverse, restart, reset, complete
          // toggleActions: "OnEnter OnLeave OnEnterBack OnLeaveBack",
        },
      }
    );

    return () => {
      gsap.killTweensOf(className);
    };
  }, []);

  return (
    <Flex>
      <Flex h={100} w={100} direction="column" bg="red" className="text">
        <Heading>Scroll Trigger</Heading>
      </Flex>
      <Flex h={100} w={100} direction="column" bg="red" className="text">
        <Heading>Scroll Trigger</Heading>
      </Flex>
    </Flex>
  );
};

export const Scroll = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".text",
      {
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".text",
          markers: true,
          start: "top 80% ",
          end: "bottom 70% ",
          scrub: 1,
          // play, pause, resume, reverse, restart, reset, complete
          // toggleActions: "OnEnter OnLeave OnEnterBack OnLeaveBack",
        },
      }
    );

    gsap.fromTo(
      ".text2",
      {
        x: -800,
      },
      {
        x: 0,
        duration: 5,
        scrollTrigger: {
          trigger: ".text2",
          markers: true,
          start: "top 80% ",
          end: "bottom 0% ",
          scrub: 2,
          // play, pause, resume, reverse, restart, reset, complete
          // toggleActions: "OnEnter OnLeave OnEnterBack OnLeaveBack",
        },
      }
    );

    gsap.to(".pin", {
      x: 0,
      duration: 5,
      scrollTrigger: {
        trigger: ".pin",
        markers: true,
        start: "top 80% ",
        end: "bottom 0% ",
        scrub: true,
        pin: true,
        // play, pause, resume, reverse, restart, reset, complete
        // toggleActions: "OnEnter OnLeave OnEnterBack OnLeaveBack",
      },
    });

    return () => {
      gsap.killTweensOf(".text");
    };
  }, []);

  return (
    <Flex direction="column" w="100%" flexDir="column" align="center">
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading className="text2">Scroll Trigger</Heading>
      <Heading className="text2">Scroll Trigger</Heading>
      <Heading className="text2">Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Circle className="pin" size="100px" bg="red">
        PIN
      </Circle>
      <Heading mt="40rem">Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading className="text2">Scroll Trigger</Heading>
      <Heading className="text2">Scroll Trigger</Heading>
      <Heading className="text2">Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Circle className="pin" size="100px" bg="red">
        PIN
      </Circle>
      <Heading mt="40rem">Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>
      <Heading>Scroll Trigger</Heading>

      <Section className="text1" />
      <Section className="text2" />
      <Section className="text3" />
      <Section className="text4" />
      <Section className="text5" />
      <Section className="text6" />
      <Section className="text7" />
      <Section className="text8" />
      <Heading className="text9">Scroll Trigger</Heading>
    </Flex>
  );
};
