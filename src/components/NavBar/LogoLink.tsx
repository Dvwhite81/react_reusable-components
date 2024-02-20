import { Link } from 'react-router-dom';
import { LogoLinkType } from './types';

interface LogoLinkProps {
  logoLink: LogoLinkType
}

const LogoLink = ({ logoLink }: LogoLinkProps) => {
  const { imageSrc, path } = logoLink;

  return (
    <div className="logo-link_container">
      <Link to={path} className="logo-link_link">
        <img className="logo-link_img" src={imageSrc} alt="logo" />
      </Link>
    </div>
  );
}

export default LogoLink;
