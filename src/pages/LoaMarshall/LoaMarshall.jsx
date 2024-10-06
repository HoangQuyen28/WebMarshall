import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonCPN from '../../components/Reusable/Button/Button';
import { WrapperDownOutlined } from '../../components/Header/Header';

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
`;

const LocSanPham = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    width: 26%;
    padding: 20px;
`;

const Slider = styled.input`
    width: 100%;
    height: 2px;
    background: black;
    outline: none;
    border-radius: 5px;
    -webkit-appearance: none;
    user-select: none;
    cursor: pointer;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 5px;
        height: 17px;
        background: black;
    }
`;

const ProductList = styled.div`
    
`;

const Price = styled.div`
    display: flex;
    padding: 20px 0;
    gap: 10px;
    border-bottom: 1px solid #ddd;
    justify-content: center;
    text-align: center;
    margin: 10px 0 5px 0;
`;

const DropDownItem = styled.div`
    cursor: pointer;
    padding: 20px 0;
    background-color: ${({ isOpen }) => (isOpen ? '#f2f2f2' : 'white')};
    border-radius: 8px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DropDownMenu = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DropDownMenuItem = styled.li`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f2f2f2;
    }
`;

const HeaderProductList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LoaMarshall = () => {
    const [sliderValue, setSliderValue] = useState(1000000);
    const [isOpenDienTich, setIsOpenDienTich] = useState(false);
    const [isOpenMauSac, setIsOpenMauSac] = useState(false); 
    const [isOpenCongSuat, setIsOpenCongSuat] = useState(false); 

    const itemHeaderBottom = [
        { img: '/img/indoorSpeaker.png', name: 'LOA DI ĐỘNG', quantity: '10' },
        { img: '/img/indoorSpeaker.png', name: 'LOA NGHE TRONG NHÀ', quantity: '16' },
        { img: '/img/indoorSpeaker.png', name: 'LIMITED EDITION', quantity: '1' },
    ];

    const dienTich = [
        { name: '15 - 25m2' },
        { name: '25 - 35m2' },
        { name: '35 - 45m2' },
        { name: '45 - 55m2' },
    ];

    const mauSac = [
        { name: 'Đỏ' },
        { name: 'Xanh' },
        { name: 'Đen' },
        { name: 'Trắng' },
    ];

    const toggleDienTichDropdown = () => {
        setIsOpenDienTich(!isOpenDienTich);
        setIsOpenMauSac(false);
        setIsOpenCongSuat(false);
    };

    const toggleMauSacDropdown = () => {
        setIsOpenMauSac(!isOpenMauSac);
        setIsOpenDienTich(false); 
        setIsOpenCongSuat(false);
    };

    const toggleCongSuatDropdown = () => {
        setIsOpenCongSuat(!isOpenCongSuat);
        setIsOpenMauSac(false); 
        setIsOpenDienTich(false);
    };


    return (
        <Container>
            <Header>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <HeaderLeft>
                        <span style={{ color: '#808080' }}>Trang chủ</span>
                        <p>/</p>
                        <p style={{ fontWeight: 'bold' }}>Loa Marshall</p>
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
                <LocSanPham>
                    <p>Lọc sản phẩm</p>
                    <Slider
                        type="range"
                        min="0"
                        max="1000000"
                        value={sliderValue}
                        onChange={(e) => setSliderValue(e.target.value)}
                    />
                    <Price>
                        <p>Giá 2.690.000</p>
                        <p> - </p>
                        <p>{parseInt(sliderValue).toLocaleString('vi-VN')} VNĐ</p>
                        <ButtonCPN
                            text={'Lọc'}
                            style={{
                                width: '30px',
                                height: '30px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        />
                    </Price>

                    <DropDownItem onClick={toggleDienTichDropdown} isOpen={isOpenDienTich}>
                        <span>Diện tích sử dụng</span>
                        <WrapperDownOutlined />
                    </DropDownItem>
                    {isOpenDienTich && (
                        <DropDownMenu>
                            {dienTich.map((item, index) => (
                                <DropDownMenuItem key={index}>
                                    <p>{item.name}</p>
                                    <p>{item.quantity}</p>
                                </DropDownMenuItem>
                            ))}
                        </DropDownMenu>
                    )}

                    <DropDownItem onClick={toggleMauSacDropdown} isOpen={isOpenMauSac}>
                        <span>Màu sắc</span>
                        <WrapperDownOutlined />
                    </DropDownItem>
                    {isOpenMauSac && (
                        <DropDownMenu>
                            {mauSac.map((item, index) => (
                                <DropDownMenuItem key={index}>
                                    {item.name}
                                </DropDownMenuItem>
                            ))}
                        </DropDownMenu>
                    )}

                    <DropDownItem onClick={toggleCongSuatDropdown} isOpen={isOpenCongSuat}>
                        <span>Công suất</span>
                        <WrapperDownOutlined />
                    </DropDownItem>
                    {isOpenCongSuat && (
                        <DropDownMenu>
                            {mauSac.map((item, index) => (
                                <DropDownMenuItem key={index}>
                                    <p>{item.name}</p>
                                </DropDownMenuItem>
                            ))}
                        </DropDownMenu>
                    )}
                </LocSanPham>
                <ProductList>
                    <HeaderProductList>
                        <p>LOA MARSHALL</p>
                        <div>
                            <p>Show : 9 / 12 / 16 / 18</p>
                            <p>List</p>
                        </div>
                    </HeaderProductList>
                </ProductList>
            </Content>
        </Container>
    );
};

export default LoaMarshall;
