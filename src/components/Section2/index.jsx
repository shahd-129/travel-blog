import { Box, Grid2, Typography } from '@mui/material';
import React from 'react';
import { imageSection, imageSection2, imageSection3 } from '../../assets';

export default function Section2() {
  const captions = ['Travel', 'Eat', 'Relax'];
  return (
    <Box>

      <Box py={5}>
        <Typography textAlign={'center'} fontSize={'14px'}>
          I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        </Typography>
        <Typography textAlign={'center'} fontSize={'14px'}>
          Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </Typography>
      </Box>


      <Grid2 md={4} xs={4} container justifyContent="center" spacing={2}>
        {[imageSection, imageSection2, imageSection3].map((image, index) => (
          <Grid2 key={index}>
            <Box
              sx={{
                position: 'relative',
                width: { md: '300px' },
                height: '300px',
                overflow: 'hidden',
                '&::after': {
                  content: `"${captions[index]}"`,
                  position: 'absolute',
                  top: '100px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'white',
                  color: '#2573da',
                  padding: '15px 45px',
                  "&:hover": { backgroundColor: "#2573DA", color: "white" },
                  fontSize: '16px',
                },
              }}
            >
              <Box
                component="img"
                src={image}
                sx={{
                  width: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
