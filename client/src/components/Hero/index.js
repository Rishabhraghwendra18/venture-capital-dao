import React from "react";
import Image from "next/image";
import { Typography, Box, Button, Paper } from "@mui/material";
import "./index.css";

const features =[
    {
        title:'$355M',
        color:'#1FA5FF',
        description:'Total Funding Raised'
    },
    {
        title:'$725M',
        color:'#22DFAB',
        description:'Total Staked'
    },
    {
        title:'461',
        color:'#AC8AF8',
        description:'Startups Funded'
    },
]
function HeroSection() {
  return (
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Box
        sx={{
          padding: "1.8rem 0rem",
          display: "flex",
          gap: "10rem",
          justifyContent: "center",
          alignItems:'center',
          flex:0.6
        }}
      >
        <Box
          sx={{
            //   width: "34rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.62rem",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              width: "26rem",
              lineHeight: "4.3rem",
              color: "#2B2D42",
            }}
          >
            Venture Capital Re-Created for the Masses
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "1rem", color: "#2B2D42" }}
          >
            DAO Maker creates growth technologies and funding frameworks for
            startups, while simultaneously reducing risks for investors.
          </Typography>

          <Box sx={{ display: "flex", gap: "1rem", width: "100%" }}>
            <Button variant="contained" sx={{ flex: 1 }}>
              Vote
            </Button>
            <Button variant="contained" sx={{ flex: 1 }}>
              Stake
            </Button>
          </Box>
        </Box>

        <Box>
          <Image
            src={"/hero-section.png"}
            width={0}
            height={0}
            sizes="100vw"
            className="hero_logo"
          />
        </Box>
      </Box>
      <Box sx={{padding:'3rem 0rem',display: "flex",flexDirection:'row',justifyContent:'center',gap:'1.75rem'}}>
        {features.map((feature,index)=>(
        <Paper sx={{flex:1,borderRadius:'1.5rem', minHeight:'10rem',display:'flex',flexDirection:'column',gap:'1.25rem',padding:'0.625rem 1.25rem'}}>
            <Typography variant="h2" sx={{fontWeight:900,textAlign:'center',color:feature.color}}>{feature.title}</Typography>
            <Typography variant="h4" sx={{fontWeight:600,textAlign:'center',color:'#2B2D42'}}>{feature.description}</Typography>
        </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default HeroSection;
