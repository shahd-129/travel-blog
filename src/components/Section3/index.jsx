import { Box, Typography } from '@mui/material';
import React from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CloudIcon from '@mui/icons-material/Cloud';
export default function Section3() {
    return (
        <Box bgcolor={'#F2F2F2'} py={2} p={5} my={{ xs: 7, md: 2 }}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                gap={10}
                px={2}
            >
                <Typography
                    sx={{
                        position: 'relative',
                        paddingRight: '20px',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            right: '-20%',
                            top: '50%',
                            width: '1px',
                            height: '30px',
                            display: { md: "block", xs: "none" },
                            backgroundColor: '#000',
                            transform: 'translateY(-50%)',
                        }
                    }}
                >
                    As featured in
                </Typography>

                <Typography fontWeight={'bold'} fontSize={'20px'}>
                    travel  <Typography  >blog</Typography>
                </Typography>
                <Box display={'flex'} flexDirection={'column'} pb={2} alignItems={'center'}>
                    <AirplanemodeActiveIcon />
                    <Typography fontSize={'18px'}>PLANE<Typography component={'span'} fontSize={'20px'} fontWeight={'bold'}>TOUR</Typography></Typography>
                </Box>

                <Typography sx={{ letterSpacing: 3 }} fontSize={'20px'} fontWeight={'700'}>WORLD  <Typography fontSize={'20px'} fontWeight={'700'}>TRAVEL</Typography></Typography>
                <Box display={'flex'} flexDirection={'column'} pb={2} alignItems={'flex-end'}>
                    <CloudIcon fontSize='small' />
                    <Typography fontSize={'20px'} fontWeight={'bold'}>skycloud</Typography>
                </Box>

            </Box>
        </Box>
    );
}
