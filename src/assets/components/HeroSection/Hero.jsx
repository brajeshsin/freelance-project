// import { Box, Container, Grid2, TextField, Typography } from "@mui/material";
// import React from "react";

// const Hero = () => {
//   return (
//     <Container sx={{ pt: 2, pb: 2 }}>
//       <Grid2 container spacing={2}>
//         <Grid2
//           size={{ xs: 12, md: 4 }}
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             bgcolor: "#ccece9",
//             padding: 3,
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               flexDirection: "column",
//               gap: 3,
//             }}
//           >
//             <Typography sx={{ textTransform: "uppercase", color: "#0b9b8f" }}>
//               Request for your
//             </Typography>
//             <Typography variant="h4" sx={{ fontWeight: 200, pb: 2 }}>
//               Consultation
//             </Typography>
//             <TextField
//               placeholder="Name"
//               sx={{
//                 backgroundColor: "white",
//                 "& .MuiOutlinedInput-root": {
//                   height: 40,
//                   borderRadius: "12px",
//                 },
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//                 "&:hover .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//                 "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//               }}
//             />
//             <TextField
//               placeholder="Mobile"
//               sx={{
//                 backgroundColor: "white",
//                 "& .MuiOutlinedInput-root": {
//                   height: 40,
//                   borderRadius: "12px",
//                 },
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//                 "&:hover .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//                 "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//               }}
//             />
//             <TextField
//               placeholder="Email"
//               sx={{
//                 backgroundColor: "white",
//                 "& .MuiOutlinedInput-root": {
//                   height: 40,
//                   borderRadius: "50px",
//                 },
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//                 "&:hover .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//                 "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//               }}
//             />
//             <TextField
//               placeholder="Date"
//               sx={{
//                 backgroundColor: "white",
//                 "& .MuiOutlinedInput-root": {
//                   height: 40,
//                   borderRadius: "12px",
//                 },
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//                 "&:hover .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//                 "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//               }}
//             />
//           </Box>
//         </Grid2>
//         <Grid2 size={{ xs: 12, md: 4 }} xs={12}>
//           <Typography sx={{ color: "orange" }}> Work on progress..</Typography>
//         </Grid2>
//         <Grid2 size={{ xs: 12, md: 4 }} xs={12}>
//           <Typography sx={{ color: "orange" }}> Work on progress..</Typography>
//         </Grid2>
//       </Grid2>
//     </Container>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Button,
  Link,
  CircularProgress,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NewButton from "./NewButton";

const Hero = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #ffc0d424 0%, #b5e7e3ad 100%)",
        pb: 10,
      }}
    >
      <Container sx={{ pt: 2 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#ccece9",
              padding: 3,
              pb: 10,
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography sx={{ textTransform: "uppercase", color: "#0b9b8f" }}>
                Request for your
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 300, pb: 2 }}>
                Consultation
              </Typography>

              <TextField
                required
                placeholder="Name"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",

                  "& .MuiOutlinedInput-root": {
                    height: 40,
                    borderRadius: "12px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />

              <TextField
                required
                placeholder="Mobile"
                fullWidth
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    height: 40,
                    borderRadius: "12px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />

              <TextField
                required
                placeholder="Email"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",

                  "& .MuiOutlinedInput-root": {
                    height: 40,
                    borderRadius: "12px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />

              <TextField
                required
                placeholder="Date"
                type="date"
                fullWidth
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment position="end">
                //       <IconButton>
                //         <CalendarTodayIcon />
                //       </IconButton>
                //     </InputAdornment>
                //   ),
                // }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",

                  "& .MuiOutlinedInput-root": {
                    height: 40,
                    borderRadius: "12px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />
              {/* <Button
                variant="contained"
                sx={{
                  mt: "10px",
                  bgcolor: "#0b9b8f",
                  height: "50px",
                  borderRadius: "15px",
                }}
              >
                Book Appointment
              </Button> */}
              <NewButton />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "#0b9b8f" }}> ABOUT...</Typography>
            <Typography
              sx={{
                color: "#000",
                fontSize: "35px",
                mt: "8px",
                fontWeight: "1000 !important",
              }}
            >
              Dr. ANKIT SINGH
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "15px",
                lineHeight: "30px",
              }}
            >
              Dr. Ankit Singh is a distinguished Nephrologist, transplant
              physician, and educator, currently serving patients in India. He
              is committed to providing compassionate, personalized care to his
              patients, utilizing the latest advancements in nephrology to
              ensure the best possible outcomes. As a member of prestigious
              medical societies such as ISN (International Society of
              Nephrology), ISOT (Indian Society of Organ Transplantation), ISHD
              ( International Society Hemodialysis), and IACM (Indian Academy of
              Clinical Medicine), Dr. Goel is dedicated to delivering
              comprehensive and effective care....
            </Typography>
            <Link
              href="#"
              underline="none"
              sx={{
                color: "#0b9b8f",
                fontWeight: "900 !important",
                cursor: "pointer",
              }}
            >
              Read more...
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            // sx={{
            //   overflow: "hidden",
            //   display: "flex",
            //   justifyContent: "flex-end",
            // }}
          >
            {/* <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress sx={{ color: "orange" }} />
            </Box> */}
            <Box
              sx={{
                height: "400px",
                width: "100%",
                bgcolor: "gray",
                border: "10px solid #0b9b8f",
                transition: "border 0.6s ease-in-out",
                "&:hover": {
                  border: "10px solid #ccecea",
                },
                overflow: "hidden", // Ensures no overflow issues
              }}
            >
              <Box
                component="img"
                src="https://www.drvivekgoelnephro.com/img/team/team-1.png"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{ mt: 2, fontSize: "35px", fontWeight: "800 !important" }}
              >
                Dr. ANKIT SINGH
              </Typography>
              <Typography sx={{ color: "#0b9b8f" }}>
                Consultant Nephrologist & Kidney Transplant Physician
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
