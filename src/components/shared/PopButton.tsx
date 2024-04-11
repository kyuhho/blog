import Link from 'next/link';

interface PopButtonProps {
  link: string;
  text: string;
}

const PopButton: React.FC<PopButtonProps> = ({ link, text }) => {
  return (
    <Link href={link}>
      <button className="pop-button">{text}</button>
    </Link>
  );
};

export default PopButton;
