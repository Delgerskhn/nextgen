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
import { colors } from "@ui/foundations/colors";
import { color } from "constant";
import { GiRadarCrossSection } from "react-icons/gi";
import {
  CountryFeatures,
  GovernmentBuilt,
  GreenDevelopFeatures,
} from "./project_leading_components/features";

export const ProjectLeadingSectors = () => {
  return (
    <Box   w="full" bg={color.white}>
      <VStack w={"full"}>
        <Heading
          w="50%"
          textAlign={"center"}
          size="xl"
          mt="5"
          fontFamily={"NotoSans"}
          py={10}
        >
          {"Төслийн тэргүүлэх чиглэл".toUpperCase()}
        </Heading>
        <Tabs size="lg" align="center" minH={408} w="full">
          <TabList fontWeight={"bold"} color={color.primary}>
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
          <TabPanels >
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
