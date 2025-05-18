import React, { useEffect, useState } from "react";
import '../Product/product.scss';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';

const Product = () => {
    const navigate = useNavigate();

    const handleBack = () => {

        navigate('/');
    }

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const res = await axios.get('http://localhost:8000/api/products');
        setProducts(res.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="title">This is Product Page</div>
            <div className="info-home" onClick={handleBack}>Back</div>

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
        </>
    )
}

export default Product;