import Link from 'next/link';

interface PopButtonProps {
  link: string;
  text: string;
}

const PopButton: React.FC<PopButtonProps> = ({ link, text }) => {
  return (
    <Link href={link}>
      <button className="font-gilroy font-extrabold text-[1.75rem] w-full h-[3.75rem] text-black cursor-pointer border-solid border-[1px] border-black rounded-[1.25rem] bg-white transition duration-[2000] hover:text-black hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:bg-primary-color hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none">
        {text}
      </button>
    </Link>
  );
};

export default PopButton;
