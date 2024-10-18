import React from 'react';
import { CheckOutlined, CloseOutlined, StarFilled } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMagnifyingGlass, faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonCPN from '../Reusable/Button/Button';
import { ProductItemStyled, ProductImageContainer, ProductImage, ProductOverlay, ProductContent, ProductName, ProductDetails, ProductCategory, ProductRating, ProductStock, ProductPrice, ProductColor, ExtraInfo, ContentExtra } from './style';

const ProductItem = ({ product, index, small, medium, mediumSmall }) => {
    return (
        <ProductItemStyled small={small} medium={medium} mediumSmall={mediumSmall}>
            <ProductImageContainer>
                <ProductImage src={product.image} />
                <div style={{ position: 'absolute', top: '0', display: 'flex', flexDirection: 'column' }}>
                    {product.sale && <ProductOverlay isVisible>{product.sale}</ProductOverlay>}
                    {product.hot && <ProductOverlay isVisible style={{ backgroundColor: 'red' }}>{product.hot}</ProductOverlay>}
                    {product.new && <ProductOverlay isVisible style={{ backgroundColor: 'green' }}>{product.new}</ProductOverlay>}
                </div>

            </ProductImageContainer>
            <ProductContent>
                <ProductName>{product.name}</ProductName>
                <ProductDetails style={{ display: "flex" }}>
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
            <ButtonCPN style={{ width: small ? '100%' : medium ? '100%' : '100%', height: small ? '40px' : medium ? '40px' : mediumSmall ? '40px' : 'auto', fontSize: small ? '10px' : medium ? '12px' : mediumSmall ? '12px': 'auto' }} text='Lựa chọn các tuỳ chọn' />
            <ExtraInfo key={index}>
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
                    <ContentExtra >
                        <div><p style={{ display: 'inline', color: 'black' }}>Thương hiệu:</p> {product.category}</div>
                        <div><p style={{ display: 'inline', color: 'black' }}>Màu sắc:</p> {product.colors.join(', ')}</div>
                        <div><p style={{ display: 'inline', color: 'black' }}>Kết nối không dây:</p> {product.connect}</div>
                        <div><p style={{ display: 'inline', color: 'black' }}>Pin:</p> {product.pin}</div>
                    </ContentExtra>
                </ProductCategory>
            </ExtraInfo>
        </ProductItemStyled>
    );
};

export default ProductItem;
