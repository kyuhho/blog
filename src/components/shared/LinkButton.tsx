import {
  buttonBlackCommon,
  buttonBlackPurple,
  buttonCommon,
  buttonPurple,
} from '@/utils/colors';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import colors from 'tailwindcss/colors';

interface LinkButtonProps {
  link: string;
  text: string;
  type?: 'common' | 'purple';
  isBlack?: boolean;
  icon?: IconDefinition;
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
    const lightColor =
      type === 'common' ? 'bg-button-common' : 'bg-button-purple';
    const darkColor =
      type === 'common'
        ? 'text-button-black-common'
        : 'text-button-black-purple';
    const IconColor = type === 'common' ? buttonBlackCommon : buttonBlackPurple;

    return (
      <Link href={link}>
        <div
          className={`flex items-center justify-center ${lightColor} text-${darkColor} font-medium rounded-[1rem] w-[10rem] h-[3rem] gap-2`}
        >
          {icon ? (
            <FontAwesomeIcon
              icon={icon}
              color={IconColor}
              style={{ width: '1rem' }}
            />
          ) : null}
          {text}
        </div>
      </Link>
    );
  } else {
    const lightColor =
      type === 'common' ? 'bg-button-black-common' : 'bg-button-black-purple';
    const darkColor =
      type === 'common' ? 'text-button-common' : 'text-button-purple';
    const IconColor = type === 'common' ? buttonCommon : buttonPurple;

    return (
      <Link href={link}>
        <div
          className={`flex items-center justify-center ${darkColor} ${lightColor} font-medium rounded-[1rem] w-[10rem] h-[3rem] gap-2`}
        >
          {icon ? (
            <FontAwesomeIcon
              icon={icon}
              color={IconColor}
              style={{ width: '1rem' }}
            />
          ) : null}
          {text}
        </div>
      </Link>
    );
  }
};

export default LinkButton;
