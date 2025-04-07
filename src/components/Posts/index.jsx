import { Avatar, Box, Typography, IconButton, Container, Card } from '@mui/material';
import React from 'react';
import { postsImgae } from '../../assets';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';

export default function Posts() {
    return (
 
        <Card
            sx={{ 
                width: '100%', 
                my:10,
                maxWidth: 700, 
                mx: 'auto', 
                p: 2, 
                borderRadius: 2, 
                boxShadow: 3, 
                // bgcolor: 'background.paper' 
            }}
            elevation={0}
        >
          
            <Box display="flex" alignItems="center" gap={1} mb={1}>
                <Avatar sx={{ width: 40, height: 40 }} />
                <Typography fontSize={'14px'}>admin</Typography>
            </Box>

            <Box
                component="img"
                src={postsImgae}
                alt="Post Image"
                width="100%"
                borderRadius={2}
                sx={{ objectFit: 'cover' }}
            />

            
            <Box mt={1}>
                <IconButton>
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton>
                    <ModeCommentIcon />
                </IconButton>
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </Box>
        </Card>
   

    );
}
