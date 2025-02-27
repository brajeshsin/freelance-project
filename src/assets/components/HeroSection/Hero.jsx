import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Container sx={{ pt: 2, pb: 2 }}>
      <Grid2 container spacing={2}>
        <Grid2
          size={{ xs: 12, md: 4 }}
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
        <Grid2 size={{ xs: 12, md: 4 }} xs={12}>
          <Typography sx={{ color: "orange" }}> Work on progress..</Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} xs={12}>
          <Typography sx={{ color: "orange" }}> Work on progress..</Typography>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Hero;
