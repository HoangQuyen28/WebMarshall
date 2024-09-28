import React from "react";
import { BannerContent, BannerSection1, ButtonHeader, Container } from "./style";
import HotProduct from "../../components/HotProduct/HotProduct";
import About from "../../components/About/About";
import NewProduct from "../../components/NewProduct/NewProduct";
import IndoorSpeaker from "../../components/IndoorSpeaker/IndoorSpeaker";
import Earphone from "../../components/Earphone/Earphone";
import Accessory from "../../components/Accessory/Accessory";
import News from "../../components/News/News";
function HomePage() {
    return (
      <div style={{ backgroundColor: '#f2f2f2' }}>
        <Container>
            <BannerSection1>
                <BannerContent>
                  <h1>ALL SPEAKERS</h1>
                  <p>THƯỞNG THỨC ÂM THANH MARSHALL TẠI NHÀ</p>
                  <p>VÀ TRÊN ĐƯỜNG PHỐ</p>
                  <ButtonHeader>Shop Now</ButtonHeader>
                </BannerContent>
            </BannerSection1>
        </Container>
          <HotProduct />
          <About/>
          <NewProduct/>
          <IndoorSpeaker/>
          <Earphone/>
          <Accessory/>
          <News/>
      </div>
    );
  }
  
  export default HomePage;