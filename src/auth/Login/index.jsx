import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Paper,
    CssBaseline
} from '@mui/material';
import { useLoginMutation } from '../../redux/api/signup';
import {  NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken , setUserId } from '../../redux/slice/tokenSlice';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    };
    const [login] = useLoginMutation()
    const navigate = useNavigate()
    const distpach = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const res = await login(formData).unwrap()
            console.log(res);

            if (res.message === 'Success') {
                const token = res?.body?.access_token;
                distpach(setToken(token))
                const userId = res?.body?.user?.id;
                distpach(setUserId(userId))
                if (res?.body?.user?.role === 'ADMIN') {
                    navigate("/dashboard");
                } else {
                    navigate('/')
                }
            }
        } catch (error) {
            console.log(error);

        }
    };

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };


    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ mt: 8 }}>
                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
                        borderRadius: 2,
                        bgcolor: '#fff'
                    }}
                >


                    <Box display={'flex'} justifyContent={'center'}>
                        <Box display={'flex'}  >
                            <LoginIcon sx={{ mr: 0.5 }} />
                            <Typography color='#615F6A' fontSize={'15px'}>Login</Typography>
                        </Box>

                        <Box display={'flex'} ml={2} >
                            <AccountCircleIcon sx={{ mr: 0.5 }} />
                            <Typography fontSize={'15px'}>Sign Up</Typography>
                        </Box>
                    </Box>

                    <Box component="form" onSubmit={handleSubmit} mt={3}>

                        <label style={{ fontSize: '14px', color: '#4B4B52' }}> Email address</label>
                        <TextField
                            fullWidth
                            placeholder="Enter your email address"
                            name="email"
                            type="email"
                            value={formData?.email}
                            onChange={handleChange}
                            variant="outlined"

                            sx={{
                                borderRadius: '10px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '10px',
                                    height: "50px",
                                    mt: 0.5,
                                     '&.Mui-focused fieldset': {
                                            borderColor: 'black', 
                                        }
                                },
                            }}
                            required
                        />

                        <Box mt={2}>

                            <label style={{ fontSize: '14px', color: '#333' }}>Password</label>

                            <TextField
                                fullWidth
                                placeholder="Enter your password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={formData?.password}
                                onChange={handleChange}
                                variant="outlined"
                                sx={{
                                    borderRadius: '10px',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '10px',
                                        height: "50px",
                                        mt: 0.5,
                                         '&.Mui-focused fieldset': {
                                            borderColor: 'black', 
                                        }
                                    },
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                required
                            />
                        </Box>


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                py: 1.5,
                                borderRadius: "10px",
                                fontSize: '1.1rem',
                                bgcolor: 'black',
                                height: '45px',
                                '&:hover': { bgcolor: 'black' },
                                color: '#fff',
                                textTransform: "none"
                            }}
                        >
                            Log In
                        </Button>
                    </Box>

                    <Typography
                        variant="body2"
                        align="center"
                        sx={{
                            mt: 2,
                            color: '#666'
                        }}
                    >
                        don't have an account?<NavLink to={"/auth/signup"} style={{ color: "black" }}> Sign up </NavLink>
                    </Typography>
                </Paper>
            </Container>
        </>
    );
}

export default Login;