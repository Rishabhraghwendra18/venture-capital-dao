import { useState } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { alpha, styled } from "@mui/material/styles";
import "./index.css";

const options = ["FUNDRAISING", "STAKE", "SUPPORT","HUB"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: `#fff !important`,
  color: "#000 !important",
}));
function Navbar() {
  const [selectedOption, setSelectedOption] = useState(-1);

  return (
    <CustomAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            src={"/logo.png"}
            width={0}
            height={0}
            sizes="100vw"
            className="logo_image"
            onClick={()=>setSelectedOption(-1)}
          />
          <Box sx={{ flexGrow: 1, display: "flex" }}>

            <Box sx={{ flex: 0.4,display:'flex',alignItems:'center',justifyContent:'center',gap:'3rem' }}>
              {options.map((option, index) => (
                <Typography key={index} sx={{cursor:'pointer', ...index==selectedOption && {borderBottom:'2px solid #1FA5FF'}}} onClick={()=>setSelectedOption(index)}>{option}</Typography>
              ))}
            </Box>
            
            <Box sx={{flex:0.6,display:'flex',justifyContent:'end'}}>
            <Button variant="outlined" sx={{color:'#1FA5FF',fontWeight:700}}>Connect Wallet</Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
}
export default Navbar;
