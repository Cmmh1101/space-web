import { Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

interface Props {
  url: string;
  number: number;
}

const NumberedNavbar = ({ url, number }: Props) => {
  return (
    <div className='num-navbar'>
      <Nav pills className='nav'>
        <NavLink to={url} className='nav-item'>
          {number}
        </NavLink>
      </Nav>
    </div>
  );
};
export default NumberedNavbar;
