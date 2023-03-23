// Modules
import React, { useState } from "react";
// Components
import { Box, Center, Heading, VStack } from "native-base";
import NavigationLocator from "../components/navigation/NavigationLocator";
import Layout from "../layouts/Layout";
import CoffeeCard from "../components/CoffeeCard";
import caffeine from "../../mock/caffeine.json";

const Locator = (props: any) => {
  // Variables
  const data = JSON.parse(JSON.stringify(caffeine))?.farms || [];

  // States
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // Functions
  const handleSearchChange = (text: any) => {
    setSearch(text);
    const filtered = data.filter((el: any) =>
      el.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <NavigationLocator
        value={search}
        handleSearchChange={handleSearchChange}
        navigation={props.navigation}
      />
      {filteredData.length ? (
        <Layout navigation={props.navigation}>
          <VStack space="2">
            {filteredData.map((el: any, key: number) => {
              return (
                <Box key={key}>
                  <CoffeeCard data={{ ...el }} navigation={props.navigation} />
                </Box>
              );
            })}
          </VStack>
        </Layout>
      ) : (
        <Center flex="1" bg="white">
          <Heading color="gray.500">No results found</Heading>
        </Center>
      )}
    </>
  );
};

export default Locator;
