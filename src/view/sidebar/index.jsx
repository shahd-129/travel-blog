import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';  
import GroupIcon from '@mui/icons-material/Group';
import CreateIcon from '@mui/icons-material/Create';
import { Button, styled } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';

const drawerWidth = 240;

function Sidebar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const navigate = useNavigate();
    const location = useLocation(); 

    function Logout() {
        navigate('/');
    }

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginRight: open ? 0 : `-${drawerWidth}px`,
            ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginRight: 0,
            }),
        })
    );

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
        zIndex: theme.zIndex.appBar - 1,
    }));

  
    const drawer = (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Toolbar />

            <List sx={{ flexGrow: 1, color: "black" }}>
                {[
                    { text: 'dashboard', path: '/dashboard', icon: <DashboardIcon sx={{ fontSize: "1rem" }} /> },
                    { text: 'posts', path: '/dashboard/posts', icon: <CreateIcon sx={{ fontSize: "1rem" }} /> },
                    { text: 'users', path: '/dashboard/users', icon: <GroupIcon sx={{ fontSize: "1rem" }} /> },
                ].map(({ text, path, icon }) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={path}
                          
                            selected={location.pathname.startsWith(path)}
                            sx={{
                                '&.Mui-selected': {
                                    backgroundColor: '#6f92b4bf',
                                    color: '#fff',
                                    // '& .MuiListItemIcon-root': { color: 'red' },
                                },
                               
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: "30px", color: "black" }}>{icon}</ListItemIcon>
                            <ListItemText
                                primary={text}
                                primaryTypographyProps={{ sx: { fontSize: "1rem", color: "black" } }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Box sx={{ display: "flex" }}>
                <Button onClick={Logout} sx={{ width: '100%', padding: '10px', borderRadius: '8px', color: 'black', textTransform: "none" }}>
                    <LogoutIcon sx={{ mr: 0.5, fontSize: "16px" }} />
                    Logout
                </Button>
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor: '#F5F4F7',
                    boxShadow: 'none',
                }}
            >
                <Toolbar>
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div" color='black'>
                        Blog App
                    </Typography>
                </Toolbar>
            </AppBar>

         
            <Box
                component="nav"
                sx={{
                    width: { sm: drawerWidth },
                    flexShrink: { sm: 0 },
                }}
                aria-label="mailbox folders"
            >
            
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    sx={{
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    slotProps={{ root: { keepMounted: true } }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            borderBottomLeftRadius: "30px",
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

       
            <Main sx={{ bgcolor: "#F5F4F7", minHeight: "100vh" }} open={open}>
                <DrawerHeader sx={{ bgcolor: "#F5F4F7" }} />
                <Outlet />
            </Main>
        </Box>
    );
}

Sidebar.propTypes = {
    window: PropTypes.func,
};

export default Sidebar;

