/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 550px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 7px;
    margin: 10px 0;
    padding: 10px 20px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
`;
