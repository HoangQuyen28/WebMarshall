import React from 'react';
import styled from 'styled-components';
import ButtonCPN from '../Reusable/Button/Button';
import { CheckOutlined, CloseOutlined, RightOutlined, StarFilled } from '@ant-design/icons';
import { ContentExtra, ExtraInfo, ProductCategory, ProductColor, ProductContent, ProductDetails, ProductImage, ProductImageContainer, ProductItemStyled, ProductList, ProductName, ProductOverlay, ProductPrice, ProductRating, ProductStock } from '../HotProduct/style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMagnifyingGlass, faCodeCompare } from "@fortawesome/free-solid-svg-icons";

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const IndoorSpeakerContainer = styled.div`
  width: 100%;
  height: 160vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to right, #444444, #999999);
  
`;

const HeaderIndoorSpeaker = styled.div`
  width: 100%; 
  display: flex;
  color: white;
  padding: 20px;
`;

const ContentIndoorSpeaker = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const ImageIndoorSpeaker = styled.img`
  width: 50%; 
  height: auto;
`;

const ListProduct = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;     
  padding: 20px;
`;


const hotProducts = [
  { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: true, price: '2.790.000 ₫', colors: ['Black', 'White'], sale: '20%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
  { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 5, inStock: true, price: '2.790.000 ₫', colors: ['red'], sale: '15%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
  { image: '/img/p3.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: false, price: '2.790.000 ₫', colors: ['Brown', 'Gold'], hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
  { image: '/img/p4.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 3, inStock: true, price: '2.790.000 ₫', colors: ['Gold'], sale: '10%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
];


const IndoorSpeaker = () => {
  return (
    <IndoorSpeakerContainer>
      <HeaderIndoorSpeaker>
        <ImageIndoorSpeaker src='img/indoorSpeaker.png' alt='Indoor Speaker' />
        <ContentIndoorSpeaker>
          <h1>LOA NGHE TRONG NHÀ</h1>
          <h1>_____</h1>
          <p>
            Đắm chìm trong âm nhạc của bạn và trải nghiệm âm thanh <br />sân khấu lớn trong sự thoải mái tại nhà của bạn.
          </p>
          <ButtonCPN text='XEM THÊM' icon={<RightOutlined style={{ color: 'white' }} />} style={{ width: '150px', height: '40px', fontSize: '13px', fontWeight: 'bold' }} />
        </ContentIndoorSpeaker>
      </HeaderIndoorSpeaker>


      <ListProduct>
        <ProductList style={{ flexWrap: 'wrap', overflow: 'hidden' }}>
          {hotProducts.map((product, index) => (
            <ProductItemStyled key={index} style={{ width: '266px', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

              <ProductImageContainer>
                <ProductImage style={{ height: '220px'}} src={product.image} />
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
              <ButtonCPN style={{ width: 220, height: 40, fontSize: 12 }} text='Lựa chọn các tuỳ chọn' />

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
      </ListProduct>
    </IndoorSpeakerContainer>
  );
};

export default IndoorSpeaker;
