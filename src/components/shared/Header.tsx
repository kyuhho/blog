import Logo from './Logo';
import GithubIcon from 'public/icons/github.svg';

const Header: React.FC = () => {
  return (
    <header>
      <nav
        className="flex items-center justify-between w-full border-b-2 h-20"
        style={{ paddingLeft: '10rem', paddingRight: '10rem' }}
      >
        <Logo />
        <GithubIcon currentColor="white" />
      </nav>
    </header>
  );
};

export default Header;
