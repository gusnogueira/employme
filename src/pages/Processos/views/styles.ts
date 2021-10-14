import styled from 'styled-components';

export const HeaderContainer = styled.div`
    margin-bottom: 5px;
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 27px;
    column-gap: 20px;
    row-gap: 18px;
    margin-right: 15px;
`;

export const StyledInput = styled.input`
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
    height: 52px;
    border: none;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    border: 1px solid ${(props) => props.theme.colors.white};
    transition: 0.1s ease-in;

    &:focus{
        border-color: ${(props) => props.theme.colors.primary.main}
    }
`;

export const StyledSelect = styled.select`
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
    height: 52px;
    border: none;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    border: 1px solid ${(props) => props.theme.colors.white};
    transition: 0.1s ease-in;

    &:focus{
        border-color: ${(props) => props.theme.colors.primary.main}
    }
`;

export const StyledButton = styled.button`
    width: 100%;
    height: 52px;
    border: 2px solid ${(props) => props.theme.colors.primary.main};
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary.main};
    font-weight: 600;
    font-size: 16px;
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
    transition:  0.1s ease-in;

    &:hover{
        background-color: ${(props) => props.theme.colors.primary.main};
        color: ${(props) => props.theme.colors.white};
    };

    &:active{
        background-color: ${(props) => props.theme.colors.primary.dark}
    };

    &[disabled]{
        background-color: ${(props) => props.theme.colors.gray.light};
        border: none;
        color: ${(props) => props.theme.colors.white};
        cursor: default;
    }
`;
