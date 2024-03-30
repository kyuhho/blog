import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div className="flex">
        <div className="text-4xl text-teal-400 font-bold">{'<'}</div>
        <div className="text-4xl text-gray-300 font-bold">{'295'}</div>
        <div className="text-4xl text-teal-400 font-bold">{'/>'}</div>
      </div>
    </Link>
  );
};

export default Logo;
