// Revenue.js
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

const Revenue = ({ title, value, change, positive, style }) => {
  return (
    <Card variant="outlined" style={style}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h5">{value}</Typography>
        <Box display="flex" alignItems="center">
          {positive ? (
            <ArrowUpward style={{ color: 'green' }} />
          ) : (
            <ArrowDownward style={{ color: 'red' }} />
          )}
          <Typography variant="body2" color={positive ? 'green' : 'red'}>
            {change}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Revenue;
