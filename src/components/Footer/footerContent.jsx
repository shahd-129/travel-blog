import { Box, Button, Container, Grid, TextField, Typography} from '@mui/material'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

import { photoFooter } from '../../assets'
export default function FooterContent({isMobile}) {
  return (
    <Box bgcolor={'#696969'} px={{ xs: 2, sm: 5 }}  py={6} display="flex" justifyContent="space-between">
    <Container>
        <Grid container spacing={7}>
            <Grid   item xs={12} m={'auto'} md={5} display="flex" alignItems="center" justifyContent="center">
                <Box
                    component="img"
                    src={photoFooter}
                    width={isMobile ? '100px' : '200px'}
                    height="auto"
                    mr={2}
                />
                <Box color={'white'} maxWidth="400px">
                    <Typography fontWeight="bold" mb={1}>
                        About Me
                    </Typography>
                    <Typography fontSize={'14px'} >
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    </Typography>
                </Box>
            </Grid>

            <Grid  item xs={12} md={7} >
                <Typography color='white' fontWeight="bold">Join My Mailing List</Typography>
                <Box display='flex' flexDirection='column' alignItems={isMobile ? 'center' : 'flex-start'} mt={2}>
                    <Typography variant="caption" color='white'>Email</Typography>
                    <TextField
                        placeholder='Enter your email here'
                        size='small'
                        sx={{
                            width: '100%',
                            maxWidth: 300,
                            my: 1,
                        }}
                    />
                    <Button
                        sx={{
                            bgcolor: '#2573DA',
                            color: 'white',
                            textTransform: 'none',
                            width: 300,
                            borderRadius: "none",
                            mt: 2
                        }}
                    >
                        Subscribe Now
                    </Button>
                </Box>

                <Box
                    mt={3}
                    display="flex"

                    alignItems="center"
                    gap={1.5}
                    color="white"
                    fontSize='12px'
                >
                    <FacebookOutlinedIcon fontSize="small" />
                    <InstagramIcon fontSize="small" />
                    <PinterestIcon fontSize="small" />
                    <TwitterIcon fontSize="small" />
                </Box>
            </Grid>
        </Grid>
    </Container>
</Box>
  )
}
