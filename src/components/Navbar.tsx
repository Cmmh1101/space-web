import { useState } from 'react'
import {Navbar,NavbarBrand, NavbarToggler, Collapse, Nav, NavLink, NavItem} from 'reactstrap'
import '../styles/_navbar.scss' 

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
 
  return (
    <Navbar
    expand="md"
    className='navbar me-auto '
  >
    <NavbarBrand href="/">
      <img src='../../assets/images/starLogo.svg' alt="logo" />
    </NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse navbar isOpen={isOpen} className="collapse">
      <Nav
        className="mx-auto nav"
        navbar
      >
        <NavItem>
        <NavLink href="/" className='nav-text subheading'>
            <span className='fw-bold'>00</span> HOME
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="../views/destination.tsx " className='nav-text subheading'>
            <span className='fw-bolder'>01</span> DESTINATION
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="../views/crew.tsx" className='nav-text subheading'>
            <span className='fw-bolder'>02</span> CREW
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="../views/technology.tsx" className='nav-text subheading'>
            <span className='fw-bolder'>03</span> TECHNOLOGY
          </NavLink>
        </NavItem>
       
      </Nav>
     
    </Collapse>
  </Navbar>
  )
}
export default MainNavbar