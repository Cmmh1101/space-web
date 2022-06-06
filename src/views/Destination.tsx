import { Navbar, Nav, NavLink, NavItem } from 'reactstrap';

const Destination = () => {
  return (
    <Navbar>
      <Nav className='me-auto' navbar>
        <NavItem>
          <NavLink href='/components/'>Components</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
export default Destination;
