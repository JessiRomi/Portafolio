import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt={5} mb={2} textAlign="center">
      <Typography variant="body2" color="fuchsia">
        &copy; {new Date().getFullYear()} Mi Portfolio
      </Typography>
    </Box>
  );
};

export default Footer;