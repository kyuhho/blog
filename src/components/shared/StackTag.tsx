interface StackTagProps {
  name: string;
  isRole?: boolean;
}

const StackTag: React.FC<StackTagProps> = ({ name, isRole = false }) => {
  const textColor = isRole ? 'text-button-purple' : 'text-button-common';
  const bgColor = isRole ? 'bg-button-black-purple' : 'bg-button-black-common';

  return (
    <span className={`rounded-lg ${textColor} ${bgColor} p-2`}>{name}</span>
  );
};

export default StackTag;
