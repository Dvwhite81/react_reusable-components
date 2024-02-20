import { useState } from 'react';
import { LinkType } from './types';
import LinkList from './LinkList';
import BlackIcon from '../../assets/images/hamburger-icon-black.png';
import WhiteIcon from '../../assets/images/hamburger-icon-white.png';

interface DropdownProps {
  dropdownLinks: LinkType[]
}

const Dropdown = ({ dropdownLinks }: DropdownProps) => {
  const [visible, setVisible] = useState(false);
  const [iconSrc, setIconSrc] = useState(WhiteIcon);

  const toggleIcon = () => {
    if (iconSrc === BlackIcon) {
      setIconSrc(WhiteIcon);
    } else {
      setIconSrc(BlackIcon);
    }
  }

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  }

  return (
    <div id="nav_dropdown-container">
      <div
        id="nav_dropdown-icon"
        onClick={toggleVisible}
        onMouseEnter={toggleIcon}
        onMouseLeave={toggleIcon}
      />
      {visible && <LinkList side='dropdown' links={dropdownLinks} />}
    </div>
  );
}

export default Dropdown;
