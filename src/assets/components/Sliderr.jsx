import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";

export default function Sliderr() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideData = [
    {
      title: "Innovative Technologies",
      subtitle:
        "We are fully committed to achieve and exceed our customer's expectations in all the fields be it quality, delivery",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mXo5KDbVQinRB6ZuyARjXI1tbpb3o6WM-w&s",
    },
    {
      title: "High Quality Engineering Components",
      subtitle:
        " The company has a wide range of machines and capability to make many more with the vast range of infrastructure and dedicated suppliers.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkDLCVD-85ItcYHpcm7U9mWqs_pG8XAT-ikw&s",
    },
    {
      title: "Designer Laser Cut Application",
      subtitle: "Expert designs using the latest laser cutting technology",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA3GIBZozRPg0VNTGaW00ae6eW0nrD9H2NEg&s",
    },
  ];

  return (
    <Box sx={{ height: 500 }}>
      <Swiper
        autoplay={{ delay: 3000 }}
        spaceBetween={0}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        style={{ height: "450px" }}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  textAlign: "center",
                  zIndex: 2,
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    width: "50%",
                    color: "white",
                    fontWeight: "normal",
                    fontSize: "1.2rem",
                    zIndex: 2,
                    textAlign: "center",
                  }}
                >
                  {slide.subtitle}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
