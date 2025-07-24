import React from "react";
import { Navigate } from "react-router-dom";
import LoadingComponent from "../components/commonComponents/LoadingComponent";
import { useAuth } from "../context/AuthContext";

import { Box, CircularProgress } from "@mui/material";

const ProtectedRoute = ({ children }) => {

    const { auth, loading } = useAuth();

    if (loading) {
        // return (<Box display="flex" justifyContent="center" alignItems="center" sx={{minHeight:"93vh"}} color="error">Loading...</Box>)
        return <LoadingComponent />

    }

    return auth.isAuthenticated ? children : <Navigate to="/login" replace />;

};

export default ProtectedRoute;
