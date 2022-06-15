import { Nav, NavItem, NavLink } from 'reactstrap';

interface Props {
  url: string;

}

const DotNavbar = ({ url}: Props) => {
  return (
    <div className='dot-navbar'>
      <Nav pills className='nav'>
        <NavItem className='nav-item'>
          <NavLink href={url} ></NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default DotNavbar;
