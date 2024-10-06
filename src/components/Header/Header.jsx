import React, { useEffect, useState } from "react";
import { WrapperHeaderTop, Container, AddressWrapper, ContactWrapper, AddressText, ContactText, HeaderBottom, SelectLeft, SelectRight, MenuLink, StyledIcon, StyledImg, WrapperHeader, StyledIcon1 } from "./style";
import { DownOutlined, EnvironmentOutlined, HeartOutlined, PhoneOutlined, RiseOutlined, SearchOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import styled from "styled-components";
import { Number1 } from '../News/News'
import {useNavigate } from "react-router-dom";
import Dropdown from "../Reusable/Dropdown/Dropdown";

export const Logo = styled.img`
    width: 280px;
    height: 100px;
    cursor: pointer;
`

export const DropDownContainer = styled.div`
    position: relative;
    cursor: pointer;
    width: auto;
`
export const DropDownHeader = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:15px;
`

export const DropdownListContainer = styled.div`
    position: absolute;
    background-color: #090909;
    border-radius: 10px;
    padding: 10px; 
    width: auto;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const DropdownListItem = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    color: white;
    &:hover {
        color: silver;
    }
`;
export const WrapperDownOutlined = styled(DownOutlined)`
    font-size:10px;
    margin-left:8px;
`
function Header() {
    //bien mat
    const [isHeaderTopVisible, setIsHeaderTopVisible] = useState(true);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            setIsHeaderTopVisible(currentScrollPos < 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setSticky(true)
        }
        else {
            setSticky(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [isOpen, setIsOpen] = useState(null);

    const LOAMARSHALL = [
        {
            name: 'LOA MARSHALL',
            list: ['Loa di động', 'Loa nghe trong nhà']
        }
    ]
    const TAINGHEMARSHALL = [
        {
            name: 'TAI NGHE MARSHALL',
            list: ['IN-EAR', 'ON-EAR', 'OVER-EAR', 'TRUE WIRELESS']
        }
    ]

    const navigate = useNavigate();
    return (
        <WrapperHeader className={sticky ? 'sticky' : ''}>
            <WrapperHeaderTop isVisible={isHeaderTopVisible}>
                <Container>
                    <AddressWrapper>
                        <EnvironmentOutlined style={{ fontSize: '24px' }} />
                        <AddressText>
                            <span>HN: 11 Đường Ven Sông Lừ, Kim Liên, Đống Đa, HN</span><br />
                            <span>HCM: 62 Hoa Cau, Phường 7, Phú Nhuận, TP.HCM</span>
                        </AddressText>
                    </AddressWrapper>
                    <div onClick={() => navigate('/')}>
                        <Logo src='img/Marshall-Logo-1.png' />
                    </div>
                    <ContactWrapper>
                        <PhoneOutlined style={{ fontSize: '30px' }} />
                        <ContactText >
                            0928.759.555 <br />
                            0394.678.121
                        </ContactText>
                    </ContactWrapper>
                </Container>
            </WrapperHeaderTop>


            <HeaderBottom className={sticky ? 'sticky' : ''}>
                <SelectLeft>
                    <ShopOutlined />
                    <Dropdown
                    menuItems={LOAMARSHALL}
                    navigateTo={'/loaMarshall'}
                    onMouseEnterValue={'LOA'}
                    onMouseLeaveValue={null}
                    />
                    <MenuLink>PHỤ KIỆN MARSHALL</MenuLink>
                    <Dropdown
                    menuItems={TAINGHEMARSHALL}
                    navigateTo={'/taiNgheMarshall'}
                    onMouseEnterValue={'TAI'}
                    onMouseLeaveValue={null}
                    />


                    <MenuLink>BLOG</MenuLink>
                    <MenuLink>LIÊN HỆ</MenuLink>
                </SelectLeft>
                <SelectRight>
                    <SearchOutlined style={{ fontSize: '23px', color: 'white' }} />
                    <StyledIcon><UserOutlined /></StyledIcon>
                    <StyledIcon><RiseOutlined /><Number1 style={{ fontSize: '10px', backgroundColor: 'white', color: 'black', right: '-2px', border: '1px solid black' }}>0</Number1></StyledIcon>
                    <StyledIcon><HeartOutlined /><Number1 style={{ fontSize: '10px', backgroundColor: 'white', color: 'black', right: '-2px', border: '1px solid black' }}>0</Number1></StyledIcon>
                    <StyledIcon1><ShoppingCartOutlined /><Number1 style={{ fontSize: '10px', backgroundColor: 'white', color: 'black', right: '-2px', border: '1px solid black' }}>0</Number1></StyledIcon1>
                    <span style={{ margin: '0 10px', color: 'white', cursor: 'pointer' }}>0 đ</span>
                    <StyledImg />
                    <span style={{ margin: '0 10px', color: 'white', cursor: 'pointer' }}>VIETNAM</span>
                </SelectRight>
            </HeaderBottom>
        </WrapperHeader>
    );
}

export default Header;
