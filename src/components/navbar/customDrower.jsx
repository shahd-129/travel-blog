import { Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material'
import { Link } from "react-router-dom";
export default function CustomDrawer({ setDrawerOpen, drawerOpen, pages }) {


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

            <List>
                {pages.map((page) => (
                    <ListItem
                        key={page.id}
                        component={Link}
                        to={page.path}
                        onClick={() => setDrawerOpen(false)}
                    >
                        <ListItemText primary={page.label} />
                    </ListItem>
                ))}
            </List>


        </Drawer>

    </>
    )
}
