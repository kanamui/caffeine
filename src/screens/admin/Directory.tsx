// Modules
import React, { useState } from "react";
// Components
import { Center, FlatList, Heading } from "native-base";
import NavigationAdmin from "../../components/navigation/NavigationAdmin";
import DirectoryCard from "../../components/DirectoryCard";
import caffeine from "../../../mock/caffeine.json";

const Directory = (props: any) => {
  // Variables
  const data = JSON.parse(JSON.stringify(caffeine))?.farms || [];

  // States
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // Functions
  const handleSearchChange = (text: string) => {
    setSearch(text);
    const filtered = data.filter((el: any) =>
      el.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <NavigationAdmin
        value={search}
        onChangeText={handleSearchChange}
        navigation={props.navigation}
      />
      {filteredData.length ? (
        <FlatList
          p={4}
          data={filteredData}
          renderItem={(item: any) => (
            <DirectoryCard
              data={{ ...item?.item }}
              navigation={props.navigation}
            />
          )}
        />
      ) : (
        <Center flex="1" bg="white">
          <Heading color="gray.500">No results found</Heading>
        </Center>
      )}
    </>
  );
};

export default Directory;
