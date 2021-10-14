import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 160px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 4px;
    padding: 15px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LabelNome = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.gray.dark};
`;

export const LabelDetails = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray.light};
    padding: 2px;
`;

export const ContainerIcones = styled.div`
    display: flex;
`;

export const Icone = styled.img`
    width: 23px;
    margin-right: 30px;
`;
