import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonHeader } from '../../pages/HomePage/style';
import { ProductCategory } from '../ProductItem/style';
import { ProductList } from '../HotProduct/style';

import 'bootstrap/dist/css/bootstrap.min.css';

import ProductItem from '../ProductItem/ProductItem';

const NewProductContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 50px;
    gap: 20px;
    margin-top: 70px;
    height: 89vh;
`;

const ImgLeftWrapper = styled.div`
    position: relative;
    width: 30%;
    overflow: hidden;
    cursor: pointer;
    margin-left: 20px;
    height: 100%;
`;

const ImgLeft = styled.img`
    position: relative;
    width: 100%;
    height: 517px;
    margin-right: 20px;
    border-radius: 20px;
    transition: transform 0.5s ease;
    overflow: hidden;
    &:hover {
        transform: scale(1.1);
    }
`;

const ContenRight = styled.div`
    width: 70%;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
`;

const HeaderContent = styled.div`
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px; 
    align-items: center;
`;

const ContentImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
`;

class NewProduct extends Component {
    render() {
        const hotProducts = [
            { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: true, price: '2.790.000 ₫', colors: ['Black', 'White'], sale: '20%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
            { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 5, inStock: true, price: '2.790.000 ₫', colors: ['red'], sale: '15%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
            { image: '/img/p3.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: false, price: '2.790.000 ₫', colors: ['Brown', 'Gold'], hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
            { image: '/img/p4.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 3, inStock: true, price: '2.790.000 ₫', colors: ['Gold'], sale: '10%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        ];

        return (
            <NewProductContainer>
                <ImgLeftWrapper>
                    <ImgLeft src='img/new1.png' />
                    <ContentImage>
                        <ProductCategory style={{ color: 'white' }}>AT A GOOD PRICE</ProductCategory>
                        <h3>Emberton II</h3>
                    </ContentImage>

                </ImgLeftWrapper>

                <ContenRight>
                    <HeaderContent>
                        <h1>SẢN PHẨM MỚI DÒNG LOA DI ĐỘNG</h1>
                        <ButtonHeader style={{ height: "35px", backgroundColor: "grey", color: "white" }}>Xem tất cả</ButtonHeader>
                    </HeaderContent>

                    <ProductList style={{ flexWrap: 'wrap', overflow: 'hidden' }}>
                        {hotProducts.map((product, index) => (
                            <ProductItem key={index} product={product} index={index} mediumSmall />
                        ))}
                    </ProductList>
                </ContenRight>
            </NewProductContainer>
        );
    }
}

export default NewProduct;
