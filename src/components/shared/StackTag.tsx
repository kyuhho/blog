interface StackTagProps {
  name: string;
}

const StackTag: React.FC<StackTagProps> = ({ name }) => {
  return <div>{name}</div>;
};

export default StackTag;
