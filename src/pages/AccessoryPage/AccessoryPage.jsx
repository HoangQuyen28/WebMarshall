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

const AccessoryPage = () => {
    const [isOpenMauSac, setIsOpenMauSac] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const mauSac = [
        { name: 'Đỏ' },
        { name: 'Xanh' },
        { name: 'Đen' },
        { name: 'Trắng' },
    ];

    const loaMarshall1 = [
        { image: '/img/Accessory1.png', name: 'MARSHALL MINOR IV', category: 'TAI NGHE MARSHALL', type: 'ON-EAR', rating: 4, inStock: true, price: '2.790.000 ₫', colors: ['Black', 'White'], sale: '20%', hot: 'HOT', new: 'NEW', Sound: 'Stereo', Brand: 'Marshall' },
        { image: '/img/Accessory1.png', name: 'Marshall Jack 3.5mm', category: 'PHỤ KIỆN', type: 'CABLE', rating: 5, inStock: true, price: '350.000 ₫', colors: ['Black'], sale: '10%', hot: 'HOT', new: 'NEW', Sound: 'N/A', Brand: 'Marshall' },
        { image: '/img/Accessory1.png', name: 'Marshall Bluetooth Transmitter', category: 'PHỤ KIỆN', type: 'TRANSMITTER', rating: 4, inStock: false, price: '1.200.000 ₫', colors: ['Black'], hot: 'HOT', new: 'NEW', Sound: 'Bluetooth', Brand: 'Marshall' },
        { image: '/img/Accessory1.png', name: 'Marshall USB-C Charger', category: 'PHỤ KIỆN', type: 'CHARGER', rating: 3, inStock: true, price: '450.000 ₫', colors: ['White'], sale: '5%', hot: 'HOT', new: 'NEW', Sound: 'N/A', Brand: 'Marshall' },
        { image: '/img/Accessory1.png', name: 'Marshall Headphone Case', category: 'PHỤ KIỆN', type: 'CASE', rating: 3, inStock: true, price: '790.000 ₫', colors: ['Black'], sale: '15%', hot: 'HOT', new: 'NEW', Sound: 'N/A', Brand: 'Marshall' },
        { image: '/img/Accessory1.png', name: 'Marshall Leather Strap', category: 'PHỤ KIỆN', type: 'STRAP', rating: 4, inStock: true, price: '600.000 ₫', colors: ['Brown', 'Black'], sale: '10%', hot: 'HOT', new: 'NEW', Sound: 'N/A', Brand: 'Marshall' },
        { image: '/img/Accessory1.png', name: 'Marshall USB-C Cable', category: 'PHỤ KIỆN', type: 'CABLE', rating: 5, inStock: true, price: '300.000 ₫', colors: ['Black'], sale: '10%', hot: 'HOT', new: 'NEW', Sound: 'N/A', Brand: 'Marshall' },
    ];
    
    const MoiNhat = [
        {name:'Mới nhất'    },
        {name:'Thu tu theo muc pho bien'    },
        {name:'Thu tu theo gia tang dan'   },
        {name:'Thu tu theo gia giam dan'   },
        {name:'Thu tu theo moi nhat'   },
    ]

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
                        <p style={{ fontWeight: 'bold' }}>Phụ kiện Marshall</p>
                        
                    </HeaderLeft>
                    <HeaderRight>
                        <p style={{ color: '#808080' }}>Hiển thị 1–12 của 16 kết quả</p>
                    </HeaderRight>
                </div>
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
                            PHỤ KIỆN MARSHALL
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
export default AccessoryPage;
