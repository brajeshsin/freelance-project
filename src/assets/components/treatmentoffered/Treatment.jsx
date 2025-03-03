import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Treatment = () => {
  return (
    <Container sx={{ pt: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: "400 !important" }}>
          TREATMENTS OFFERED
        </Typography>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "900 !important",
            color: "#0b9b8f",
          }}
        >
          Dr. ANKIT SINGH
        </Typography>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default Treatment;
