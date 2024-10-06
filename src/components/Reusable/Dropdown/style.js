import styled from 'styled-components';
import { DownOutlined } from '@ant-design/icons';

export const DropDownContainer = styled.div`
    position: relative;
    cursor: pointer;
    width: auto;
`;

export const DropDownHeader = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
`;

export const DropdownListContainer = styled.div`
    position: absolute;
    background-color: #090909;
    border-radius: 10px;
    padding: 10px; 
    width: auto;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const DropdownListItem = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    color: white;
    &:hover {
        color: silver;
    }
`;

export const WrapperDownOutlined = styled(DownOutlined)`
    font-size: 10px;
    margin-left: 8px;
`;