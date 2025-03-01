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
      image: "https://www.yuktimetallics.com/img/slider/slider1.jpg",
    },
    {
      title: "High Quality Engineering Components",
      subtitle:
        " The company has a wide range of machines and capability to make many more with the vast range of infrastructure and dedicated suppliers.",
      image: "https://www.yuktimetallics.com/img/slider/slider2.jpg",
    },
    {
      title: "Designer Laser Cut Application",
      subtitle: "Expert designs using the latest laser cutting technology",
      image: "https://www.yuktimetallics.com/img/slider/slider3.jpg",
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
