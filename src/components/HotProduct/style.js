import styled from "styled-components";

export const SectionHotProduct = styled.div`
    align-items: center;
    display: flex;
    height: 100px;
    justify-content: center;
`;

export const BestSellers = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;

    h1 {
        padding: 0;
    }
`;
export const ProductList = styled.div`
    width: 100%;
    height: 600px;
    border-radius: 10px;
    display: flex;
    
`;
export const ProductItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    background-color: white;
`;


export const ProductImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
`;

export const ProductImageContainer = styled.div`
    position: relative;

`;

export const ProductOverlay = styled.div`
    position: absolute;
    top: 0;
    background-color:black;
    font-size:13px;
    display:flex;
    border:none;
    border-radius:20px;
    align-items:center;
    justify-content:center;
    width:50px;
    padding:5px;
    margin-bottom:5px;
    cursor: pointer;
    color:white;

    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')}; 
`;
export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:10px;
`;

export const ProductCategory = styled.span`
    font-size: 12px;
    color: #888;
    margin-bottom: 5px;
`;

export const ProductName = styled.h3`
    font-size: 18px;
    margin: 0 0 5px 0;
`;

export const ProductDetails = styled.div`
    margin-bottom: 10px;
`;

export const ProductRating = styled.span`
    font-size: 14px;
    color: #ffa500;
    margin-bottom: 10px;
`;

export const ProductStock = styled.span`
    font-size: 14px;
    margin-bottom: 10px;
`;

export const ProductPrice = styled.span`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const ProductColor = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
   
`;

export const ProductSale = styled.button`
    position: absolute;
    background-color:black;
    font-size:13px;
    display:flex;
    border:none;
    border-radius:20px;
    align-items:center;
    justify-content:center;
    width:50px;
    padding:5px;
    margin-bottom:5px;
    cursor: pointer;
    color:white;
`


