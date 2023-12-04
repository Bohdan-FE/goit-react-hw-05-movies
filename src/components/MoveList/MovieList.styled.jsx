import styled from 'styled-components';

export const MovieListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  padding: 15px;
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
