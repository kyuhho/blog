import Link from 'next/link';
import Logo from './Logo';
import GithubIcon from 'public/icons/github.svg';
import { GITHUB_URL } from '@/utils/constant';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center w-full">
      <nav className="flex justify-between w-full items-center py-[1.4rem] max-w-[70rem]">
        <Logo />
        <Link href={GITHUB_URL}>
          <GithubIcon className="hover:opacity-70 cursor-pointer" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
