/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 130px;
  margin: 10px 0;
  color: ${(props) => props.theme.colors.gray.dark};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  padding: 10px 20px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > span {
    font-size: 16px;
    font-weight: 500;
  }

  > h1 {
      color: ${(props) => props.theme.colors.primary.dark};
      font-size: 45px;


  }

  > small {
    font-size: 12px;
    position: absolute;
    bottom: 10px;
  }
`;
