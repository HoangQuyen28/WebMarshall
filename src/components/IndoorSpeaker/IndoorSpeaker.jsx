import React from 'react';
import styled from 'styled-components';
import ButtonCPN from '../Reusable/Button/Button';
import { RightOutlined} from '@ant-design/icons';
import { ProductList } from '../HotProduct/style';

import 'bootstrap/dist/css/bootstrap.min.css';

import ProductItem from '../ProductItem/ProductItem';
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
            <ProductItem key={index} product={product} index={index} medium/>
          ))}
        </ProductList>
      </ListProduct>
    </IndoorSpeakerContainer>
  );
};

export default IndoorSpeaker;
