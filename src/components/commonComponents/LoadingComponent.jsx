
import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingComponent = ({ text = 'Loading...' }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"

      alignItems="center"
      justifyContent="center"
      sx={{ height: "93vh", bgcolor: "#fafafa" }}
      gap={3}
    >
      <CircularProgress color="primary" size="3rem" value={60} />
      <Typography variant="subtitle1" mt={2}>
        {text}
      </Typography>
    </Box>
  );
};



export default LoadingComponent;