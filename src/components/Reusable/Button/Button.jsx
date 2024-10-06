import React from 'react';
import styled from 'styled-components';

// Styled button
const StyledButton = styled.button`
  padding: 12px 25px;
  background-color: ${({ bgColor }) => bgColor === 'none' ? 'transparent' : (bgColor || 'black')}; /* Nếu bgColor là 'none', dùng transparent */
  color: white;
  border: ${({ bgColor }) => bgColor === 'none' ? '1px solid black' : 'none'}; /* Tùy chọn border khi không có nền */
  border-radius: 5px;
  font-size: 16px;
  width: 275px;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 

  &:hover {
    background-color: ${({ bgColor }) => bgColor === 'none' ? 'transparent' : (bgColor || 'black')}; 
    transform: translateY(-2px); 
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15); 
  }

  &:active {
    transform: translateY(0); 
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  }
`;

const ButtonCPN = ({ text, onClick, type = "button", style, icon, bgColor }) => {
  return (
    <StyledButton type={type} onClick={onClick} style={style} bgColor={bgColor}>
      {text}
      {icon}
    </StyledButton>
  );
};

export default ButtonCPN;
