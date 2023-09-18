import styled from 'styled-components';

export const ActorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  gap: 30px;
  li {
    flex-basis: calc((100% - 5 * 30px) / 6);
  }
`;
