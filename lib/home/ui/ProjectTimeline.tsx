import { ReactElement } from "react";
import {
  Box,
  Heading,
  VStack,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";
import { FlipBox } from "@ui/Flipbox";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import React from "react";
import { border, color } from "constant";
const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};
const settings_second = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export const ProjectTimeline = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "30%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const settings_break = useBreakpointValue({
    base: settings_second,
    md: settings,
  });

  let value = useLayoutBreakPointValue();
  return (
    <Stack px={value} w="full" backgroundImage={"/level.png"}>
      <VStack>
        <Heading
          size="xl"
          w="50%"
          textAlign={"center"}
          // bg="#013365"
          color={"white"}
          mb="12"
          mt="24"
        >
          {"Үе шатууд".toUpperCase()}
        </Heading>
        <Box width={"full"} overflow={"hidden"} position={"relative"}>
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* Left Icon */}
          <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={0}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            borderRadius={border.button_border_radius}
            borderWidth={2}
            p="2"
            py={6}
            bgColor={color.white}
            borderColor={"black"}
            _focus={{}}
            onClick={() => slider?.slickPrev()}
          >
            <BiLeftArrowAlt size="40px" />
          </IconButton>
          {/* Right Icon */}
          <IconButton
            aria-label="right-arrow"
            borderRadius={border.button_border_radius}
            borderWidth={2}
            borderColor={"black"}
            _focus={{}}
            p="2"
            py={6}
            variant="ghost"
            position="absolute"
            right={0}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            bgColor={color.white}
            onClick={() => slider?.slickNext()}
          >
            <BiRightArrowAlt size="40px" />
          </IconButton>
          {/* Slider */}
          <Slider
            {...settings_break}
            // className="level"
            ref={(slider) => setSlider(slider)}
          >
            <Feature
              icon={<Icon color="gray.100" as={RiNumber1} w={32} h={32} />}
              title={"Сонгон шалгаруулалт"}
              text={`Оролцогчдыг сонгон 
                  шалгаруулхад харьяа 
                  аймаг, дүүргийн ЗДТГ 
                  болон Залуучуудын 
                  агентлагуудтай 
                  ажиллах`}
              ml={0}
            />
            <Feature
              icon={<Icon color="gray.100" as={RiNumber2} w={32} h={32} />}
              title={"Асуудлыг задлан шинжлэх"}
              text={
                "Ирүүлсэн асуудалд дүн шинжилгээ хийх. Problem diagnostic. System analysis."
              }
            />
            <Feature
              icon={<Icon color="gray.100" as={RiNumber3} w={32} h={32} />}
              title={"Шийдлийг бататгах"}
              text={`Шийдлээ баталгаажуулж бүрэн хэмжээний 
                  төсөл боловсруулж 
                  хөрөнгө босгоно.`}
            />
            <Feature
              icon={<Icon color="gray.100" as={RiNumber4} w={32} h={32} />}
              title={"Шийдлийг хэрэгжүүлэх"}
              text={
                "Төслийг хэрэгжүүлж явцыг Web Portal үүсгэн хянаж явцын тайлан тавьна."
              }
            />
            <Feature
              icon={<Icon color="gray.100" as={RiNumber5} w={32} h={32} />}
              title={"Дүгнэлт"}
              text={`Шилдэг төслийг 
                  шалгаруулан 
                  хаалтын арга 
                  хэмжээ зохион 
                  байгуулах.`}
            />
          </Slider>
        </Box>
      </VStack>
    </Stack>
  );
};

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  ml?: number;
}

const Feature = ({ title, text, icon, ml }: FeatureProps) => {
  return (
    <Stack w={{ base: "full", md: "full" }} p={10} height={600}>
      <Stack
        bg={color.white}
        border={"2px solid "}
        borderColor="black"
        p="6"
        borderRadius={8}
        direction="column"
        alignItems={"center"}
        py="14"
        height={400}
      >
        <Flex w={16} h={16} align={"center"} justify={"center"} mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600} textAlign="center" pt={10}>
          {title}
        </Text>
        <Text color={"black"} textAlign="justify" px={{ base: 2, md: 5 }}>
          {text}
        </Text>
      </Stack>
    </Stack>
  );
};
