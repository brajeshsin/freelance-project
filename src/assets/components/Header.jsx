// import { Box, Container, Grid, Grid2, Typography } from "@mui/material";
// import React from "react";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import EmailIcon from "@mui/icons-material/Email";

// const Header = () => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "10%",
//         bgcolor: "#0b9b8f",
//         p: 1,
//       }}
//     >
//       <Container>
//         <Grid2 container spacing={2}>
//           <Grid2 size={9}>
//             <Typography
//               sx={{
//                 display: "flex",
//                 gap: "15px",
//                 color: "#fff",
//                 alignItems: "center",
//               }}
//             >
//               <span>
//                 <EmailIcon />
//               </span>
//               <span>
//                 <Typography>drarun@yopmail.com</Typography>
//               </span>
//             </Typography>
//           </Grid2>
//           <Grid2
//             xs={3}
//             sx={{
//               display: "flex",
//               justifyContent: "flex-end",
//               flexDirection: "row",
//             }}
//           >
//             <Typography
//               sx={{
//                 display: "flex",
//                 gap: "15px",
//                 color: "#fff",
//               }}
//             >
//               <span style={{ cursor: "pointer" }}>
//                 <FacebookIcon />
//               </span>
//               <span style={{ cursor: "pointer" }}>
//                 <YouTubeIcon />
//               </span>
//               <span style={{ cursor: "pointer" }}>
//                 <InstagramIcon />
//               </span>
//               <span style={{ cursor: "pointer" }}>
//                 <WhatsAppIcon />
//               </span>
//             </Typography>
//           </Grid2>
//         </Grid2>
//       </Container>
//     </Box>
//   );
// };

// export default Header;

import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "40px",
        bgcolor: "#0b9b8f",
        display: { xs: "none", md: "inline-flex", lg: "inline-flex" },
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container spacing={2} alignItems="center">
          {" "}
          {/* Center grid items */}
          {/* Left Section */}
          <Grid item xs={9}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#fff",
              }}
            >
              <EmailIcon />
              <Typography>drarun23@yopmail.com</Typography>
            </Typography>
          </Grid>
          {/* Right Section */}
          <Grid
            item
            xs={3}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                color: "#fff",
              }}
            >
              <FacebookIcon sx={{ cursor: "pointer" }} />
              <YouTubeIcon sx={{ cursor: "pointer" }} />
              <InstagramIcon sx={{ cursor: "pointer" }} />
              <WhatsAppIcon sx={{ cursor: "pointer" }} />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
