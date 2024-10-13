import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DropDownContainer, DropDownHeader, DropdownListContainer, DropdownListItem, WrapperDownOutlined } from './style';

const Dropdown = ({ menuItems, navigateTo, onMouseEnterValue, onMouseLeaveValue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <DropDownContainer
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <DropDownHeader onClick={() => navigate(navigateTo[0])}>
                {menuItems[0].name} <WrapperDownOutlined />
            </DropDownHeader>
            <DropdownListContainer isOpen={isOpen}>
                {menuItems[0].list.map((listItem, index) => (
                    <DropdownListItem 
                        key={index} 
                        onClick={() => navigate(navigateTo[index + 1])} // Điều hướng cho từng mục trong danh sách
                    >
                        {listItem}
                    </DropdownListItem>
                ))}
            </DropdownListContainer>
        </DropDownContainer>
    );
}

export default Dropdown;
