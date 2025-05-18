import React, { useEffect, useState } from "react";
import '../Product/product.scss';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, CircularProgress, Typography } from '@mui/material';

const Product = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleBack = () => {
        navigate('/');
    }

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const res = await axios.get('http://localhost:8000/api/products', {
                timeout: 5000
            });
            setProducts(res.data);
        } catch (err) {
            setError("Không thể tải dữ liệu sản phẩm.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="title">
                This is Product Page
            </div>
            <div className="info-home" onClick={handleBack}>Back</div>
            

            {loading && (
                <div className="loading-overlay">
                    <CircularProgress size={60} thickness={5} color="primary" />
                    <Typography sx={{ mt: 2, fontWeight: 'bold', fontSize: '18px' }}>
                        Đang tải dữ liệu...
                    </Typography>
                </div>
            )}

            {!loading && !error && (
                <Paper sx={{ padding: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Tên sản phẩm</TableCell>
                                <TableCell>Giá</TableCell>
                                <TableCell>Mô tả</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map(product => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.price} đ</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            )}

            {!loading && error && (
                <Typography color="error" textAlign="center">{error}</Typography>
            )}
        </>
    );
}

export default Product;
