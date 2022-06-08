import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

interface Props {
  destination: string;
  url: string;
  customClass?: string;
}

const SecondaryNavbar = ({ destination, url, customClass }: Props) => {
  return (
    <div className='secondary-navbar'>
      <Nav pills className='nav'>
        <NavItem className='nav-item'>
          <NavLink to={url} className='subheading subheading-2 {customClass}'>
            {destination}
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
export default SecondaryNavbar;
