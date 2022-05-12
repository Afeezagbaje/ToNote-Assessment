import React from "react";
import { Container } from "@mui/material";
import EventTopBar from "./EventTopBar";
import Events from "./Events";
// import EventSearch from '../eventSearch/EventSearch';

const EventSection: React.FC = () => {

  return (
    <Container maxWidth="lg">
      {/* <EventSearch /> */}
      <EventTopBar />
      <Events />
    </Container>
  );
};

export default EventSection;
