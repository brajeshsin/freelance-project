// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";

// // import required modules
// import { Pagination } from "swiper/modules";
// import { Box, Button, Typography } from "@mui/material";

// export default function Slider() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           "@0.00": {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           "@0.75": {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <Box sx={{ height: "200px", width: "1000px" }}>
//             <Typography>Hello</Typography>
//           </Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <Box sx={{ height: "200px", width: "1000px" }}>
//             <Typography>Hello</Typography>
//           </Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <Box sx={{ height: "200px", width: "1000px" }}>
//             <Typography>Hello</Typography>
//           </Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <Box sx={{ height: "200px", width: "1000px" }}>
//             <Typography>Hello</Typography>
//           </Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <Box sx={{ height: "200px", width: "1000px" }}>
//             <Typography>Hello</Typography>
//           </Box>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Slider() {
  const swiperRef = useRef(null);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1000px",
        margin: "auto",
        pb: 4,
      }}
    >
      {/* Swiper Container */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: "200px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "pink",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19419.69776455471!2d88.5267968913061!3d22.467706540908885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02776c579f04ef%3A0xc4a68e7c9403d067!2sApollo%20Clinic%20Beliaghata!5e0!3m2!1sen!2sin!4v1741078117853!5m2!1sen!2sin"
                width="500"
                height="450"
              ></iframe>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Appolo Clinic</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
        <IconButton
          variant="contained"
          sx={{ color: "#0b9b8f" }}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowCircleLeftIcon sx={{ fontSize: "40px" }} />
        </IconButton>
        <IconButton
          variant="contained"
          sx={{ color: "#0b9b8f" }}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowCircleRightIcon sx={{ fontSize: "40px" }} />
        </IconButton>
      </Stack>
    </Box>
  );
}
