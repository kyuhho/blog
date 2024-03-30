import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

interface LinkButtonProps {
  link: string;
  text: string;
  type?: 'common' | 'purple';
  isBlack?: boolean;
  icon?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  link,
  text,
  type = 'common',
  isBlack = false,
  icon,
}) => {
  // const
  if (!isBlack) {
    const colorProps =
      type === 'common' ? 'bg-button-common' : 'bg-button-purple';
    const blackColorProps =
      type === 'common'
        ? 'text-button-black-common'
        : 'text-button-black-purple';

    return (
      <Link href={link}>
        <div
          className={`flex items-center justify-center ${colorProps} text-${blackColorProps} font-medium rounded-[1rem] w-[10rem] h-[3rem]`}
        >
          {text}
        </div>
      </Link>
    );
  } else {
    const colorProps =
      type === 'common' ? 'bg-button-black-common' : 'bg-button-black-purple';
    const blackColorProps =
      type === 'common' ? 'text-button-common' : 'text-button-purple';

    return (
      <Link href={link}>
        <div
          className={`flex items-center justify-center ${blackColorProps} ${colorProps} font-medium rounded-[1rem] w-[10rem] h-[3rem]`}
        >
          {text}
        </div>
      </Link>
    );
  }
};

export default LinkButton;
