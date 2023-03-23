import React from "react";
import { Box, Image, Text, VStack } from "native-base";
import Navigation from "../components/navigation/Navigation";
import Layout from "../layouts/Layout";

const About = (props: any) => {
  return (
    <>
      <Navigation {...props} />
      <Layout>
        <VStack space="4" pt="4">
          <Box h="200px">
            <Image
              size="full"
              source={require("../../assets/caffeine.png")}
              alt="coffee"
            />
          </Box>
          <Text>
            Commodo ut amet Lorem voluptate ea voluptate adipisicing pariatur
            nostrud ullamco exercitation proident. Nulla aliqua tempor labore
            consectetur labore ut cupidatat consequat nostrud. Enim sint
            exercitation Lorem eu do non. Veniam laborum aute occaecat occaecat
            deserunt elit ipsum reprehenderit consequat adipisicing amet magna.
            Veniam sit exercitation irure dolore nisi laboris consequat non
            voluptate dolore nisi. Sunt exercitation laborum elit exercitation
            dolor non dolor veniam velit consectetur aute anim id. Anim et
            laboris esse est cillum adipisicing.
          </Text>
        </VStack>
      </Layout>
    </>
  );
};

export default About;
