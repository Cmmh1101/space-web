import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

interface Props {
  destination: string;
  url: string;
  customClass?: string;
}

const SecondaryNavbar = ({ destination, url }: Props) => {
  return (
    <div className='secondary-navbar'>
      <Nav pills className='nav'>
        <NavItem className='nav-item'>
          <NavLink to={url} className='subheading subheading-2'>
            {destination}
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
export default SecondaryNavbar;
