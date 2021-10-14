import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
    display: grid;
    grid-template-columns: 70px auto;
    grid-template-rows: 70px auto;
    grid-template-areas:
    'AS HD'
    'AS CT';
    height: 100%;
`;
