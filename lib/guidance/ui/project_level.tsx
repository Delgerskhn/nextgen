import {
  Heading,
  ListItem,
  Stack,
  UnorderedList,
  Text,
} from "@chakra-ui/react";

export const ProjectLevel = () => {
  return (
    <Stack py="20" px={{ base: "5%", md: "20%" }} bg="#FFF">
      <Heading size={"xl"} textAlign="center" id="head">
        ТӨСЛИЙН ҮЕ ШАТ
      </Heading>
      <UnorderedList
        textColor={"primeOrange"}
        experimental_spaceY="5"
        pt={10}
        lineHeight={8}
      >
        <ListItem>
          <Text color={"black"} textAlign="justify">
            <b>
              “ТӨСӨЛ ХЭРХЭН БИЧИХ ВЭ” ОЛОН НИЙТЭД ЗОРИУЛСАН НЭЭЛТТЭЙ ЦАХИМ
              СУРГАЛТ
            </b>
            <br />
            “Төсөл хэрхэн бичих вэ” сэдэвт хоёр өдрийн цахим сургалтыг орон
            даяар нээлттэй зарлаж бүртгүүлсэн хүн бүрийг хамруулна. Цахим
            сургалтад www.nextgen.mn хаягаар бүртгүүлэх бөгөөд сургалтад бүрэн
            хамрагдсан хүмүүст оролцогчийн сертификатыг олгоно.
          </Text>
        </ListItem>
        <ListItem>
          <Text color={"black"} textAlign="justify">
            <b>
              “ШИНЭ СЭРГЭЛТ: NEXTGEN 2022” УРАЛДААНЫ ХҮРЭЭНД ТӨСӨЛ ХҮЛЭЭН АВАХ
              БОЛОН СОНГОН ШАЛГАРУУЛАЛТ
            </b>
            <br />
            Олон нийтэд зориулсан онлайн сургалтын дараа өөрсдийн орон нутагт
            тулгамдаж буй асуудлыг бүтээлч, олон нийтэд хүртээмжтэй байдлаар
            шийдвэрлэх 2-5 хүний бүрэлдэхүүнтэй баг бүрдүүлэн 1 сарын хугацаанд
            төслөө бичин илгээж, уралдаанд төслийн сонгон шалгаруулалтад
            оролцоно. Уралдаанд оролцсон бүх төслөөс 21 аймаг, 9 дүүрэг бүрээс
            шилдэг нэг, нийтдээ 30 төслийг шалгаруулж төсөл бүр 20.000.000
            хүртэлх төгрөгийн санхүүжилт авах эрх үүснэ. Төслийн багаас хамгийн
            багадаа 1 гишүүн 2 өдрийн цахим сургалтад хамрагдсан байна.
          </Text>
        </ListItem>
        <ListItem id="#third">
          <Text color={"black"} textAlign="justify">
            <b>ШАЛГАРСАН ТӨСЛҮҮДИЙГ ЧАДАВХЖУУЛАХ СУРГАЛТ</b>
            <br />
            Уралдаанд шалгарсан төслийн багийн гишүүдийг Улаанбаатар хотод 7
            хоногийн хугацаатай чадавхжуулах сургалтад хамруулна. Энэхүү
            сургалтаар “Алсын хараа 2050” урт хугацааны хөгжлийн бодлого болон
            түүний эхний 10 жилийн дунд хугацааны хөгжлийн бодлого болох “Шинэ
            сэргэлтийн бодлого”, хөгжлийн асуудлуудад дүн шинжилгээ хийх онол
            арга зүй болон төсөл боловсруулж хэрэгжүүлэх суурь ойлголт,
            аргачлалын чиглэлээр оролцогчдын чадавхыг бэхжүүлнэ. Сургалтын үр
            дүнд оролцогчид төслийн саналаа боловсронгуй болгон хөгжүүлэн,
            санхүүжилтийг хүлээн аван хэрэгжүүлж эхлэхэд бэлэн болно.
          </Text>
        </ListItem>
        <ListItem id="#fourth">
          <Text color={"black"} textAlign="justify">
            <b>ШАЛГАРСАН ТӨСЛҮҮДИЙН ХЭРЭГЖИЛТ</b>
            <br />
            Шалгарсан 30 төслийн баг чадавхжуулах сургалтад хамрагдсаны
            дараагаар төслөө 2 сарын хугацаанд хэрэгжүүлнэ. Төсөл хэрэгжилтийн
            хугацаанд баг тус бүр сургагч багш болон ментортой байна. Сургагч
            багш нь төслийн багтай байнгын холбоотой байх бөгөөд төслийн
            агуулгын болон зохион байгуулалтын шаардлагатай дэмжлэг туслалцааг
            үзүүлнэ. Ментор нь багийн төслийн явц байдал, хэрэгжилттэй 2 долоо
            хоног тутам танилцан, зөвлөж ажиллана.
          </Text>
        </ListItem>
        <ListItem id="#fifth">
          <Text color={"black"} textAlign="justify">
            <b>ТӨСЛИЙН ХААЛТ</b>
            <br />
            Нийт 30 төслөөс тухайн зорилтот нийгмийн бүлэг, асуудалд хамгийн их
            эерэг өөрчлөлтийг авчирсан 3 шилдэг төслийг шалгаруулан урамшуулна.
          </Text>
        </ListItem>
      </UnorderedList>
    </Stack>
  );
};
