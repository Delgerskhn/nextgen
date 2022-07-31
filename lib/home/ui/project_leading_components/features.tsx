import { Box, Icon, SimpleGrid, Image } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { Feature } from "./feature";

export const CountryFeatures = () => {
  return (
    <Box p={4} w={"80%"}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Image src="leading_icons/education.png" w={16} h={16} />}
          title={"БОЛОВСРОЛ"}
          texts={[
            "Хувь хүний хөгжил",
            "Цэцэрлэг, бага, дунд, ахлах сургууль",
            "Багш, сурган хүмүүжүүлэгч ",
            "Соёл,урлаг",
            "спорт",
          ]}
        />
        <Feature
          icon={<Image src="leading_icons/health.png" w={16} h={16} />}
          title={"ЭРҮҮЛ МЭНД"}
          texts={[
            "Эмнэлэг үйлчилгээ",
            "Нийгмийн эрүүл мэнд",
            "Урьдчилан сэргийлэх",
            "Хоол хүнс",
            "Хүүхэд",
            "Эм",
          ]}
        />
        <Feature
          icon={<Image src="leading_icons/labor.png" w={16} h={16} />}
          title={"Хөдөлмөр эрхлэлт,амьдрах орчин".toUpperCase()}
          texts={[
            "Амьдрах орчныг сайжруулах",
            "Хөдөлмөр эрхлэлтийн орчин нөхцөл",
            "Ажлын байр бий болгох",
          ]}
        />
      </SimpleGrid>
    </Box>
  );
};

export const GreenDevelopFeatures = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1 }} spacing={10}>
        <Feature
          icon={<Image src="leading_icons/nature.png" w={16} h={16} />}
          title={"БАЙГАЛЬ ОРЧИН"}
          texts={["Дахин боловсруулалт", "Нөхөн сэргээлт", "Аялал жуулчлал"]}
        />
      </SimpleGrid>
    </Box>
  );
};

export const GovernmentBuilt = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1 }} spacing={10}>
        <Feature
          icon={<Image src="leading_icons/productivity.png" w={16} h={16} />}
          title={"ТӨРИЙН БҮТЭЭМЖ"}
          texts={[
            "Төрийн үйлчилгээ",
            "Төрийн хяналт",
            "Төрийн өмчит аж ахуйн нэгжүүд",
            "Цахимжилт",
          ]}
        />
      </SimpleGrid>
    </Box>
  );
};
