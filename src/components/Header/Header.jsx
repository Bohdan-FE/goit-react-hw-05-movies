import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
}

export default Header;
