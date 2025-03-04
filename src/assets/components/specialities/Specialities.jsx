import * as React from "react";
import { Box, Card, CardMedia, Typography, Grid } from "@mui/material";

const cardData = Array.from({ length: 12 }).map((_, index) => ({
  id: index,
  image: "https://www.drvivekgoelnephro.com/img/ic1.png",
  title: "Renal Diet Counselling",
  description:
    "A renal diet is one that is low in sodium, phosphorous, and protein. It emphasizes consuming high-quality protein and usually limiting fluids. Some patients may also need to limit potassium and calcium.",
}));

export default function Specialities() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Grid container spacing={3} justifyContent="center">
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Box
              sx={{
                perspective: 1000,
                "&:hover .flip-card": { transform: "rotateY(180deg)" },
              }}
            >
              <Box
                className="flip-card"
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 400,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s",
                }}
              >
                {/* Front Side */}
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    backfaceVisibility: "hidden",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    pb: 4,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: 250,
                      objectFit: "contain",
                    }}
                    image={card.image}
                    title={card.title}
                  />
                  <Typography sx={{ textTransform: "uppercase", mt: 2 }}>
                    {card.title}
                  </Typography>
                </Card>

                {/* Back Side */}
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    borderRadius: "10px",
                    backgroundColor: "#0b9b8f",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 2,
                  }}
                >
                  <Typography variant="body2" textAlign="center" color="white">
                    {card.description}
                  </Typography>
                </Card>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
