interface NumberBoxProps {
  number: number;
  bgColor: 'inherit' | 'green';
}

//
//
//

const NumberBox: React.FC<NumberBoxProps> = ({ number, bgColor }) => {
  /**
   *
   */
  const getBgClassName = () => {
    switch (bgColor) {
      case 'green': {
        return 'bg-primary-color';
      }
      case 'inherit': {
        return 'bg-inherit';
      }
      default: {
        return 'bg-inherit';
      }
    }
  };

  const bgClassName = getBgClassName();

  //
  //
  //

  return (
    <span
      className={`border-solid border-[1px] border-black ${bgClassName} rounded-[0.75rem] px-[1rem] py-[0.375rem] font-gilroy font-medium text-[2rem] leading-none`}
    >
      {number}
    </span>
  );
};

export default NumberBox;
