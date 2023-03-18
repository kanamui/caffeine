// Modules
import React from "react";
// Components
import { Box, VStack } from "native-base";
import Layout from "../layouts/Layout";
import CoffeeCard from "../components/CoffeeCard";
import caffeine from "../../mock/caffeine.json";

const Locator = (props: any) => {
  const data = JSON.parse(JSON.stringify(caffeine))?.farms || [];
  return (
    <Layout navigation={props.navigation}>
      <VStack space="2">
        {data.map((el: any, key: number) => {
          return (
            <Box key={key}>
              <CoffeeCard data={{ ...el }} navigation={props.navigation} />
            </Box>
          );
        })}
      </VStack>
    </Layout>
  );
};

export default Locator;
