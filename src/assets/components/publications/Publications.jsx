import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import ImageSection from "./ImageSection";

const Publications = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "#dcdcdc", pt: 4 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" }, // Corrected
          }}
        >
          <Box>
            <Typography sx={{ color: "#0b9b8f", fontSize: "20px" }}>
              Dr. ANKIT SINGH
            </Typography>
            <Typography sx={{ fontSize: "36px", fontWeight: "800 !important" }}>
              Publication
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                padding: "10px 20px",
                bgcolor: "transparent",
                border: "2px solid #0b9b8f",
                color: "#0b9b8f",
                fontSize: "15px",
              }}
            >
              VIEW MORE NEWS
            </Button>
          </Box>
        </Box>
        <ImageSection />
      </Container>
    </Box>
  );
};

export default Publications;
