import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { FlashOn } from '@mui/icons-material';

const PremiumStats = () => {
  return (
    <Box bgcolor="black" p={2} borderRadius={5} color="white" mb={4} display="flex" alignItems="center">
      <div style={{ marginRight: 'auto' }}>
        <Typography variant="h6" fontWeight="bold" color="white">
          Unlock premium stats
        </Typography>
        <Typography variant="body1">
          Get up to 10TB of storage for a limited time
        </Typography>
      </div>
      <Button variant="contained" color="primary" endIcon={<FlashOn />}>
        Upgrade
      </Button>
    </Box>
  );
};

export default PremiumStats;
