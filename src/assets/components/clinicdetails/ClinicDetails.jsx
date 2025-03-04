import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Slider from "./Slider";

const ClinicDetails = () => {
  return (
    <Container>
      <Box
        sx={{
          pt: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ textTransform: "uppercase", color: "#0b9b8f" }}>
          Dr. ANKIT SINGH
        </Typography>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: "36px",
            fontWeight: "800 !important",
          }}
        >
          My clinic details
        </Typography>
      </Box>
      <Slider />
    </Container>
  );
};

export default ClinicDetails;
