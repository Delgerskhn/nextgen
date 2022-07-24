import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { GiRadarCrossSection } from "react-icons/gi";
import {
  CountryFeatures,
  GovernmentBuilt,
  GreenDevelopFeatures,
} from "./project_leading_components/features";

export const ProjectLeadingSectors = () => {
  return (
    <Box maxW={"container.xl"} mx="auto" w="full">
      <VStack w={"full"}>
        <Heading
          w="50%"
          my="24"
          textAlign={"center"}
          size="xl"
          mt="16"
          mb="16"
          fontFamily={"NotoSans"}
          py={10}
        >
          Төслийн тэргүүлэх чиглэл
        </Heading>
        <Tabs w={"full"} size="lg" variant="enclosed" align="center" minH={408}>
          <TabList borderColor={"#013365"} _active={{ color: "#013365" }}>
            <Tab
              _focus={{
                outline: "none",
              }}
              className="active-tab"
              _active={{
                borderColor: "#013365",
                color: "#013365",
              }}
            >
              Хот хөдөөгийн сэргэлт
            </Tab>
            <Tab
              _focus={{
                outline: "none",
              }}
              className="active-tab"
              _active={{
                borderColor: "#013365",
              }}
            >
              Ногоон хөгжлийн сэргэлт
            </Tab>
            <Tab
              _focus={{
                outline: "none",
              }}
              className="active-tab"
              _active={{
                borderColor: "#013365",
              }}
            >
              Төрийн бүтээмжийн сэргэлт
            </Tab>
          </TabList>
          <TabPanels px={20}>
            <TabPanel>
              <CountryFeatures />
            </TabPanel>
            <TabPanel>
              <GreenDevelopFeatures />
            </TabPanel>
            <TabPanel>
              <GovernmentBuilt />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Box>
  );
};
