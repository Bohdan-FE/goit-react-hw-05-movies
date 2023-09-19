import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsStyled = styled.div`
  padding: 15px;
  display: flex;
  img {
    display: block;
    width: 250px;
  }
  div {
    padding: 15px;
    .title {
      font-size: 32px;
      font-weight: 700;
    }
    .release {
      font-size: 20px;
      font-style: italic;
      margin-bottom: 8px;
    }
    .vote {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .overview {
      font-size: 20px;
    }
  }
`;

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: inline-block;
  padding: 10px 18px;
  font-size: 22px;
  font-weight: 600;
  transition: 100ms linear;
  &.active {
    color: #a74217;
  }
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const GoBackStyled = styled.span`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  padding: 15px;
  padding-top: 30px;
`;
