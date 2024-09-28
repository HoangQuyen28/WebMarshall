import { StarFilled } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

const AccessoryContainer = styled.div`
    margin: 0 20px 20px 20px;
    height: 35vh;
`;

const HeaderAccessory = styled.div`
    padding:20px 0;
`

const AccessoryList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:3vh;
`;

const AcccesssoryItem = styled.div`
    width: 69vh;
    height: 100px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
`

const ContentAccessory = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const ImageAccessory = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin:0 30px;
`
const NameAccessory = styled.a`
text-decoration: none;
    color: black;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        color: #888888;
    }
`

const RatingAccessory = styled.div`
    
`

const PriceAccessory = styled.div`
    
`
const accessory = [
    { image: '/img/Accessory1.png', name: 'ACNOS MI30S', rating: 4, price: '2.790.000 ₫' },
    { image: '/img/Accessory1.png', name: 'ACNOS MI30S', rating: 3, price: '2.790.000 ₫' },
    { image: '/img/Accessory1.png', name: 'ACNOS MI30S', rating: 2, price: '2.790.000 ₫' },
    { image: '/img/Accessory1.png', name: 'ACNOS MI30S', rating: 5, price: '2.790.000 ₫' },
];
const Accessory = () => {
    return (
        <AccessoryContainer>
            <HeaderAccessory>
                <h1>PHỤ KIỆN MARSHALL</h1>
            </HeaderAccessory>
            <AccessoryList>
                {accessory.map((product, index) => (
                    <AcccesssoryItem key={index}>
                        <ImageAccessory src={product.image} />
                        <ContentAccessory>
                            <NameAccessory>{product.name}</NameAccessory>
                            <RatingAccessory>{[...Array(5)].map((_, index) => (
                                <StarFilled
                                    key={index}
                                    style={{ color: index < product.rating ? "#ffa500" : "#e4e5e9" }}
                                />
                            ))}</RatingAccessory>
                            <PriceAccessory>{product.price}</PriceAccessory>
                        </ContentAccessory>

                    </AcccesssoryItem>
                ))}
            </AccessoryList>
        </AccessoryContainer>
    );
};

export default Accessory;
