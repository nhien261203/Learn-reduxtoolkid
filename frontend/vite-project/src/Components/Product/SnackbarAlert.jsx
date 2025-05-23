// src/components/SnackbarAlert.jsx
import React from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackbarAlert = ({ open, onClose, message, severity = "success" }) => {
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
            <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarAlert;
