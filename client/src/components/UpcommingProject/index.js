import React from "react";
import { Typography, Box, Button, Paper } from "@mui/material";
import ProjectsGrid from "../ProjectsGrid";

const projects = [
  {
    title: "Ethereum",
    image: "/ethereum-logo.png",
    description:
      "Ethereum serves as a decentralized platform for building and deploying smart contracts, enabling trust and transparency in a decentralized manner. Smart contracts are self-executing agreements with the terms of the contract directly written into code, automating complex processes without the need for intermediaries.",
  },
  {
    title: "Near",
    image: "/near-logo.png",
    description:
      "NEAR is a Layer 1 blockchain, meaning it is not dependent on other chains. It uses a unique scaling mechanism (Nightshade sharding) and makes it especially easy to onboard new users (e.g. through named accounts). It opens the door to mass adoption for Web3.",
  },
  {
    title: "ICHI",
    image:"/ichi-logo.jpeg",
    description: "ICHI is a non-custodial liquidity management protocol that enables the use of sophisticated algorithmic strategies on Uniswap V3. It allows token holders, institutions, and projects to earn on-chain yield and help establish deeper on-chain token liquidity. ICHI's main product is ICHI Vaults which accept single-token deposits and then deploy these tokens into Uniswap V3 concentrated liquidity pools.",
  },
  {
    title: "CIAN",
    image:"/cian-logo.jpg",
    description: "CIAN is an open automation platform for onchain applications that allows users to swiftly build, optimize and protect intricate strategies using unrivaled automation primitives",
  },
];
function OnGoingFundingRound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          lineHeight: "4.3rem",
          color: "#2B2D42",
          textAlign: "center",
        }}
      >
        Live Fundraising Round
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "2rem",
        }}
      >
        {projects.map((project, index) => (
          <ProjectsGrid
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </Box>
    </Box>
  );
}

export default OnGoingFundingRound;
