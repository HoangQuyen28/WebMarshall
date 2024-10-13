import React from 'react';
import { ButtonHeader } from '../../pages/HomePage/style';
import { BestSellers, ProductList } from './style';
import styled from 'styled-components';
import ProductItem from '../ProductItem/ProductItem';
const HotProductContainer = styled.div`
    height: 800px;
    margin-left: 20px;
    margin-right: 20px;
`;

const HotProduct = () => {
    const hotProducts = [
        { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'IN-EAR', rating: 4, inStock: true, price: '2.790.000 ₫', colors: ['Black', 'White'], sale: '20%', hot: 'HOT', new: 'NEW', connect: 'Kết nối không dây', pin: 'Pin' },
        { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 5, inStock: true, price: '2.790.000 ₫', colors: ['red'], sale: '15%', hot: 'HOT', new: 'NEW', connect: 'Kết nối không dây', pin: 'Pin' },
        { image: '/img/p3.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: false, price: '2.790.000 ₫', colors: ['Brown', 'Gold'], hot: 'HOT', new: 'NEW', connect: 'Kết nối không dây', pin: 'Pin' },
        { image: '/img/p4.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 3, inStock: true, price: '2.790.000 ₫', colors: ['Gold'], sale: '10%', hot: 'HOT', new: 'NEW', connect: 'Kết nối không dây', pin: 'Pin' },
    ];

    return (
        <HotProductContainer>
            <BestSellers>
                <h1>SẢN PHẨM HOT</h1>
                <ButtonHeader style={{ height: "35px" }}>Xem tất cả</ButtonHeader>
            </BestSellers>
            <ProductList>
                {hotProducts.map((product, index) => (
                    <ProductItem key={index} product={product} index={index} />
                ))}
            </ProductList>
        </HotProductContainer>
    );
}

export default HotProduct;
