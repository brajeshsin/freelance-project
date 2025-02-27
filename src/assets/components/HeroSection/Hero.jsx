import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2
          size={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#ccece9",
          }}
        >
          <Box>
            <Typography sx={{ textTransform: "uppercase", color: "#0b9b8f" }}>
              Request for your
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 200 }}>
              Consultation
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={4}>Work on progress..</Grid2>
        <Grid2 size={4}>Work on progress</Grid2>
      </Grid2>
    </Container>
  );
};

export default Hero;
