import { Box, Grid2, Typography } from "@mui/material";
import React from "react";

const ImageSection = () => {
  return (
    <Box
      sx={{ pt: 4, pb: 4, display: "flex", justifyContent: "space-between" }}
    >
      <Grid2 container spacing={4}>
        <Grid2
          size={{ xs: 12, md: 4, lg: 4 }}
          sx={{
            height: "266px",
            bgcolor: "#ebffb16e",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            p: 4,
            "&:hover": {
              boxShadow:
                "rgba(11, 155, 143, 0.4) -5px 5px, rgba(11, 155, 143, 0.3) -10px 10px, rgba(11, 155, 143, 0.2) -15px 15px, rgba(11, 155, 143, 0.1) -20px 20px, rgba(11, 155, 143, 0.05) -25px 25px",
              transition: "box-shadow 0.3s ease-in-out",
            },
          }}
        >
          <Box sx={{ width: "100%", border: "5px solid #0b9b8f" }}>
            <Box
              component={"img"}
              src="https://www.drvivekgoelnephro.com/img/p1.jpeg"
              sx={{ width: "100%" }}
            />
          </Box>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 4, lg: 4 }}
          sx={{
            bgcolor: "#ebffb16e",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            p: 4,
            "&:hover": {
              boxShadow:
                "rgba(11, 155, 143, 0.4) -5px 5px, rgba(11, 155, 143, 0.3) -10px 10px, rgba(11, 155, 143, 0.2) -15px 15px, rgba(11, 155, 143, 0.1) -20px 20px, rgba(11, 155, 143, 0.05) -25px 25px",
              transition: "box-shadow 0.3s ease-in-out",
            },
          }}
        >
          <Box sx={{ width: "100%", border: "5px solid #0b9b8f" }}>
            <Box
              component={"img"}
              src="https://www.drvivekgoelnephro.com/img/p2.jpeg"
              sx={{ width: "100%" }}
            />
          </Box>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 4, lg: 4 }}
          sx={{
            height: "243px",
            bgcolor: "#ebffb16e",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            p: 4,
            "&:hover": {
              boxShadow:
                "rgba(11, 155, 143, 0.4) -5px 5px, rgba(11, 155, 143, 0.3) -10px 10px, rgba(11, 155, 143, 0.2) -15px 15px, rgba(11, 155, 143, 0.1) -20px 20px, rgba(11, 155, 143, 0.05) -25px 25px",
              transition: "box-shadow 0.3s ease-in-out",
            },
          }}
        >
          <Box sx={{ width: "100%", border: "5px solid #0b9b8f" }}>
            <Box
              component={"img"}
              src="https://www.drvivekgoelnephro.com/img/p3.jpeg"
              sx={{ width: "100%" }}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ImageSection;
