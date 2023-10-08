"use client";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import OnGoingFundingRound from "@/components/UpcommingProject";
import "./page.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1FA5FF",
    },
  },
  typography: {
    fontFamily: "Inter",
    fontSize: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          borderRadius: "6.25rem",
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className={"main"}>
        <Navbar />
        <Box sx={{padding:'45px 100px'}}>
            <HeroSection/>
            <OnGoingFundingRound/>
        </Box>
      </main>
    </ThemeProvider>
  );
}
