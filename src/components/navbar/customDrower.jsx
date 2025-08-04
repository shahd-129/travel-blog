import { Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material'
import { Link } from "react-router-dom";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import TwitterIcon from "@mui/icons-material/Twitter";
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
            {/* <Box sx={{ display: { md: "flex", xs: "none" }, alignItems: "center", gap: 1.5, color: "#696969" }}>
                <FacebookOutlinedIcon fontSize="small" />
                <InstagramIcon fontSize="small" />
                <PinterestIcon fontSize="small" />
                <TwitterIcon fontSize="small" />
            </Box> */}

        </Drawer>

    </>
    )
}
