// src/components/LoginPage.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { Visibility, VisibilityOff } from "@mui/icons-material";




const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const schema = yup.object().shape({
        email: yup.string()
            .required("Email is required")
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                "Invalid email format"
            ),
        password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    });

    const form = useForm({
        defaultValues: {
            email: "test@watsoo.com",
            password: "Test@123"
        },
        resolver: yupResolver(schema)
    });

    const { register, handleSubmit, setError, formState } = form;
    const { errors } = formState;


    const onSubmit = (data) => {
        const result = login(data.email, data.password);
        if (result.success) {
            navigate("/employees");
        } else {
            setError("root", { message: result.message });
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <Box
                display="flex"
                flexDirection="column"
                maxWidth={450}
                padding={4}
                boxShadow={3}
                borderRadius={2}
                className="login-page"
                sx={{
                    '@media (max-width:450px)': {
                        boxShadow: 0
                    }
                }}

            >
                <Box sx={{
                    width: 48, height: 48, mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 1,
                }} > <PeopleAltOutlinedIcon color="primary" fontSize="large" /> </Box>
                <Typography variant="h4" color="primary" marginBottom={1} component='div' sx={{ display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "2rem" } }}>
                    Login To EMS
                </Typography>

                

                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Email "
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        placeholder="email address"
                    />

                    <TextField
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        placeholder="* * * * * * * * *"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleTogglePassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />

                    {errors.root && (
                        <Typography color="error" fontSize="0.875rem">
                            {errors.root.message}
                        </Typography>
                    )}

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        sx={{ marginTop: 2, textTransform: "none" }}
                    >
                        Sign In
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default LoginPage;
