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
        <Tabs size="lg" align="center" minH={408}>
          <TabList color={"#003366"}>
            <Tab
              _focus={{
                outline: "none",
              }}
              _selected={{
                color: "#003366",
                borderColor: "#003366",
              }}
              className="active-tab"
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
              _selected={{
                color: "#003366",
                borderColor: "#003366",
              }}
            >
              Ногоон хөгжлийн сэргэлт
            </Tab>
            <Tab
              _focus={{
                outline: "none",
              }}
              className="active-tab"
              _selected={{
                color: "#003366",
                borderColor: "#003366",
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
