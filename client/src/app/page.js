'use client'
import Image from 'next/image'
import './page.css';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { white } from '@mui/material/colors';
import Navbar from '@/components/Navbar';

const theme = createTheme({
  palette:{
    primary:{
      main:'#1FA5FF'
    },
  },
  typography:{
    fontFamily:'Inter',
    fontSize:12
  },
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          color:'white',
          borderRadius:'6.25rem'
        }
      },
      defaultProps:{
        disableRipple: true
      }
    }
  }
});
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <main className={'main'}>
      <Navbar/>
      hello
    </main>
    </ThemeProvider>
  )
}
