import { memo } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function FuseSplashScreen() {
  return (
    <div
      id="fuse-splash-screen"
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Typography variant="h1">Carregando</Typography>
      <Box
        id="spinner"
        sx={{
          '& > div': {
            backgroundColor: '#F0E7D6',
          },
        }}
      >
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </Box>
    </div>
  );
}

export default memo(FuseSplashScreen);
