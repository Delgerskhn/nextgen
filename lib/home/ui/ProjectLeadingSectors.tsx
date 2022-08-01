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
  css,
  Text,
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
    <Box w="full" bg={color.white} my="10">
      <VStack w="full">
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
          <TabList
            fontWeight={"bold"}
            color={"primeBlue"}
            justifyContent="space-between"
            w="full"
            px={10}
            overflowX={"scroll"}
            overflowY="hidden"
            border={0}
          >
            <Tab
              _focus={{
                outline: "none",
              }}
              borderBottom="5px solid black"
              _selected={{
                color: "#003366",
                borderColor: "#003366",
              }}
              borderColor="gray.100"
              mb="4"
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
              borderColor="gray.100"
              _selected={{
                color: "#003366",
                borderColor: "#003366",
              }}
              borderBottom="5px solid black"
              mb="4"
            >
              Ногоон хөгжлийн сэргэлт
            </Tab>
            <Tab
              _focus={{
                outline: "none",
              }}
              borderColor="gray.100"
              className="active-tab"
              _selected={{
                color: "#003366",
                borderColor: "#003366",
              }}
              borderBottom="5px solid black"
              mb="4"
            >
              Төрийн бүтээмжийн сэргэлт
            </Tab>
            <Tab
              _focus={{
                outline: "none",
              }}
              borderColor="gray.100"
              className="active-tab"
              _selected={{
                color: "#003366",
                borderColor: "#003366",
              }}
              borderBottom="5px solid black"
              mb="4"
            >
              БООМТЫН СЭРГЭЛТ
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
              borderBottom="5px solid black"
              mb="4"
              borderColor="gray.100"
            >
              ЭРЧИМ ХҮЧНИЙ СЭРГЭЛТ
            </Tab>
            <Tab
              _focus={{
                outline: "none",
              }}
              borderBottom="5px solid black"
              mb="4"
              className="active-tab"
              _selected={{
                color: "#003366",
                borderColor: "#003366",
              }}
              borderColor="gray.100"
            >
              АЖ ҮЙЛЛВЭРЖИЛТИЙН СЭРГЭЛТ
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CountryFeatures />
            </TabPanel>
            <TabPanel>
              <GreenDevelopFeatures />
            </TabPanel>
            <TabPanel>
              <GovernmentBuilt />
            </TabPanel>
            <TabPanel>
              <Text
                p={"10"}
                textColor="primeOrange"
                rounded="lg"
                fontSize="4xl"
              >
                Тун удахгүй
              </Text>
            </TabPanel>
            <TabPanel>
              <Text
                p={"10"}
                textColor="primeOrange"
                rounded="lg"
                fontSize="4xl"
              >
                Тун удахгүй
              </Text>
            </TabPanel>
            <TabPanel>
              <Text
                p={"10"}
                textColor="primeOrange"
                rounded="lg"
                fontSize="4xl"
              >
                Тун удахгүй
              </Text>
            </TabPanel>
            <TabPanel>
              <Text
                p={"10"}
                textColor="primeOrange"
                rounded="lg"
                fontSize="4xl"
              >
                Тун удахгүй
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Box>
  );
};
