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
  Button,
  Link,
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
  slidesToShow: 2,
  slidesToScroll: 2,
};
const settings_second = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const settings_third = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
};
export const ProjectTimeline = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "30%" });
  const settings_break = useBreakpointValue({
    base: settings_second,
    md: settings_third,
    lg: settings,
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
              title={
                "ТӨСӨЛ ХЭРХЭН БИЧИХ ВЭ” ОЛОН НИЙТЭД ЗОРИУЛСАН НЭЭЛТТЭЙ ЦАХИМ СУРГАЛТ"
              }
              text={`“Төсөл хэрхэн бичих вэ” сэдэвт хоёр өдрийн цахим сургалтыг орон даяар нээлттэй зарлаж бүртгүүлсэн хүн бүрийг хамруулна. Цахим сургалтад www.nextgen.mn хаягаар бүртгүүлэх бөгөөд сургалтад бүрэн хамрагдсан хүмүүст оролцогчийн  сертификатыг олгоно.`}
              ml={0}
            />
            <Feature
              icon={<Icon color="gray.100" as={RiNumber2} w={32} h={32} />}
              title={"ТӨСӨЛ ХҮЛЭЭН АВАХ БОЛОН СОНГОН ШАЛГАРУУЛАЛТ "}
              text={
                "Олон нийтэд зориулсан онлайн сургалтын дараа өөрсдийн орон нутагт тулгамдаж буй асуудлыг бүтээлч, олон нийтэд хүртээмжтэй байдлаар шийдвэрлэх 2-5 хүний бүрэлдэхүүнтэй баг бүрдүүлэн 1 сарын хугацаанд төслөө бичин илгээж, уралдаанд төслийн сонгон шалгаруулалтад оролцоно. Уралдаанд оролцсон бүх төслөөс 21 аймаг, 9 дүүрэг бүрээс шилдэг нэг, нийтдээ 30 төслийг шалгаруулж төсөл бүр 20.000.000 хүртэлх төгрөгийн санхүүжилт авах эрх үүснэ. Төслийн багаас хамгийн багадаа 1 гишүүн 2 өдрийн цахим сургалтад хамрагдсан байна."
              }
            />
            <Feature
              icon={<Icon color="gray.100" as={RiNumber3} w={32} h={32} />}
              title={"ШАЛГАРСАН ТӨСЛҮҮДИЙГ ЧАДАВХЖУУЛАХ СУРГАЛТ"}
              text={`Уралдаанд шалгарсан төслийн багийн гишүүдийг Улаанбаатар хотод 7 хоногийн хугацаатай чадавхжуулах сургалтад хамруулна. Энэхүү сургалтаар “Алсын хараа 2050” урт хугацааны хөгжлийн бодлого болон түүний эхний 10 жилийн дунд хугацааны хөгжлийн бодлого болох “Шинэ сэргэлтийн бодлого”, хөгжлийн асуудлуудад дүн шинжилгээ хийх онол арга зүй болон төсөл боловсруулж хэрэгжүүлэх суурь ойлголт, аргачлалын чиглэлээр оролцогчдын чадавхыг бэхжүүлнэ. Сургалтын үр дүнд оролцогчид төслийн саналаа боловсронгуй болгон хөгжүүлэн, санхүүжилтийг хүлээн аван хэрэгжүүлж эхлэхэд бэлэн болно.`}
            />
            <Feature
              icon={<Icon color="gray.100" as={RiNumber4} w={32} h={32} />}
              title={"ШАЛГАРСАН ТӨСЛҮҮДИЙН ХЭРЭГЖИЛТ "}
              text={
                "Шалгарсан 30 төслийн баг чадавхжуулах сургалтад хамрагдсаны дараагаар төслөө 2 сарын хугацаанд хэрэгжүүлнэ. Төсөл хэрэгжилтийн хугацаанд баг тус бүр сургагч багш болон ментортой  байна. Сургагч багш нь төслийн багтай байнгын холбоотой байх бөгөөд төслийн агуулгын болон зохион байгуулалтын шаардлагатай дэмжлэг туслалцааг үзүүлнэ. Ментор нь багийн төслийн явц байдал, хэрэгжилттэй 2 долоо хоног тутам танилцан, зөвлөж ажиллана."
              }
            />
            <Feature
              icon={<Icon color="gray.100" as={RiNumber5} w={32} h={32} />}
              title={"ТӨСЛИЙН ХААЛТ"}
              text={`Нийт 30 төслөөс тухайн зорилтот нийгмийн бүлэг, асуудалд хамгийн их эерэг өөрчлөлтийг авчирсан 3 шилдэг төслийг шалгаруулан мөнгөн шагнал олгоно.`}
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
    <Stack w={{ base: "full", md: "full" }} p={10} minH={600}>
      <Stack
        bg={color.white}
        border={"2px solid "}
        borderColor="black"
        p="6"
        borderRadius={8}
        direction="column"
        alignItems={"center"}
        py="14"
        h={400}
      >
        <Flex w={16} h={16} align={"center"} justify={"center"} mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600} textAlign="center" pt={10}>
          {title}
        </Text>
        <Text color={"black"} textAlign="justify" px={{ base: 2, md: 5 }}>
          {text.slice(0, 150)}...{" "}
          <Link
            cursor={"pointer"}
            color="primeBlue"
            fontWeight={"bold"}
            href="/guidance"
            textDecorationLine={"underline"}
          >
            Дэлгэрэнгүй
          </Link>
        </Text>
      </Stack>
    </Stack>
  );
};
