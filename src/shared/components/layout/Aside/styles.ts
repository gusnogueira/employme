import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    grid-area: AS;
    background-color: ${(props) => props.theme.colors.primary.light};
`;

export const MenuContainer = styled.div`
    margin-top: 55px;
`;

export const MenuItemLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
`;

export const Icone = styled.img`
    display: flex;
    //top right bottom left
    margin: 35px 25px 4px 25px;
`;

export const LabelIcone = styled.span`
    display: flex;
    font-size: 9px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
    justify-content: center;
`;
