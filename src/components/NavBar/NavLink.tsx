import { Link } from 'react-router-dom';
import { LinkType } from './types';

interface NavLinkProps {
  link: LinkType
}

const NavLink = ({ link }: NavLinkProps) => {
  const { label, path } = link;

  return (
    <div className="navlink_item">
      <Link to={path}>{label}</Link>
    </div>
  );
}

export default NavLink;
