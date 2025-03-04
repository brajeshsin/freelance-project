import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import VideoSection from "./VideoSection";

const VideoTop = () => {
  return (
    <Container sx={{ pt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box>
          <Typography sx={{ color: "#0b9b8f", fontSize: "20px" }}>
            Dr. ANKIT SINGH
          </Typography>
          <Typography sx={{ fontSize: "36px", fontWeight: "800 !important" }}>
            Youtube Video
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
            VIEW MORE VIDEOS
          </Button>
        </Box>
      </Box>
      <VideoSection />
    </Container>
  );
};

export default VideoTop;
