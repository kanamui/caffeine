import React from "react";
import { Center, Heading } from "native-base";
import Navigation from "../components/navigation/Navigation";

const About = (props: any) => {
  return (
    <>
      <Navigation {...props} />
      <Center flex="1">
        <Heading>Settings</Heading>
      </Center>
    </>
  );
};

export default About;
