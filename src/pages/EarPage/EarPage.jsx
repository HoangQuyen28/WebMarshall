import React, { useState } from 'react';
import styled from 'styled-components';
import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Pagination } from 'antd';
import LocSanPham2 from '../../components/Reusable/LocSanPham/LocSanPham2';

const Container = styled.div`
    width: 100%;
    height: 400vh;
    z-index: 1000;
    margin-top: 158px;
    background-color: rgb(246, 246, 246);
`;

const Header = styled.div`
    padding: 20px 0;
    margin: 20px;
`;

const HeaderLeft = styled.div`
    display: flex;
    gap: 10px;
`;

const HeaderRight = styled.div`
    display: flex;
`;

const HeaderBottom = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    gap: 20px;
`;

const ItemHeaderBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 8px;
    width: auto;
    height: 200px;
    text-align: center;
    margin-left: 50px;
`;

const ProductImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
`;

const ProductName = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #333;
    margin: 5px 0;
`;

const ProductQuantity = styled.p`
    font-size: 12px;
    color: #666;
`;

const Content = styled.div`
    display: flex;
    margin: 20px;
    gap: 20px;  
`;


const ProductList = styled.div`
    width: 74%;
    
`;

const HeaderProductList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 15px;
`;


const Icon = styled.div`
    font-size: 25px;
`;

const ProductLis1 = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    overflow: hidden;
    justify-content: space-between;
`;

const EarPage = () => {
    const [isOpenMauSac, setIsOpenMauSac] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const itemHeaderBottom = [
        { img: '/img/ear1.png', name: 'IN-EAR', quantity: '10' },
        { img: '/img/ear1.png', name: 'ON-EAR', quantity: '16' },
        { img: '/img/ear1.png', name: 'OVER-EAR', quantity: '1' },
        { img: '/img/ear1.png', name: 'TRUE WIRELESS', quantity: '1' },
    ];


    const mauSac = [
        { name: 'Đỏ' },
        { name: 'Xanh' },
        { name: 'Đen' },
        { name: 'Trắng' },
    ];

    const MoiNhat = [
        { name: 'Mới nhất' },
        { name: 'Thu tu theo muc pho bien' },
        { name: 'Thu tu theo gia tang dan' },
        { name: 'Thu tu theo gia giam dan' },
        { name: 'Thu tu theo moi nhat' },
    ]
    const loaMarshall1 = [
        { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: true, price: '2.790.000 ₫', colors: ['Black', 'White'], sale: '20%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 5, inStock: true, price: '2.790.000 ₫', colors: ['red'], sale: '15%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p3.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: false, price: '2.790.000 ₫', colors: ['Brown', 'Gold'], hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p4.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 3, inStock: true, price: '2.790.000 ₫', colors: ['Gold'], sale: '10%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p4.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 3, inStock: true, price: '2.790.000 ₫', colors: ['Gold'], sale: '10%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: true, price: '2.790.000 ₫', colors: ['Black', 'White'], sale: '20%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 5, inStock: true, price: '2.790.000 ₫', colors: ['red'], sale: '15%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p3.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: false, price: '2.790.000 ₫', colors: ['Brown', 'Gold'], hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p4.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 3, inStock: true, price: '2.790.000 ₫', colors: ['Gold'], sale: '10%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: true, price: '2.790.000 ₫', colors: ['Black', 'White'], sale: '20%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 5, inStock: true, price: '2.790.000 ₫', colors: ['red'], sale: '15%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p3.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: false, price: '2.790.000 ₫', colors: ['Brown', 'Gold'], hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p4.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 3, inStock: true, price: '2.790.000 ₫', colors: ['Gold'], sale: '10%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: true, price: '2.790.000 ₫', colors: ['Black', 'White'], sale: '20%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p2.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 5, inStock: true, price: '2.790.000 ₫', colors: ['red'], sale: '15%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p3.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: false, price: '2.790.000 ₫', colors: ['Brown', 'Gold'], hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/p4.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 3, inStock: true, price: '2.790.000 ₫', colors: ['Gold'], sale: '10%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },

    ];

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = loaMarshall1.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const toggleMauSacDropdown = () => {
        setIsOpenMauSac(!isOpenMauSac);
    };

    return (
        <Container>
            <Header>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <HeaderLeft>
                        <span style={{ color: '#808080' }}>Trang chủ</span>
                        <p>/</p>
                        <p style={{ fontWeight: 'bold' }}>Tai nghe Marshall</p>
                    </HeaderLeft>
                    <HeaderRight>
                        <p style={{ color: '#808080' }}>Hiển thị 1–12 của 16 kết quả</p>
                    </HeaderRight>
                </div>
                <HeaderBottom>
                    {itemHeaderBottom.map((item, index) => (
                        <ItemHeaderBottom key={index}>
                            <ProductImage src={item.img} alt={item.name} />
                            <ProductName>{item.name}</ProductName>
                            <ProductQuantity>{item.quantity} sản phẩm</ProductQuantity>
                        </ItemHeaderBottom>
                    ))}
                </HeaderBottom>
            </Header>
            <Content>
                <LocSanPham2 
                    toggleMauSacDropdown={toggleMauSacDropdown}
                    isOpenMauSac={isOpenMauSac}
                    mauSac={mauSac}
                />
                <ProductList>
                    <HeaderProductList>
                        <div >
                            TAI NGHE MARSHALL
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                            <div>
                                Show : 9 / 12 / 16 / 18
                            </div>
                            <Icon style={{ flexShrink: 0 }}><MenuOutlined /></Icon>
                            <Icon style={{ flexShrink: 0 }}><AppstoreOutlined /></Icon>
                            <select defaultValue={'Mới nhất'} style={{ border: '1px solid #ddd', padding: '5px', flexShrink: 0 }}>
                                {MoiNhat.map((item, index) => (
                                    <option key={index}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                    </HeaderProductList>
                    <ProductLis1>
                        {currentProducts.map((product, index) => (
                            <ProductItem key={index} product={product} index={index} mediumSmall />
                        ))}
                    </ProductLis1>
                    <Pagination
                        current={currentPage}
                        total={loaMarshall1.length}
                        pageSize={productsPerPage}
                        onChange={paginate}
                        style={{ textAlign: 'center', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    />
                </ProductList>
            </Content>
        </Container>
    );
};

export default EarPage;
