import React from 'react';
import styled from 'styled-components';
import { WrapperDownOutlined } from '../../../components/Header/Header';
import ButtonCPN from '../../../components/Reusable/Button/Button';


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
const LocSanPhamContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    width: 26%;
    padding: 20px;
    height:250px;
`;

const LocSanPham2 = ({ sliderValue, setSliderValue, toggleMauSacDropdown, isOpenMauSac, mauSac }) => {
    return (
        <LocSanPhamContainer>
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
        </LocSanPhamContainer>
    );
};

export default LocSanPham2;