import { getLinkLists } from './helpers';
import { LinkType, LogoLinkType } from './types';
import Dropdown from './Dropdown';
import LogoLink from './LogoLink';
import LinkList from './LinkList';

interface NavBarProps {
  links: LinkType[];
  logoLink?: LogoLinkType;
}

/* Links are an array of:
  {
    label: 'Profile',
    path: '/profile',
    side: 'left',
    element: <Profile />,
  }
*/

/* LogoLink:
  const logoLink = {
      label: 'Home',
      path: '/',
      element: <Home />,
      imageSrc: Logo,
  }
*/

const NavBar = ({ links, logoLink }: NavBarProps) => {
  const { leftLinks, rightLinks, dropdownLinks } = getLinkLists(links);

  return (
    <nav id="navbar">
      <LinkList side="left" links={leftLinks} />
      {logoLink && <LogoLink logoLink={logoLink} />}
      <LinkList side="right" links={rightLinks} />
      <Dropdown dropdownLinks={dropdownLinks} />
    </nav>
  );
};

export default NavBar;
