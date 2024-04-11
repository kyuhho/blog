import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div className="flex">
        <div className="text-4xl text-black font-bold">{'<'}</div>
        <div className="text-4xl text-black font-bold">{'Logo'}</div>
        <div className="text-4xl text-black font-bold">{'/>'}</div>
      </div>
    </Link>
  );
};

export default Logo;
