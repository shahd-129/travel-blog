import { Box, Typography } from '@mui/material'
import imageHero from '../../assets/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.avif'

export default function Hero() {
  return (
    <Box  position="relative">
      <Box
        component="img"
        src={imageHero}
        width="100%"
        height="475px"
      />

      <Box
        position="absolute"
        top="40%"
        left="50%"
        sx={{
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',

          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <Typography>Travel Blog</Typography>
        <Typography variant="h1" fontSize={{md:'55px' , xs:"20px"}} fontWeight={600}>Going Places</Typography>
        <Typography fontSize={{xs:"12px"}}>I haven’t been everywhere, but it’s on my list</Typography>
      </Box>
    
    </Box>
  )
}
