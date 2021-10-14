import styled from 'styled-components';

export const Container = styled.div`
    grid-area: HD;
    background-color: ${(props) => props.theme.colors.background};
`;

export const Conteudo = styled.div`
    margin-left: 45px;
    margin-right: 70px;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoImg = styled.img`
    width: 195px;
    height: 45px;
`;

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 0.5px solid;
    border-right: 0.5px solid;
    border-color: ${(props) => props.theme.colors.gray.light};
    padding-left: 15px;
    padding-right: 15px;
`;

export const Username = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.colors.primary.light};
    font-weight: 600;
`;

export const Company = styled.span`
    font-size: 12px;
    color: ${(props) => props.theme.colors.black};
    font-weight: 400;
    align-self: flex-end;
`;

export const IconeSettings = styled.img`
    width: 25px;
    margin-right: 20px;
`;

export const IconeLogout = styled.img`
    width: 18px;
    margin-left: 20px;
`;

export const RigthContainer = styled.div`
    display: flex;
    justify-content: center;
`;
