import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Specialities from "./Specialities";

const BoxBg = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // height: "300px", // Set height to make the background visible
        backgroundImage: `url("https://www.drvivekgoelnephro.com/img/service_background_v2.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        pb: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          p: 8,
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "15px",
            fontWeight: "500 !important",
            letterSpacing: "2px",
          }}
        >
          DR. ankit singh
        </Typography>
      </Box>
      <Container>
        {/* <Box>
          <Box
            sx={{
              width: "20%",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              bgcolor: "#0b9b7f6b",
            }}
          >
            <Typography
              sx={{ color: "yellow", fontSize: "36px", fontWeight: 700 }}
            >
              Specialities
            </Typography>
          </Box>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "80%", md: "20%" },
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              bgcolor: "#0b9b7f6b",
            }}
          >
            <Typography
              sx={{ color: "yellow", fontSize: "36px", fontWeight: 700 }}
            >
              Specialities
            </Typography>
          </Box>
        </Box>

        <Specialities />
      </Container>
    </Box>
  );
};

export default BoxBg;
