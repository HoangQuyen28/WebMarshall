import { FacebookOutlined, InstagramOutlined, RightOutlined, TikTokOutlined, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
  height: auto;
  background-color: #000;
  color: white;
  h4{
    font-size:18px
  }
`;

const FooterTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid white;
    margin: 0 20px;
`

const FooterTopContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 21px;
  font-weight: 100;
 
`
const WrapperRightOutlined = styled(RightOutlined)`
  background-color: white;
  color: black;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FooterContainer1 = styled.div`
padding: 40px 0;
border-bottom: 1px solid white;
margin: 0 20px;
h3{
  font-size:18px
}
  
`
const FooterContainer1Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  margin-right: 30px;
  gap: 10px;
`
const FooterContainer1Content1 = styled.div`
  display: flex;
  flex-direction: column;

`
const Logo = styled.img`
  width: 200px;
  height: 70px;
`
const Footera = styled.a`
  color: silver;
  cursor: pointer;
  text-decoration: none;
  font-size:14px;
  &:hover{
    color: white;
  }
`
const FooterBootom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;

`
function Footer() {

  return (
    <FooterContainer>
      <FooterTop>
        <FooterTopContent>
          <h4>Hà Nội Store</h4>
          <WrapperRightOutlined />
        </FooterTopContent>
        <FooterTopContent>
          <h4>Đà Nẵng Store</h4>
          <WrapperRightOutlined />
        </FooterTopContent>
        <FooterTopContent>
          <h4>Hồ Chí Minh Store</h4>
          <WrapperRightOutlined />
        </FooterTopContent>
        <FooterTopContent>
          <h4>Cần Thơ Store</h4>
          <WrapperRightOutlined />
        </FooterTopContent>
      </FooterTop>

      <FooterContainer1>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
          <FooterContainer1Content>
            <Logo src='img/logo.png' />
            <p style={{ color: 'white', lineHeight: '1.6' }}>Marshall Store Vietnam mong muốn đem đến những sản phẩm đẹp, chất lượng cùng những câu chuyện và những trải nghiệm mới mẻ cho khách hàng của mình với dịch vụ tốt nhất. </p>
          </FooterContainer1Content>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <FooterContainer1Content1>
              <h3>Categories</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Footera >Portable Speaker</Footera>
                <Footera >Home Speaker</Footera>
                <Footera >Accessories</Footera>
                <Footera >Headphone</Footera>
              </div>
            </FooterContainer1Content1>
            <FooterContainer1Content1>
              <h3>Useful Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Footera>Promotions</Footera>
                <Footera>Stores</Footera>
                <Footera>Our contacts</Footera>
                <Footera>Delivery & Return</Footera>
                <Footera>Outlet</Footera>
              </div>
            </FooterContainer1Content1>
            <FooterContainer1Content1>
              <h3>Useful Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Footera>Blog</Footera>
                <Footera>Our contacts</Footera>
                <Footera>Promotions</Footera>
                <Footera>Stores</Footera>
                <Footera>Delivery & Return</Footera>
              </div>
            </FooterContainer1Content1>
            <FooterContainer1Content1>
              <h3>MARSHALL STORE VIETNAM</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Footera >Đại lý/ Dự án</Footera>
                <Footera >Mail: marshallstorevietnam.vn@gmail.com</Footera>
              </div>
            </FooterContainer1Content1>
          </div>
        </div>
        <h3>Subscribe</h3>
        <div style={{ display: 'flex', gap: '10px', fontSize: '20px' }}>
          <FacebookOutlined />
          <InstagramOutlined />
          <YoutubeOutlined />
          <TikTokOutlined />
          <TwitterOutlined />
        </div>
      </FooterContainer1>
      <FooterBootom>
        <p>© 2024 Marshall Store Vietnam. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '10px', fontSize: '30px' }}>
          <FontAwesomeIcon icon={faCcVisa} />
          <FontAwesomeIcon icon={faCcMastercard} />
        </div>
      </FooterBootom>
    </FooterContainer>
  );
}

export default Footer;