import styled from "styled-components";
export const Container = styled.div`
    padding: 0 20px; 
    user-select:none;
`;

export const BannerSection1 = styled.div`
    margin-top: 187px;
    background-image: url('img/home.png');
    width: 100%;
    height: 460px; 
    justify-content: space-between;
    position: relative;
    border-radius: 20px;
`;

export const BannerContent = styled.div`
    width: 50%;
    position: absolute;
    top: 20px;
    left: 60px;
    h1 {
        color: white;
        font-size: 40px;
        line-height: 1.2;
    }
    p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 18px;
        margin-bottom: 30px;
    }
    z-index: 2;
`;
 export const ButtonHeader = styled.button`
    background-color: black;
    color: white;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    width: 150px;
    height: 36px;
    cursor: pointer;
   
 `;

 export const BestSellers = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        padding: 0;
    }
 `;