import {
    Box,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

import SliderFooter from './sliderFooter';
import FooterContent from './footerContent';

export default function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>

            <Box bgcolor={'primary.main'} py={3} width={'100%'}>
                <Box
                    display="flex"
                    rowGap={10}
                    justifyContent="center"
                    flexWrap="wrap"
                    gap={isMobile ? 2 : 20}
                    px={2}
                >
                    {["Facebook", "Instagram", "Pinterest", "Twitter"].map((platform, index) => {
                        const IconComponent = [FacebookOutlinedIcon, InstagramIcon, PinterestIcon, TwitterIcon][index];

                        return (
                            <Typography
                                key={platform}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    color: 'white',
                                    fontSize: isMobile ? '14px' : '16px'
                                }}
                            >
                                <IconComponent fontSize="small" />
                                {platform}
                            </Typography>
                        );
                    })}
                </Box>
            </Box>


            <SliderFooter />
            <FooterContent isMobile={isMobile} />


        </>
    );
}
