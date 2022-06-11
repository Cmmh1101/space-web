import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    // setNavbarIsOpen(!navbarIsOpen);
  };

  return (
    <Navbar expand='md' className='navbar w-screen mx-auto bg-dark'>
      <NavbarBrand href='/' className='nav-brand'>
        <img src='../../assets/shared/logo.svg' alt='logo' />
      </NavbarBrand>
      <div className='line d-none d-lg-block'></div>
      <NavbarToggler onClick={toggle} className='navbar-toggler'>
        {isOpen ? (
          <img src='../../assets/shared/icon-close.svg' />
        ) : (
          <img src='../../assets/shared/icon-hamburger.svg' />
        )}
      </NavbarToggler>
      <Collapse
        navbar
        isOpen={isOpen}
        // navbarIsOpen={navbarIsOpen}
        className='collapse  '
      >
        <Nav className='nav justify-content-md-end ' navbar>
          <NavItem className='nav-item '>
            <NavLink to='/' className='nav-text d-flex'>
              <span className='d-md-none d-lg-block '>00</span> HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/destination' className='nav-text d-flex'>
              <span className='d-md-none d-lg-block '>01</span> DESTINATION
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/crew' className='nav-text d-flex'>
              <span className='d-md-none d-lg-block '>02</span> CREW
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/technology' className='nav-text d-flex'>
              <span className='d-md-none d-lg-block '>03</span> TECHNOLOGY
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default MainNavbar;
