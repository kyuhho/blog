import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <span className="font-gilroy text-4xl text-black font-bold">{'LOG'}</span>
      <span className="font-gilroy text-4xl text-black font-bold">{'O'}</span>
    </Link>
  );
};

export default Logo;
