// import * as React from "react";
// import { Box, Card, CardMedia, Typography, Grid } from "@mui/material";

// const cardData = Array.from({ length: 12 }).map((_, index) => ({
//   id: index,
//   image: "https://www.drvivekgoelnephro.com/img/ic1.png",
//   title: "Renal Diet Counselling",
//   description:
//     "A renal diet is one that is low in sodium, phosphorous, and protein. It emphasizes consuming high-quality protein and usually limiting fluids. Some patients may also need to limit potassium and calcium.",
// }));

// export default function Specialities() {
//   return (
//     <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
//       <Grid container spacing={3} justifyContent="center">
//         {cardData.map((card) => (
//           <Grid item xs={12} sm={6} md={4} key={card.id}>
//             <Box
//               sx={{
//                 perspective: 1000,
//                 "&:hover .flip-card": { transform: "rotateY(180deg)" },
//               }}
//             >
//               <Box
//                 className="flip-card"
//                 sx={{
//                   position: "relative",
//                   width: "100%",
//                   height: 400,
//                   transformStyle: "preserve-3d",
//                   transition: "transform 0.6s",
//                 }}
//               >
//                 {/* Front Side */}
//                 <Card
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     position: "absolute",
//                     backfaceVisibility: "hidden",
//                     borderRadius: "10px",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     pb: 4,
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     sx={{
//                       height: 250,
//                       objectFit: "contain",
//                     }}
//                     image={card.image}
//                     title={card.title}
//                   />
//                   <Typography sx={{ textTransform: "uppercase", mt: 2 }}>
//                     {card.title}
//                   </Typography>
//                 </Card>

//                 {/* Back Side */}
//                 <Card
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     position: "absolute",
//                     backfaceVisibility: "hidden",
//                     transform: "rotateY(180deg)",
//                     borderRadius: "10px",
//                     backgroundColor: "#0b9b8f",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     padding: 2,
//                   }}
//                 >
//                   <Typography variant="body2" textAlign="center" color="white">
//                     {card.description}
//                   </Typography>
//                 </Card>
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

import * as React from "react";
import { Box, Card, CardMedia, Typography, Grid } from "@mui/material";

const cardData = [
  {
    id: 0,
    image: "https://www.drvivekgoelnephro.com/img/ic1.png",
    title: "Renal Diet Counselling",
    description:
      "A renal diet focuses on low sodium, phosphorus, and protein intake while ensuring proper nutrition.",
  },
  {
    id: 1,
    image: "https://www.drvivekgoelnephro.com/img/ic2.png",
    title: "Kidney Function Tests",
    description:
      "Regular kidney function tests help monitor creatinine and GFR levels to assess kidney health.",
  },
  {
    id: 2,
    image: "https://www.drvivekgoelnephro.com/img/ic3.png",
    title: "Dialysis Support",
    description:
      "Comprehensive support and guidance for patients undergoing hemodialysis or peritoneal dialysis.",
  },
  {
    id: 3,
    image: "https://www.drvivekgoelnephro.com/img/ic4.png",
    title: "Hypertension Management",
    description:
      "Proper management of high blood pressure reduces the risk of kidney disease and complications.",
  },
  {
    id: 4,
    image: "https://www.drvivekgoelnephro.com/img/ic5.png",
    title: "Kidney Transplant Consultation",
    description:
      "Expert consultation for patients considering or preparing for a kidney transplant procedure.",
  },
  {
    id: 5,
    image: "https://www.drvivekgoelnephro.com/img/ic6.png",
    title: "Urinary Tract Infections",
    description:
      "Diagnosis and treatment of UTIs to prevent further complications affecting the kidneys.",
  },
  {
    id: 6,
    image: "https://www.drvivekgoelnephro.com/img/ic7.png",
    title: "Chronic Kidney Disease (CKD) Care",
    description:
      "Personalized care plans for managing different stages of chronic kidney disease.",
  },
  {
    id: 7,
    image: "https://www.drvivekgoelnephro.com/img/ic8.png",
    title: "Electrolyte Imbalance Management",
    description:
      "Monitoring and balancing electrolytes like potassium, calcium, and sodium for optimal health.",
  },
  {
    id: 8,
    image: "https://www.drvivekgoelnephro.com/img/ic9.png",
    title: "Nephrotic Syndrome Treatment",
    description:
      "Treatment and management of nephrotic syndrome to prevent kidney damage and complications.",
  },
  {
    id: 9,
    image: "https://www.drvivekgoelnephro.com/img/ic10.png",
    title: "Diabetes and Kidney Health",
    description:
      "Specialized care for diabetic patients to prevent kidney damage and diabetic nephropathy.",
  },
  {
    id: 10,
    image: "https://www.drvivekgoelnephro.com/img/ic11.png",
    title: "Kidney Stone Prevention",
    description:
      "Guidance on diet and hydration to prevent kidney stone formation and recurrence.",
  },
  {
    id: 11,
    image: "https://www.drvivekgoelnephro.com/img/ic12.png",
    title: "Pediatric Nephrology",
    description:
      "Specialized kidney care services for children with congenital or acquired kidney diseases.",
  },
];

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
