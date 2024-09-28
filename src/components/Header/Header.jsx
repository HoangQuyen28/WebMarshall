import React, { useEffect, useState } from "react";
import { WrapperHeaderTop, Container, AddressWrapper, LogoWrapper, ContactWrapper, AddressText, ContactText, HeaderBottom, SelectLeft, SelectRight, SelectLoa, MenuLink, StyledIcon, StyledImg, WrapperHeader, StyledIcon1 } from "./style";
import { EnvironmentOutlined, HeartOutlined, PhoneOutlined, RiseOutlined, SearchOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import styled from "styled-components";
import { Number1 } from '../News/News'

const TopIcon = styled.span`
    color:red;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 7px;
    background: white;
    border-radius: 50%;
    padding: 5px;
    width: 10px;
`

export const Logo = styled.img`
    width: 280px;
    height: 100px;
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
                    <Logo src='img/Marshall-Logo-1.png' />

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
                    <SelectLoa defaultValue="default">
                        <option value="default" disabled>LOA MARSHALL</option>
                        <option value="portable">Loa di động</option>
                        <option value="home">Loa nghe trong nhà</option>
                    </SelectLoa>
                    <MenuLink>PHỤ KIỆN MARSHALL</MenuLink>
                    <SelectLoa defaultValue="default">
                        <option value="default" disabled>TAI NGHE MARSHALL</option>
                        <option value="portable">Loa di động</option>
                        <option value="home">Loa nghe trong nhà</option>
                    </SelectLoa>
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
