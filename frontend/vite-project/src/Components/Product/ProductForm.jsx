import React, { useState } from "react";
import {
    TextField, Button, Typography, Stack, Snackbar, Alert, Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../services/productService"; // Import hàm gọi API tạo sản phẩm

const ProductForm = () => {
    const navigate = useNavigate();

    // State để lưu dữ liệu form
    const [form, setForm] = useState({
        name: '',
        price: '',
        description: ''
    });

    // State để hiển thị thông báo (Snackbar)
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success', // success | error | warning | info
    });

    // Xử lý thay đổi giá trị trong form input
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Hàm xử lý khi submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Gọi API tạo sản phẩm
            await createProduct(form);

            // Hiển thị Snackbar thông báo thành công
            setSnackbar({
                open: true,
                message: "Thêm sản phẩm thành công!",
                severity: "success"
            });

            // Chuyển hướng về trang danh sách sau 1.5s
            setTimeout(() => {
                navigate("/products");
            }, 1500);
        } catch (err) {
            // Hiển thị lỗi nếu tạo không thành công
            setSnackbar({
                open: true,
                message: "Thêm sản phẩm thất bại!",
                severity: "error"
            });
        }
    };

    return (
        <Paper
            elevation={3}
            sx={{ padding: 4, maxWidth: 500, margin: "auto", mt: 4 }}
        >
            {/* Tiêu đề form */}
            <Typography variant="h5" gutterBottom>
                Thêm sản phẩm
            </Typography>

            {/* Form thêm sản phẩm */}
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label="Tên sản phẩm"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        label="Giá"
                        name="price"
                        type="number"
                        value={form.price}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        label="Mô tả"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        multiline
                        rows={3}
                    />

                    {/* Nút submit và quay lại */}
                    <Stack direction="row" spacing={2}>
                        <Button type="submit" variant="contained" color="primary">
                            Thêm
                        </Button>
                        <Button variant="outlined" onClick={() => navigate('/products')}>
                            Hủy
                        </Button>
                    </Stack>
                </Stack>
            </form>

            {/* Hiển thị thông báo bằng Snackbar */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Paper>
    );
};

export default ProductForm;
