import NavLink from './NavLink';
import { LinkType } from './types';

interface LinkListProps {
  side: string
  links: LinkType[]
}

const LinkList = ({ side, links }: LinkListProps) => {
  return (
    <ul className={`navlist ${side}-navlist`}>
      {links.map((link) => <NavLink key={link.label} link={link} />)}
    </ul>
  );
}

export default LinkList;
