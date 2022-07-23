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
} from "@chakra-ui/react";

import {
  CountryFeatures,
  GovernmentBuilt,
  GreenDevelopFeatures,
} from "./project_leading_components/features";

export const ProjectLeadingSectors = () => {
  return (
    <Box maxW={"container.xl"} mx="auto" w="full">
      <VStack>
        <Heading size="xl" mt="16" mb="6">
          Төслийн тэргүүлэх чиглэл
        </Heading>
        <Tabs size="lg" variant="enclosed" align="center">
          <TabList>
            <Tab
              _focus={{
                outline: "none",
              }}
            >
              Хот хөдөөгийн сэргэлт
            </Tab>
            <Tab
              _focus={{
                outline: "none",
              }}
            >
              Ногоон хөгжлийн сэргэлт
            </Tab>
            <Tab
              _focus={{
                outline: "none",
              }}
            >
              Төрийн бүтээлт
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
          </TabPanels>
        </Tabs>
      </VStack>
    </Box>
  );
};
