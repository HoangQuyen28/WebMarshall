import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DropDownContainer, DropDownHeader, DropdownListContainer, DropdownListItem, WrapperDownOutlined } from './style';

const Dropdown = ({ menuItems, navigateTo, onMouseEnterValue, onMouseLeaveValue }) => {
    const [isOpen, setIsOpen] = useState(null);
    const navigate = useNavigate();

    return (
        <>
            {menuItems.map((item) => (
                <DropDownContainer
                    onMouseEnter={() => setIsOpen(onMouseEnterValue)}
                    onMouseLeave={() => setIsOpen(onMouseLeaveValue)}
                    onClick={() => navigate(navigateTo)}
                >
                    <DropDownHeader>{item.name} <WrapperDownOutlined /></DropDownHeader>
                    <DropdownListContainer isOpen={isOpen === onMouseEnterValue}>
                        {item.list.map((listItem) => (
                            <DropdownListItem key={listItem}>{listItem}</DropdownListItem>
                        ))}
                    </DropdownListContainer>
                </DropDownContainer>
            ))}
        </>
    );
}

export default Dropdown;