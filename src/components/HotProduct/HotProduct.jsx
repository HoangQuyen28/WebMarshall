import React from 'react';
import { ButtonHeader } from '../../pages/HomePage/style';
import { BestSellers, ProductList, ProductItem, ProductImage, ProductContent, ProductCategory, ProductName, ProductDetails, ProductRating, ProductStock, ProductPrice, ProductColor, ProductImageContainer, ProductOverlay } from './style';
import { CheckOutlined, CloseOutlined, StarFilled } from '@ant-design/icons';
import ButtonCPN from '../Button/Button';
const HotProduct = () => {
    const hotProducts = [
        { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'IN-EAR', rating: 4, inStock: true, price: '2.790.000 ₫', colors: ['Black', 'White'],sale:'20%',hot:'HOT',new:'NEW' },
        { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 5, inStock: true, price: '2.790.000 ₫', colors: ['red'],sale:'15%',hot:'HOT'  },
        { image: '/img/p3.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: false, price: '2.790.000 ₫', colors: ['Brown', 'Gold'],hot:'HOT' ,new:'NEW'  },
        { image: '/img/p4.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 3, inStock: true, price: '2.790.000 ₫', colors: ['Gold'],sale:'10%',hot:'HOT',new:'NEW'   },
    ];

    return (
        <div>
            <BestSellers>
                <h1>SẢN PHẨM HOT</h1>
                <ButtonHeader style={{ height: "35px" }}>Xem tất cả</ButtonHeader>
            </BestSellers>
            <ProductList>
                {hotProducts.map((product, index) => (
                    <ProductItem key={index}>
                         <ProductImageContainer>
                            <ProductImage src={product.image}/>
                            {product.sale && <ProductOverlay isVisible>{product.sale}</ProductOverlay>}
                            {product.hot && <ProductOverlay isVisible style={{backgroundColor:'red',top:'30px'}}>{product.hot}</ProductOverlay>}
                            {product.new && <ProductOverlay isVisible style={{backgroundColor:'green',top:'60px'}}>{product.new}</ProductOverlay>}
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
                        <ButtonCPN text='Lựa chọn các tuỳ chọn' />
                    </ProductItem>
                ))}
            </ProductList>
        </div>
    );
}

export default HotProduct;
