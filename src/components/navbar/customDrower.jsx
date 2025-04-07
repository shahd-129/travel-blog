import { Box, Button , Drawer } from '@mui/material'
import React from 'react'

export default function CustomDrawer({ setDrawerOpen, drawerOpen , pages  }) {
 

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    };


    return (<>

        <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleCloseDrawer}
            sx={{
                '& .MuiDrawer-paper': {
                    width: '100%',
                    height: 'auto',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    position: 'absolute',
                    top: '20%',
                    padding: 2,
                },
            }}
        >
            {pages.map((page) => (
                <Button
                    key={page.id}
                    
                    sx={{
                        fontSize: '15px',
                        fontWeight:500,
                        color: "black",
                        textTransform: "none",
                        padding: '1rem',
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start"

                    }}
                >
                    {page.label}
                </Button>
            ))}
          
        </Drawer>

    </>
    )
}
