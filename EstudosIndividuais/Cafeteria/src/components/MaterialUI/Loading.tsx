import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { brown, red, yellow } from '@mui/material/colors';

export default function LinearColor() {
  return (
    <Stack sx={{ width: '100%', color: 'brown.400', position: 'absolute', top: '50%'}} spacing={2}>
      <LinearProgress sx={{ color: red[50]}} />
      <LinearProgress sx={{ color: brown[500]}} />
      <LinearProgress sx={{ color: yellow[700]}} />
    </Stack>
  );
}
