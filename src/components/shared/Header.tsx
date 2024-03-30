import Link from 'next/link';
import Logo from './Logo';
import GithubIcon from 'public/icons/github.svg';
import { GITHUB_URL } from '@/utils/constant';

const Header: React.FC = () => {
  return (
    <header className="px-96 flex items-center justify-between w-full border-b-2 h-20">
      <Logo />
      <nav>
        <Link href={GITHUB_URL}>
          <GithubIcon className="hover:opacity-70 cursor-pointer" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
