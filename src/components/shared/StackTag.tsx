interface StackTagProps {
  name: string;
}

const StackTag: React.FC<StackTagProps> = ({ name }) => {
  return (
    <span
      className={`font-gilroy font-light text-[1.125rem] rounded-[2rem] border-solid border-black border-[0.0625rem] py-[0.375rem] px-[1.25rem]`}
    >
      {name}
    </span>
  );
};

export default StackTag;
