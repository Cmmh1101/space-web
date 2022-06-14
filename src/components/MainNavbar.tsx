import { NavLink } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <nav className='mainNavbar'>
      <div className='logo'>
        <img src='../../assets/shared/logo.svg' alt='logo' />
      </div>
      <div className='nav'>
        <NavLink to='/' className='nav-text'>
          Home
        </NavLink>

        <NavLink to='/destination' className='nav-text'>
          Destination
        </NavLink>

        <NavLink to='/crew' className='nav-text'>
          Crew
        </NavLink>
      </div>
    </nav>
  );
};
export default MainNavbar;
