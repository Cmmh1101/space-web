import { Nav, NavItem, NavLink } from 'reactstrap';
// import { NavLink } from 'react-router-dom';

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
          <NavLink href={url} className='dot'></NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
export default DotNavbar;
