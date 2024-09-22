import styled from 'styled-components';

export const WrapperHeader = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
   
`;

export const WrapperHeaderTop = styled.div`
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 35px;

`;

export const AddressWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #777;
    width:33.33%
`;

export const LogoWrapper = styled.div`
    align-items:current;
    h1 {
        font-size: 40px;
        margin: 0;
    }

    span {
        font-size: 12px;
    }
`;

export const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    width:33.33%;
    justify-content:flex-end;
`;

export const AddressText = styled.div`
    margin-left: 8px;
    span{
        padding-bottom:30px
    }
`;

export const ContactText = styled.div`
    margin-left: 8px;
`;

export const HeaderBottom = styled.div`
    background-color: black;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    
    &.sticky {
      
    }
`;


export const SelectLeft = styled.div`
    color:white;
    display:flex;
    align-items:center;
    margin-left: 40px;
`
 export const SelectRight = styled.div`
  display:flex;
  align-items:center;
  margin-right: 40px;

 `
 export const SelectLoa = styled.select`
  padding: 5px 10px;
  font-size: 14px;
  background:none;
    border:none;
  cursor: pointer;
    color:white;
  &:hover {
    border-color: #888;
  }
`;

export const MenuLink = styled.a`
color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 10px 10px;
  display: block;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`

export const StyledIcon = styled.span`
  background: white;
  border-radius: 50%;
  padding: 8px;
  margin:7px;
  font-size: 20px;
  color: black;
  cursor: pointer;
  display: inline-flex;
`;

export const StyledImg = styled.img.attrs({
  src: '/img/vietnam.png'
})`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;