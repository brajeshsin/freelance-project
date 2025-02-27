// import { Box, Container, Grid, Typography } from "@mui/material";
// import React, { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";

// const NavBar = () => {
//   const [activeLink, setActiveLink] = useState("Home"); // Default active link

//   const menuItems = [
//     "Home",
//     "About Me",
//     "Treatments Offered",
//     "Specialities",
//     "Gallery",
//     "F.A.Q",
//     "Contact Me",
//   ];

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "120px",
//         bgcolor: "#fff",
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <Container>
//         <Grid container spacing={2} alignItems="center">
//           {/* Left Section */}
//           <Grid item xs={3}>
//             <Typography
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "10px",
//                 color: "#fff",
//               }}
//             >
//               <Box
//                 component={"img"}
//                 src="https://www.drvivekgoelnephro.com/img/logo3.png"
//                 alt="img"
//               />
//             </Typography>
//           </Grid>
//           {/* Right Section */}
//           <Grid
//             item
//             xs={9}
//             sx={{
//               display: { xs: "none", md: "inline-flex", lg: "inline-flex" },
//               justifyContent: "flex-end",
//               gap: "30px",
//             }}
//           >
//             {menuItems.map((item) => (
//               <Typography
//                 key={item}
//                 onClick={() => setActiveLink(item)}
//                 sx={{
//                   fontSize: "20px",
//                   fontWeight: 500,
//                   color: "#0b9b8f",
//                   cursor: "pointer",
//                   position: "relative",
//                   //   padding: "5px 5px", // Adds space around each link
//                   "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     left: 0,
//                     bottom: "-5px", // Position underline below text
//                     width: activeLink === item ? "100%" : "0",
//                     height: "2px",
//                     bgcolor: "#0b9b8f", // Underline color
//                     transition: "width 0.3s ease-in-out",
//                   },
//                 }}
//               >
//                 {item}
//               </Typography>
//             ))}
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default NavBar;

import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LeftNav from "./LeftNav";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home"); // Default active link

  const menuItems = [
    "Home",
    "About Me",
    "Treatments Offered",
    "Specialities",
    "Gallery",
    "F.A.Q",
    "Contact Me",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "120px",
        bgcolor: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container spacing={2} alignItems="center">
          {/* Left Section */}
          <Grid item xs={3}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#fff",
              }}
            >
              <Box
                component={"img"}
                src="https://www.drvivekgoelnephro.com/img/logo3.png"
                alt="img"
              />
            </Typography>
          </Grid>

          {/* Right Section (Menu Items for md & lg screens) */}
          <Grid
            item
            xs={9}
            sx={{
              display: { xs: "none", md: "inline-flex", lg: "inline-flex" },
              justifyContent: "flex-end",
              gap: "30px",
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item}
                onClick={() => setActiveLink(item)}
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  color: "#0b9b8f",
                  cursor: "pointer",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: "-5px",
                    width: activeLink === item ? "100%" : "0",
                    height: "2px",
                    bgcolor: "#0b9b8f",
                    transition: "width 0.3s ease-in-out",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Menu Icon (Only visible on xs screens) */}
          <Grid
            item
            xs={9}
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton>
              <LeftNav />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NavBar;
