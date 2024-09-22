import React, { useEffect, useState } from "react";
import { WrapperHeaderTop, Container, AddressWrapper, LogoWrapper, ContactWrapper, AddressText, ContactText, HeaderBottom, SelectLeft, SelectRight, SelectLoa, MenuLink, StyledIcon, StyledImg, WrapperHeader } from "./style";
import { EnvironmentOutlined, HeartOutlined, PhoneOutlined, RiseOutlined, SearchOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'; 

function Header() {
    
    return (
        <WrapperHeader >
        <WrapperHeaderTop >
            <Container>
                <AddressWrapper>
                    <EnvironmentOutlined style={{ fontSize: '24px' }} />
                    <AddressText>
                        <span>HN: 11 Đường Ven Sông Lừ, Kim Liên, Đống Đa, HN</span><br/>
                        <span>HCM: 62 Hoa Cau, Phường 7, Phú Nhuận, TP.HCM</span>
                    </AddressText>
                </AddressWrapper>
                <LogoWrapper>
                    <h1>Marshall</h1>
                    <span>Store Vietnam</span>
                </LogoWrapper>

                <ContactWrapper>
                    <PhoneOutlined style={{ fontSize: '30px' }}/>
                    <ContactText >
                        0928.759.555 <br />
                        0394.678.121
                    </ContactText>
                </ContactWrapper>
            </Container>
        </WrapperHeaderTop>
        <HeaderBottom>
            <SelectLeft>
                <ShopOutlined/>
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
                <SearchOutlined style={{fontSize:'23px',color:'white'}}/>
                <StyledIcon><UserOutlined /></StyledIcon>
                <StyledIcon><RiseOutlined /></StyledIcon>
                <StyledIcon><HeartOutlined /></StyledIcon>
                <StyledIcon><ShoppingCartOutlined/></StyledIcon>
                <span style={{margin:'0 10px',color:'white',cursor:'pointer'}}>0 d</span>
                <StyledImg/>
                <span style={{margin:'0 10px',color:'white',cursor:'pointer'}}>VIETNAM</span>
            </SelectRight>
            </HeaderBottom>
        </WrapperHeader>
    );
}

export default Header;
