import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

interface Props {
  url: string;
}

const DotNavbar = ({ url }: Props) => {
  return (
    <div className='dot-navbar'>
      <Nav pills className='nav'>
        <NavItem className='nav-item'>
          <NavLink to={url} className='dot'></NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
export default DotNavbar;
