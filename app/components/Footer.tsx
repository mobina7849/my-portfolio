import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box textAlign="center" py={3} mt={5} bgcolor="grey.200">
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
