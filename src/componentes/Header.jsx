import React from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return ( 
    <AppBar position="static" > 
      <Toolbar>
        <Typography variant="{isMobile ? 'h6' : 'h4'}" sx={{width:'100%'}} align='center'> {/* esto es para que sea responsivo */}
          MI PORTAFOLIO 
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;