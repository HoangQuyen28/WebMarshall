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
        padding: 30px 0;
    }
`;

export const ProductList = styled.div`
    width: 100%;
    height: auto;
    border-radius: 10px;
    display: flex;
`;

export const ProductImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
`;

export const ProductImageContainer = styled.div`
    position: relative;
    user-select: none;
    outline: none;
`;

export const ProductOverlay = styled.div`
    position: relative; 
    background-color: black;
    font-size: 13px;
    border: none;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    width: 50px;
    padding: 5px;
    margin-bottom: 8px;
    cursor: pointer;
    color: white;
    display: flex;
`;

export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const ProductCategory = styled.span`
    font-size: 12px;
    color: #888;
    margin-bottom: 5px;
    white-space: nowrap; 
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

export const ExtraInfo = styled.div`
    border-top: 1px solid #ccc;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    margin-top: 15px;
    white-space: nowrap; 

    p {
        font-size: 13px;
    }
`;

export const ProductItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 0 10px;
    background-color: white;
    height: auto;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        
    }
`;

export const ProductItemStyled = styled(ProductItem)`
    &:hover {   
        &>${ExtraInfo} {
               opacity: 1;
               max-height: 100px;
        }
    }
`;

export const ContentExtra = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;
`;
