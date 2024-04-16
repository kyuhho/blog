interface TitleBoxProps {
  content: string;
  bgColor: 'inherit' | 'green';
}

//
//
//

const TitleBox: React.FC<TitleBoxProps> = ({ content, bgColor }) => {
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
      className={`border-solid border-[1px] border-black ${bgClassName} rounded-[0.75rem] px-[1.5rem] py-[0.28rem] font-gilroy font-extrabold text-[2.25rem] leading-none`}
    >
      {content}
    </span>
  );
};

export default TitleBox;
