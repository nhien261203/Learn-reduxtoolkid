import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Table, TableHead, TableRow, TableCell, TableBody,
    Paper, CircularProgress, Typography, Button,
    TableContainer, Stack, Snackbar, Alert
} from "@mui/material";
import { getAllProducts } from "../../services/productService";

const Product = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleBack = () => navigate('/');
    const handleAddProduct = () => navigate('/add');

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const res = await getAllProducts();
            setProducts(res.data);
        } catch (err) {
            setError("Không thể tải dữ liệu sản phẩm.");
            setOpenSnackbar(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div style={{ padding: 24 }}>
            <Typography variant="h4" gutterBottom align="center">
                Danh sách sản phẩm
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Button variant="contained" color="primary" onClick={handleBack}>
                    Trang chủ
                </Button>
                <Button variant="contained" color="success" onClick={handleAddProduct}>
                    Thêm sản phẩm
                </Button>
            </Stack>

            {loading ? (
                <div style={{ textAlign: "center", marginTop: 40 }}>
                    <CircularProgress size={60} thickness={5} />
                    <Typography sx={{ mt: 2 }}>Đang tải dữ liệu...</Typography>
                </div>
            ) : (
                <Paper elevation={3}>
                    <TableContainer>
                        <Table>
                            <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                                <TableRow>
                                    <TableCell><strong>STT</strong></TableCell>
                                    <TableCell><strong>Tên sản phẩm</strong></TableCell>
                                    <TableCell><strong>Giá</strong></TableCell>
                                    <TableCell><strong>Mô tả</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((product, index) => (
                                    <TableRow key={product.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>{product.price.toLocaleString()} đ</TableCell>
                                        <TableCell>{product.description || "Không có mô tả"}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            )}

            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Product;
