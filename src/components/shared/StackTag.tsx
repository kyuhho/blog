interface StackTagProps {
  name: string;
}

const StackTag: React.FC<StackTagProps> = ({ name }) => {
  return (
    <span className="rounded-lg text-button-common bg-button-black-common p-2">
      {name}
    </span>
  );
};

export default StackTag;
