import {useEffect, useState} from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Projects from './Projects';
import { ThemeProvider ,createTheme} from '@mui/system';
import './App.css';
function App() {
  const theme=createTheme({
  palette: {
    primary: {
      main: '##EFE9F4',
    },
    secondary: {
      main: 'black',
    },
  },
});
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <div>
        <Navbar/>
        <Banner/>
        <Projects/>
      </div>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
