import {
  Box,
  CircularProgress,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
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
      {/* <Box sx={{ p: 4 }}>
        <Grid2
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid2
            size={3}
            sx={{
              p: 1,
            }}
          >
            <Box
              component={"img"}
              src="https://www.drvivekgoelnephro.com/img/logo3.png"
              sx={{ width: "70%" }}
            />
            <Typography sx={{ fontSize: "25px", fontWeight: "600 !important" }}>
              Hypertension
            </Typography>
            <Typography>
              Hypertension (high blood pressure) is when the pressure in your
              blood vessels is too high (140/90 mmHg or higher)....
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "600 !important",
                color: "#0b9b8f",
              }}
            >
              Read more...
            </Typography>
          </Grid2>
          <Grid2
            size={3}
            sx={{
              p: 1,
            }}
          >
            <Box
              component={"img"}
              src="https://www.drvivekgoelnephro.com/img/logo3.png"
              sx={{ width: "70%" }}
            />
            <Typography sx={{ fontSize: "25px", fontWeight: "600 !important" }}>
              Hypertension
            </Typography>
            <Typography>
              Hypertension (high blood pressure) is when the pressure in your
              blood vessels is too high (140/90 mmHg or higher)....
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "600 !important",
                color: "#0b9b8f",
              }}
            >
              Read more...
            </Typography>
          </Grid2>
          <Grid2
            size={3}
            sx={{
              p: 1,
            }}
          >
            <Box
              component={"img"}
              src="https://www.drvivekgoelnephro.com/img/logo3.png"
              sx={{ width: "70%" }}
            />
            <Typography sx={{ fontSize: "25px", fontWeight: "600 !important" }}>
              Hypertension
            </Typography>
            <Typography>
              Hypertension (high blood pressure) is when the pressure in your
              blood vessels is too high (140/90 mmHg or higher)....
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "600 !important",
                color: "#0b9b8f",
              }}
            >
              Read more...
            </Typography>
          </Grid2>
          <Grid2
            size={3}
            sx={{
              p: 1,
            }}
          >
            <Box
              component={"img"}
              src="https://www.drvivekgoelnephro.com/img/logo3.png"
              sx={{ width: "70%" }}
            />
            <Typography sx={{ fontSize: "25px", fontWeight: "600 !important" }}>
              Hypertension
            </Typography>
            <Typography>
              Hypertension (high blood pressure) is when the pressure in your
              blood vessels is too high (140/90 mmHg or higher)....
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "600 !important",
                color: "#0b9b8f",
              }}
            >
              Read more...
            </Typography>
          </Grid2>
          <Grid2
            size={3}
            sx={{
              p: 1,
            }}
          >
            <Box
              component={"img"}
              src="https://www.drvivekgoelnephro.com/img/logo3.png"
              sx={{ width: "70%" }}
            />
            <Typography sx={{ fontSize: "25px", fontWeight: "600 !important" }}>
              Hypertension
            </Typography>
            <Typography>
              Hypertension (high blood pressure) is when the pressure in your
              blood vessels is too high (140/90 mmHg or higher)....
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "600 !important",
                color: "#0b9b8f",
              }}
            >
              Read more...
            </Typography>
          </Grid2>
          <Grid2
            size={3}
            sx={{
              p: 1,
            }}
          >
            <Box
              component={"img"}
              src="https://www.drvivekgoelnephro.com/img/logo3.png"
              sx={{ width: "70%" }}
            />
            <Typography sx={{ fontSize: "25px", fontWeight: "600 !important" }}>
              Hypertension
            </Typography>
            <Typography>
              Hypertension (high blood pressure) is when the pressure in your
              blood vessels is too high (140/90 mmHg or higher)....
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "600 !important",
                color: "#0b9b8f",
              }}
            >
              Read more...
            </Typography>
          </Grid2>
          <Grid2
            size={3}
            sx={{
              p: 1,
            }}
          >
            <Box
              component={"img"}
              src="https://www.drvivekgoelnephro.com/img/logo3.png"
              sx={{ width: "70%" }}
            />
            <Typography sx={{ fontSize: "25px", fontWeight: "600 !important" }}>
              Hypertension
            </Typography>
            <Typography>
              Hypertension (high blood pressure) is when the pressure in your
              blood vessels is too high (140/90 mmHg or higher)....
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "600 !important",
                color: "#0b9b8f",
              }}
            >
              Read more...
            </Typography>
          </Grid2>
          <Grid2
            size={3}
            sx={{
              p: 1,
            }}
          >
            <Box
              component={"img"}
              src="https://www.drvivekgoelnephro.com/img/logo3.png"
              sx={{ width: "70%" }}
            />
            <Typography sx={{ fontSize: "25px", fontWeight: "600 !important" }}>
              Hypertension
            </Typography>
            <Typography>
              Hypertension (high blood pressure) is when the pressure in your
              blood vessels is too high (140/90 mmHg or higher)....
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "600 !important",
                color: "#0b9b8f",
              }}
            >
              Read more...
            </Typography>
          </Grid2>
        </Grid2>
      </Box> */}
      <Box sx={{ p: 4 }}>
        <Grid2
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {[...Array(8)].map((_, index) => (
            <Grid2 key={index} xs={12} size={{ xs: 12, md: 3, lg: 3 }}>
              <Box
                component="img"
                src="https://www.drvivekgoelnephro.com/img/logo3.png"
                sx={{ width: "60%" }}
              />
              <Typography
                sx={{ fontSize: "20px", fontWeight: "550 !important" }}
              >
                Hypertension
              </Typography>
              <Typography>
                Hypertension (high blood pressure) is when the pressure in your
                blood vessels is too high (140/90 mmHg or higher)....
              </Typography>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "600 !important",
                  color: "#0b9b8f",
                }}
              >
                Read more...
              </Typography>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
};

export default Treatment;
