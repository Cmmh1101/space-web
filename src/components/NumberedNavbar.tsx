import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

interface Props {
  url: string;
  number: number;
}

const NumberedNavbar = ({ url, number }: Props) => {
  return (
    <div className='num-navbar'>
      <Nav pills className='nav'>
        <NavItem className='nav-item'>
          <NavLink to={url} className='heading'>
            {number}
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
export default NumberedNavbar;
