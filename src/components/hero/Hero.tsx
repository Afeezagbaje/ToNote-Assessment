import React from "react";
import { Box } from "@mui/material";
import Navbar from "../navbar/Navbar";
import HeroContent from "../heroContent/HeroContent";

const Hero = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://res.cloudinary.com/afeezagbaje/image/upload/v1652160057/samples/ToNote/noiseporn-JNuKyKXLh8U-unsplash_wiaipg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          width: "100vw",
          height: { xs: "90vh", lg: "70vh" },
          padding: 0,
          margin: 0,
        }}
      >
        <Navbar />
        <HeroContent />
      </Box>
    </React.Fragment>
  );
};

export default Hero;
