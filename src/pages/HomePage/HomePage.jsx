import React from "react";
import { BannerContent, BannerSection1, ButtonHeader, Container } from "./style";
import HotProduct from "../../components/HotProduct/HotProduct";
import About from "../../components/About/About";

function HomePage() {
    return (
      <div>
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
        <Container>
          <HotProduct />
        </Container>
        <Container>
          <About/>
        </Container>
      </div>
    );
  }
  
  export default HomePage;