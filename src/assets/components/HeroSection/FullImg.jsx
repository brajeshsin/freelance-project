import { Box } from "@mui/material";
import React from "react";

const FullImg = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        component={"img"}
        src="https://www.drvivekgoelnephro.com/img/ban2.jpg"
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

export default FullImg;
