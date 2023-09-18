import styled from 'styled-components';

export const HeaderStyled = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
  padding: 18px;
  padding-left: 40px;
  border: 1px solid black;
  background-color: #160f30;
  .active {
    color: #ffac41;
  }
  a {
    text-decoration: none;
    font-size: 28px;
    transition: 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
    color: white;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
