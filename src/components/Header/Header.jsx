import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="flex gap-7 p-4 text-xl border-solid border-1 bg-teal-950 shadow-md shadow-black text-white">
      <NavLink to="/" className="text-lg font-bold hover:scale-110">
        Home
      </NavLink>
      <NavLink to="/movies" className="text-lg font-bold hover:scale-110">
        Movies
      </NavLink>
    </nav>
  );
}

export default Header;
