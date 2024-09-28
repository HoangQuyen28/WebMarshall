import React from 'react';
import ButtonCPN from '../Button/Button';
import { CheckOutlined, CloseOutlined, RightOutlined, StarFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { ExtraInfo, ProductCategory, ProductColor, ProductContent, ProductDetails, ProductImage, ProductImageContainer, ProductItemStyled, ProductList, ProductName, ProductOverlay, ProductPrice, ProductRating, ProductStock } from '../HotProduct/style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMagnifyingGlass, faCodeCompare } from "@fortawesome/free-solid-svg-icons";

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const EarphoneContainer = styled.div`
  display: flex;
  align-items: stretch; 
  justify-content: center;
  margin: 3vh;
  padding-bottom: 30px;
  height: 80vh;
  gap:20px;
`;

const EarphoneRightHeader = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 20px;
`;

const EarphoneLeft = styled(ProductList)`
  display:flex;
  border-radius: 10px;
  flex-grow: 1; 
`;

const ImgEarphone = styled.img`
  height: 300px;
  width: 50%;
`;

const ContentEarphone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EarphoneRightList = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 30px;
  margin-top: 20px;
  
`;

const RightHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ImgList = styled.img`
  width: 334px;
  height: 190px;
  border-radius: 10px;
`;

const ImgEarphone1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
  margin-top: 30px;
`;

const earphone = [
  { image: '/img/ear1.jpg', name: 'TAI NGHE HEADPHONES' },
  { image: '/img/ear1.jpg', name: 'TAI NGHE TRÊN TAI' },
  { image: '/img/ear1.jpg', name: 'TAI NGHE TRÊN TAI' },
];

const hotProducts = [
  { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: true, price: '2.790.000 ₫', colors: ['Black', 'White'], sale: '20%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
];

const Earphone = () => {
  return (
    <div style={{ height: '100vh',marginTop:'80px' }}>
      <EarphoneContainer>
        <RightHeader>
          <EarphoneRightHeader>
            <ImgEarphone src={'img/TAINGHE-1.png'} />
            <ContentEarphone>
              <h1>Tai nghe Marshall</h1>
              <p>CHO CHÚNG TÔI ĐÔI TAI CỦA BẠN VÀ CHÚNG TÔI SẼ GIÚP BẠN NGHE MỘT BÀI NHẠC</p>
              <ButtonCPN
                text="XEM TẤT CẢ"
                icon={<RightOutlined style={{ color: 'white' }} />}
                style={{ width: '150px', height: '40px', fontSize: '13px', fontWeight: 'bold' }}
              />
            </ContentEarphone>
          </EarphoneRightHeader>
          <EarphoneRightList>
            {earphone.map((item, index) => (
              <div key={index} style={{ position: 'relative'}}>
                <ImgList src={item.image} />
                <ImgEarphone1>
                  <p style={{ color: 'white', fontSize: '17px' }}>{item.name}</p>
                  <ButtonCPN
                    text="Xem Thêm"
                    bgColor="none"
                    style={{ width: '20vh', fontSize: '11px', color: 'white', border: '2px solid white ' }}
                  />
                </ImgEarphone1>
              </div>
            ))}
          </EarphoneRightList>
        </RightHeader>
        <EarphoneLeft>
          {hotProducts.map((product, index) => (
            <ProductItemStyled key={index} style={{ width: '266px', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

              <ProductImageContainer>
                <ProductImage style={{ height: '240px' }} src={product.image} />
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
              <ButtonCPN style={{ width: 230, height: 40, fontSize: 12 }} text='Lựa chọn các tuỳ chọn' />
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
              </ExtraInfo>
            </ProductItemStyled>
          ))}
        </EarphoneLeft>
      </EarphoneContainer>
    </div>
  );
};

export default Earphone;
