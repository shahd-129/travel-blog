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
import { useSignupMutation } from '../../redux/api/signup';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    };
    const [sigunup] = useSignupMutation()
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await sigunup(formData).unwrap()
        if (res.message === 'Success') {
            // const token = res?.body?.access_token;
            // dispatch(setToken(token));
            navigate("/auth/login");
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
                    <Typography
                        variant="h4"
                        component="h1"
                        align="center"
                        gutterBottom
                        sx={{
                            mb: 4,
                            color: 'black'
                        }}
                    >
                        create Account
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                        <Box mt={2}>

                            <lable style={{ fontSize: '14px', color: '#4B4B52' }}>Name</lable>
                            <TextField
                                fullWidth
                                name="name"
                                placeholder="Enter your Name"
                                value={formData?.name}
                                onChange={handleChange}
                                variant="outlined"
                                required
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
                            />
                        </Box>
                        <Box mt={2}>

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
                        </Box>

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
                            Sign Up
                        </Button>
                    </Box>

                    <Typography
                        variant="body2"
                        align="center"
                        sx={{
                            mt: 2,
                            color: '#666'
                        }}>
                        aleardy have account?<NavLink to={"/auth/login"} style={{ color: "black" }}> Login</NavLink>
                    </Typography>
                </Paper>
            </Container>
        </>
    );
}

export default SignUp;