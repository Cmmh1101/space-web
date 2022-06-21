import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

interface Props {
  url: string;
  customClass?: string;
  content?: string;
}

const DotNavbar = ({ url, customClass, content }: Props) => {
  return (
    <div className='dot-navbar'>
      <Nav pills className='nav'>
        <NavItem className='nav-item'>
          <NavLink
            to={url}
            className={({ isActive }) =>
              isActive ? 'dot-nav active' : 'dot-nav'
            }
          >
            {content}
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
export default DotNavbar;
