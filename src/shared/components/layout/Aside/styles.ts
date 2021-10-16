import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    grid-area: AS;
    background-color: ${(props) => props.theme.colors.primary.light};
`;

export const MenuContainer = styled.div`
    margin-top: 55px;
`;

export const ItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    transition: .3s;

    &:hover{
        background-color: ${(props) => props.theme.colors.primary.main};
    }
`;

export const MenuItemLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
`;

export const Icone = styled.img`
      //top right bottom left
      align-self: center;
`;

export const LabelIcone = styled.span`
    display: flex;
    font-size: 9px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
    justify-content: center;
`;
