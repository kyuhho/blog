import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface AnimateButtonProps {
  link: string;
  text: string;
}

const AnimateButton: React.FC<AnimateButtonProps> = ({ link, text }) => {
  return (
    <Link href={link}>
      <button className="button">{text}</button>
    </Link>
  );
};

export default AnimateButton;
