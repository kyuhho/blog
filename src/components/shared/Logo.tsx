import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image width={100} height={35} src={'/icons/logo.png'} alt="logo" />
    </Link>
  );
};

export default Logo;
