import React from "react";
import styled from "styled-components";

const Testimonials = () => {
  return (
    <StyledWrapper>
      <div
        className="slider"
        style={{
          "--width": "200px",
          "--height": "200px",
          "--quantity": "9",
        }}
      >
        <div className="list">
          {cards.map((card, index) => (
            <div
              className="item"
              key={index}
              style={{
                "--position": index + 1,
              }}
            >
              <div className="card" style={{ background: card.bg }}>
                <p>{card.text1}</p>
                <p>{card.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const cards = [
  {
    bg: "linear-gradient(to right, #ff7e5f, #feb47b)",
    text1: "HELLO THERE",
    text2: "Am Ashwin.A",
  },
  {
    bg: "linear-gradient(to right, #6a11cb, #2575fc)",
    text1: "Do follow on Insta",
    text2: "ashwin_ambar_",
  },
  {
    bg: "linear-gradient(to right, #00c6ff, #0072ff)",
    text1: "Replace cards with images",
    text2: "for an image slider",
  },
  {
    bg: "linear-gradient(to right, #ff512f, #dd2476)",
    text1: "HTML CSS only",
    text2: "Hover to stop the slides",
  },
  {
    bg: "linear-gradient(to right, #ffb6c1, #ff69b4)",
    text1: "Card 5",
    text2: "Content for card 5",
  },
  {
    bg: "linear-gradient(to right, #ff9a8b, #ffc3a0)",
    text1: "Card 6",
    text2: "Content for card 6",
  },
  {
    bg: "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    text1: "Card 7",
    text2: "Modify it and use",
  },
  {
    bg: "linear-gradient(to right, #fbc2eb, #a18cd1)",
    text1: "Card 8",
    text2: "Content for card 8",
  },
  {
    bg: "linear-gradient(to right, #84fab0, #8fd3f4)",
    text1: "Card 9",
    text2: "Content for card 9",
  },
];

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: white;
    text-align: center;
  }

  .card p {
    font-size: 14px;
    color: white;
  }

  .slider {
    width: 100%;
    height: var(--height);
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
  }

  .slider .list {
    display: flex;
    width: calc(var(--width) * var(--quantity));
    animation: autoRun 10s linear infinite;
  }

  .slider .item {
    width: var(--width);
    height: var(--height);
    flex: 0 0 auto;
  }

  @keyframes autoRun {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(var(--width) * -1 * var(--quantity)));
    }
  }

  .slider:hover .list {
    animation-play-state: paused;
  }
`;

export default Testimonials;
