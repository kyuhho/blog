interface StackTagProps {
  name: string;
  color?: 'common' | 'purple' | 'blue';
}

const StackTag: React.FC<StackTagProps> = ({ name, color = 'common' }) => {
  /**
   *
   */
  const getTextColor = () => {
    switch (color) {
      case 'common':
        return 'text-button-common';
      case 'purple':
        return 'text-button-purple';
      case 'blue':
        return 'text-button-blue';
    }
  };

  /**
   *
   */
  const getBgColor = () => {
    switch (color) {
      case 'common':
        return 'bg-button-black-common';
      case 'purple':
        return 'bg-button-black-purple';
      case 'blue':
        return 'bg-button-black-blue';
    }
  };

  const textColor = getTextColor();
  const bgColor = getBgColor();

  //
  //
  //

  return (
    <span className={`rounded-lg ${textColor} ${bgColor} p-2`}>{name}</span>
  );
};

export default StackTag;
