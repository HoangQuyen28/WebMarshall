import styled from 'styled-components';

export const WrapperHeader = styled.div`
 display: flex; /* Thêm display flex */
 flex-direction: column; /* Đặt chiều dọc */
    background-color: white;
    position: fixed;
    left: 0;
    top: 0;
  right: 0;
  transition: all 0.7s;
  z-index: 3;
  user-select: none;
  outline: none;

  &.sticky {
    background: #333;
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
   
`;

export const WrapperHeaderTop = styled.div`
    height: auto;
    transition: all 0.3s ease;
    max-height: ${props => props.isVisible ? '100px' : '0'};
    overflow: hidden;
  opacity: ${props => props.isVisible ? '1' : '0'};
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
    background-color: red;
    
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
    height: auto;
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
  position: relative;
  background: white;
  border-radius: 50%;
  padding: 8px;
  margin:7px;
  font-size: 20px;
  color: black;
  cursor: pointer;
  display: inline-flex;
`;
export const StyledIcon1 = styled.span`
  position: relative;
  background: white;
  border-radius: 50%;
  padding: 8px;
  margin:7px;
  font-size: 20px;
  color: black;
  cursor: pointer;
  display: inline-flex;
  background-color: black;
  color: white;
`;

export const StyledImg = styled.img.attrs({
  src: '/img/vietnam.png'
})`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;