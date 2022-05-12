import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const HeroContent = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "60%",
            marginRight: "30px",
            marginTop: "2rem",
          }}
        >
          <Box>
            <img
              src="https://res.cloudinary.com/afeezagbaje/image/upload/v1652315842/samples/ToNote/imageedit_1_6062257444_lupc8c.png"
              alt="hero_image"
              width="100%"
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "80%", md: "40%" },
            marginTop: { xs: "6rem", sm: "9rem" },
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{ color: "white" }}
          >
            SBS MTV The Kpop Show Ticket Package
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ color: "white" }}
          >
            Look no further! Our SBS The Show tickets are the simplest way for
            you to experience a live Kpop recording.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start", marginTop: "2rem", width: "100%" }}>
            <Box sx={{ marginRight: "35px" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3D37F1",
                  height: "100%",
                  width: "100%",
                  padding: { xs: "10px 10px" , md: "20px 30px"},
                  borderRadius: "10px",
                  
                }}
              >
                Get Ticket
              </Button>
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{
                  height: "100%",
                  width: "100%",
                  padding: { xs: "10px 10px" , md: "20px 30px"},
                  borderRadius: "10px",
                  borderColor: "white",
                  color: "white",
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroContent;
