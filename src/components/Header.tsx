import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex bor w-full border-b-2 border-l-sky-600 h-20">
      <nav>
        <div className="flex relative">
          <Image
            src={'/icons/github.svg'}
            width={20}
            height={20}
            alt="githubImage"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
