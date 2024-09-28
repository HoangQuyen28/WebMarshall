import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonHeader } from '../../pages/HomePage/style';
import { ProductItemStyled, ExtraInfo, ProductCategory, ProductColor, ProductContent, ProductDetails, ProductImage, ProductImageContainer, ProductList, ProductName, ProductOverlay, ProductPrice, ProductRating, ProductStock, ContentExtra } from '../HotProduct/style';
import { CheckOutlined, CloseOutlined, StarFilled } from '@ant-design/icons';
import ButtonCPN from '../Button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMagnifyingGlass, faCodeCompare } from "@fortawesome/free-solid-svg-icons";

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                            <ProductItemStyled key={index} style={{ width: '200px', height: 'auto' }}>

                                <ProductImageContainer>
                                    <ProductImage style={{ height: '140px' }} src={product.image} />
                                    <div style={{ position: 'absolute', top: '0', display: 'flex', flexDirection: 'column' }}>
                                        {product.sale && <ProductOverlay isVisible>{product.sale}</ProductOverlay>}
                                        {product.hot && <ProductOverlay isVisible style={{ backgroundColor: 'red' }}>{product.hot}</ProductOverlay>}
                                        {product.new && <ProductOverlay isVisible style={{ backgroundColor: 'green' }}>{product.new}</ProductOverlay>}
                                    </div>
                                </ProductImageContainer>
                                <ProductContent>
                                    <ProductName style={{ fontSize: '14px' }}>{product.name}</ProductName>
                                    <ProductDetails style={{ display: "flex", flexWrap: 'wrap', fontSize: '10px' }}>
                                        <ProductCategory>{product.category},</ProductCategory>
                                        <ProductCategory>{product.type}</ProductCategory>
                                    </ProductDetails>
                                    <ProductRating>
                                        {[...Array(5)].map((_, index) => (
                                            <StarFilled
                                                key={index}
                                                style={{ color: index < product.rating ? "#ffa500" : "#e4e5e9" }}
                                            />
                                        ))}
                                    </ProductRating>
                                    <ProductStock>
                                        {product.inStock ? (<><CheckOutlined /> In Stock</>) : (<><CloseOutlined /> Out of Stock</>)}
                                    </ProductStock>
                                    <ProductPrice>{product.price}</ProductPrice>
                                    <ProductColor>
                                        {product.colors && product.colors.map((color, index) => (
                                            <div
                                                key={index}
                                                style={{
                                                    width: '20px',
                                                    height: "20px",
                                                    borderRadius: "50%",
                                                    backgroundColor: color.toLowerCase(),
                                                    marginRight: "5px",
                                                    cursor: 'pointer',
                                                }}
                                            />
                                        ))}
                                    </ProductColor>
                                </ProductContent>
                                <ButtonCPN style={{ width: 160, height: 40, fontSize: 10}} text='Lựa chọn các tuỳ chọn' />

                                <ExtraInfo>
                                    <div style={{ position: 'absolute', top: '0', right: '0', display: 'flex', flexDirection: 'column', margin: '20px', backgroundColor: 'white', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.146)', padding: '10px 12px', borderRadius: '10px', cursor: 'pointer', gap: '10px', fontSize: '19px' }}>
                                        <OverlayTrigger
                                            placement="left"
                                            overlay={<Tooltip id="tooltip-top">Compare</Tooltip>}
                                        >
                                            <span>
                                                <FontAwesomeIcon icon={faCodeCompare} alt='heart' />
                                            </span>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement="left"
                                            overlay={<Tooltip id="tooltip-top">Quick View</Tooltip>}
                                        >
                                            <span>
                                                <FontAwesomeIcon icon={faMagnifyingGlass} alt='heart' />
                                            </span>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="left"
                                            overlay={<Tooltip id="tooltip-top">Add to wishlist</Tooltip>}
                                        >
                                            <span>
                                                <FontAwesomeIcon icon={faHeart} alt='heart' />
                                            </span>
                                        </OverlayTrigger>

                                    </div>
                                    <ProductCategory>
                                        <ContentExtra>
                                            <div><p style={{ display: 'inline', color: 'black' }}>Thương hiệu:</p> {product.Brand}</div>
                                            <div><p style={{ display: 'inline', color: 'black' }}>Color:</p> {product.colors.join(', ')}</div>
                                            <div><p style={{ display: 'inline', color: 'black' }}>Âm thanh:</p> {product.Sound}</div>
                                        </ContentExtra>
                                    </ProductCategory>
                                </ExtraInfo>
                            </ProductItemStyled>
                        ))}
                    </ProductList>
                </ContenRight>
            </NewProductContainer>
        );
    }
}

export default NewProduct;
