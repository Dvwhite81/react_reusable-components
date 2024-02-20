import LinkList from './LinkList';
import LogoLink from './LogoLink';
import { getLinkLists } from './helpers';
import { LinkType, LogoLinkType } from './types';
import './NavBar.css';
import Dropdown from './Dropdown';

interface NavBarProps {
  links: LinkType[]
  logoLink?: LogoLinkType
}

const NavBar = ({ links, logoLink }: NavBarProps) => {
  const { leftLinks, rightLinks, dropdownLinks } = getLinkLists(links);

  return (
    <nav id="navbar">
      <LinkList side='left' links={leftLinks} />
      {logoLink && <LogoLink logoLink={logoLink} />}
      <LinkList side='right' links={rightLinks} />
      <Dropdown dropdownLinks={dropdownLinks} />
    </nav>
  )
}

export default NavBar;
