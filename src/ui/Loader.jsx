import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Animations() {
  return (
    <div className='flex justify-center gap-5'>
      <Box sx={{ width: 300 }}>

        <Skeleton variant="rectangular" height={160} />
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
      <Box sx={{ width: 300 }}>

        <Skeleton variant="rectangular" height={160} />
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
      <Box sx={{ width: 300 }}>

        <Skeleton variant="rectangular" height={160} />
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </div>

  );
}