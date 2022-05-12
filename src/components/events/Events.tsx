import React, { useState } from 'react';
import { Box, Grid } from "@mui/material";
import { events } from "../data/data";
import Event from "./Event";
import Form from "../form/Form";
import PrintQrCode from "../qrCode/printQrCode";

const Events: React.FC = () => {
    const [open, setOpen] = useState(false);
  const [openQr, setOpenQr] = useState(false);
    const [contentTitle, setContentTitle] = useState<string>("");
    const [userDetails, setUserDetails] = useState<string>("");


  return (
    <Box sx={{ flexGrow: 1, margin:{ xs: "20px 0", md: "35px 0" }}}>
      <Grid
        container
        spacing={{ xs: 3 }}
        columns={{ sm: 4, md: 12 }}
      >
        {events && Object.keys(events).length > 0 ? (
          events.slice(0, 9).map((event) => (
            <Grid item xs={2} sm={2} md={4} key={event.id} sx={{ xs: { marginTop: "200px" } }}>
              <Event setContentTitle={setContentTitle} setOpen={setOpen} key={event.id} {...event} />
            </Grid>
          ))
          ) : (
              <div>No event available</div>
              )}
              <Form open={open} contentTitle={contentTitle} setOpen={setOpen} setOpenQr={setOpenQr} setUserDetails={setUserDetails} />
              <PrintQrCode name={userDetails} title={contentTitle} open={openQr} setOpen={setOpenQr} />
      </Grid>
    </Box>
  );
};

export default Events;
