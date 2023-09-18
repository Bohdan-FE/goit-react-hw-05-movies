import { NavLink } from 'react-router-dom';
import { HeaderStyled } from './Header.styled';

function Header() {
  return (
    <HeaderStyled>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </HeaderStyled>
  );
}

export default Header;
