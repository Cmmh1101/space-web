import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavLink,
  NavItem,
} from 'reactstrap';

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand='md' className='navbar mt-md-0 ' dark>
      <NavbarBrand href='/' className='nav-brand'>
        <img src='../../assets/shared/logo.svg' alt='logo' />
      </NavbarBrand>
      <hr className='line d-sm-none d-lg-block ' />
      <NavbarToggler onClick={toggle} className='nav-toggler'>
        <img src='../../assets/shared/icon-hamburger.svg' alt='toggler' />
      </NavbarToggler>
      <Collapse navbar isOpen={isOpen} className='collapse justify-content-end'>
        <Nav className='nav' navbar>
          <NavItem>
            <NavLink href='/' className='nav-text d-flex'>
              <span className='d-md-none d-lg-block '>00</span> HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href='../views/destination.tsx '
              className='nav-text d-flex'
            >
              <span className='d-md-none d-lg-block '>01</span> DESTINATION
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='../views/crew.tsx' className='nav-text d-flex'>
              <span className='d-md-none d-lg-block '>02</span> CREW
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='../views/technology.tsx' className='nav-text d-flex'>
              <span className='d-md-none d-lg-block '>03</span> TECHNOLOGY
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default MainNavbar;
