import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export const ProjectLevelTimeline = () => {
  return (
    <Stack justifyContent="center" bg="#fff">
      <Stack width={{ base: "full", md: "5xl" }} mx="auto" pb={20}>
        <Heading size={"xl"} pb={"20"} pt="20" textAlign="center" id="head">
          ТӨСЛИЙН ҮЕ ШАТ
        </Heading>
        <Box>
          <Box className="card card-one" pt={0}>
            <div className="info">
              <div className="card-content-odd ">
                <Box
                  transitionDuration=".5s"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  style={{ width: "500px" }}
                  pb={5}
                  shadow="lg"
                >
                  <Heading bg="primeBlue" p="10" color={"#fff"} rounded="lg">
                    “ТӨСӨЛ ХЭРХЭН БИЧИХ ВЭ” ОЛОН НИЙТЭД ЗОРИУЛСАН НЭЭЛТТЭЙ ЦАХИМ
                    СУРГАЛТ
                  </Heading>
                  <Text p={5}>
                    “Төсөл хэрхэн бичих вэ” сэдэвт хоёр өдрийн цахим сургалтыг
                    орон даяар нээлттэй зарлаж бүртгүүлсэн хүн бүрийг хамруулна.
                    Цахим сургалтад www.nextgen.mn хаягаар бүртгүүлэх бөгөөд
                    сургалтад бүрэн хамрагдсан хүмүүст оролцогчийн сертификатыг
                    олгоно.
                  </Text>
                  <Text textAlign={"center"} mt="3">
                    2022.08.01- 08.25 /Бүртгэл/ <br />
                    2022.08.26-27/Онлайн Сургалт/
                  </Text>
                </Box>
              </div>
            </div>
          </Box>
          <div className="card card-second">
            <div className="info">
              <div className="card-content-even">
                <Box
                  transitionDuration=".5s"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  style={{ width: "500px" }}
                  pb={5}
                  shadow="lg"
                >
                  <Heading p={10} bg="deepGreen" color={"#fff"} rounded="lg">
                    “ШИНЭ СЭРГЭЛТ: NEXTGEN” УРАЛДААНЫ ХҮРЭЭНД ТӨСӨЛ ХҮЛЭЭН АВАХ
                    БОЛОН СОНГОН ШАЛГАРУУЛАЛТ
                  </Heading>
                  <Text p={5}>
                    Олон нийтэд зориулсан онлайн сургалтын дараа өөрсдийн орон
                    нутагт тулгамдаж буй асуудлыг бүтээлч, олон нийтэд
                    хүртээмжтэй байдлаар шийдвэрлэх 2-5 хүний бүрэлдэхүүнтэй баг
                    бүрдүүлэн 1 сарын хугацаанд төслөө бичин илгээж, уралдаанд
                    төслийн сонгон шалгаруулалтад оролцоно. Уралдаанд оролцсон
                    бүх төслөөс 21 аймаг, 9 дүүрэг бүрээс шилдэг нэг, нийтдээ 30
                    төслийг шалгаруулж төсөл бүр 20.000.000 хүртэлх төгрөгийн
                    санхүүжилт авах эрх үүснэ. Төслийн багаас хамгийн багадаа 1
                    гишүүн 2 өдрийн цахим сургалтад хамрагдсан байна.
                  </Text>
                  <Text textAlign={"center"} mt="3">
                    2022.08.29-09.25/Хүлээн авах/
                    <br /> 2022.09.26-27 /Шалгаруулах/
                    <br />
                    2022.09.28 /Зарлах/
                  </Text>
                </Box>
              </div>
            </div>
          </div>
          <div className="card card-third">
            <div className="info">
              <div className="card-content-odd">
                <Box
                  transitionDuration=".5s"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  style={{ width: "500px" }}
                  shadow="lg"
                >
                  <Heading p={10} bg="primeOrange" color={"#fff"} rounded="lg">
                    ШАЛГАРСАН ТӨСЛҮҮДИЙГ ЧАДАВХЖУУЛАХ СУРГАЛТ
                  </Heading>
                  <Text p={5}>
                    Уралдаанд шалгарсан төслийн багийн гишүүдийг Улаанбаатар
                    хотод 7 хоногийн хугацаатай чадавхжуулах сургалтад
                    хамруулна. Энэхүү сургалтаар “Алсын хараа 2050” урт
                    хугацааны хөгжлийн бодлого болон түүний эхний 10 жилийн дунд
                    хугацааны хөгжлийн бодлого болох “Шинэ сэргэлтийн бодлого”,
                    хөгжлийн асуудлуудад дүн шинжилгээ хийх онол арга зүй болон
                    төсөл боловсруулж хэрэгжүүлэх суурь ойлголт, аргачлалын
                    чиглэлээр оролцогчдын чадавхыг бэхжүүлнэ. Сургалтын үр дүнд
                    оролцогчид төслийн саналаа боловсронгуй болгон хөгжүүлэн,
                    санхүүжилтийг хүлээн аван хэрэгжүүлж эхлэхэд бэлэн болно.
                  </Text>
                  <Text textAlign={"center"} py="5">
                    2022.10.01-10.07
                  </Text>
                </Box>
              </div>
            </div>
          </div>
          <div className="card card-fourth">
            <div className="info">
              <div className="card-content-even">
                <Box
                  shadow="lg"
                  transitionDuration=".5s"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  style={{ width: "500px" }}
                >
                  <Heading
                    p={10}
                    bg="primeYellow"
                    color={"primeBlue"}
                    rounded="lg"
                  >
                    ШАЛГАРСАН ТӨСЛҮҮДИЙН ХЭРЭГЖИЛТ{" "}
                  </Heading>
                  <Text p={5}>
                    Шалгарсан 30 төслийн баг чадавхжуулах сургалтад хамрагдсаны
                    дараагаар төслөө 2 сарын хугацаанд хэрэгжүүлнэ. Төсөл
                    хэрэгжилтийн хугацаанд баг тус бүр сургагч багш болон
                    ментортой байна. Сургагч багш нь төслийн багтай байнгын
                    холбоотой байх бөгөөд төслийн агуулгын болон зохион
                    байгуулалтын шаардлагатай дэмжлэг туслалцааг үзүүлнэ. Ментор
                    нь багийн төслийн явц байдал, хэрэгжилттэй 2 долоо хоног
                    тутам танилцан, зөвлөж ажиллана.
                  </Text>
                  <Text textAlign={"center"} py="5">
                    2022.10.08 - 12.08
                  </Text>
                </Box>
              </div>
            </div>
          </div>
          <Box
            className="card card-fifth"
            pb={"0"}
            mb={0}
            // style={{ paddingBottom: 0 }}
          >
            <div className="info">
              <div className="card-content-odd">
                <Box
                  shadow="lg"
                  transitionDuration=".5s"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  style={{ width: "500px" }}
                >
                  <Heading p={10} bg="primeBrown" color={"#fff"} rounded="lg">
                    ТӨСЛИЙН ХААЛТ
                  </Heading>
                  <Text p={5}>
                    Нийт 30 төслөөс тухайн зорилтот нийгмийн бүлэг, асуудалд
                    хамгийн их эерэг өөрчлөлтийг авчирсан 3 шилдэг төслийг
                    шалгаруулан мөнгөн шагнал олгоно.
                  </Text>
                  <Text textAlign={"center"} py="5">
                    2022.12.16
                  </Text>
                </Box>
              </div>
            </div>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
