import styled from 'styled-components';

export const Title = styled.p`
  font-size: 36px;
  text-align: center;
  font-weight: 500;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  li {
    flex-basis: calc((100% - 4 * 30px) / 5);
    transition: 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
    img {
      display: block;
      object-fit: cover;
    }
    &:hover {
      transform: scale(1.04);
    }
  }
`;
