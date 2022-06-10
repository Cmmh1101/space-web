import { Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

interface Props {
  url: string;
}

const DotNavbar = ({ url }: Props) => {
  return (
    <div className='dot-navbar'>
      <Nav pills className='nav'>
        <NavLink to={url} className='nav-item'></NavLink>
      </Nav>
    </div>
  );
};
export default DotNavbar;
