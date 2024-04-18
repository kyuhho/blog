'use client';

import StackTag from '@/components/shared/StackTag';
import styled from '@emotion/styled';

import ArrowIcon from 'public/icons/teck-arrow.svg';

//
//
//

interface TechStackCardProps {
  type: string;
  stacks: string[];
}

//
//
//

const ARROW_ICON_CLASS_NAME = 'arrow-icon';

//
//
//

const CardWrapper = styled.div`
  &:hover .${ARROW_ICON_CLASS_NAME} {
    transform: rotate(45deg);
  }
`;

//
//
//

const TechStackCard: React.FC<TechStackCardProps> = ({ type, stacks }) => {
  return (
    <CardWrapper className="flex flex-col py-[2.75rem] gap-[1.5rem] pl-[1rem]">
      <div className="flex gap-[1rem] items-center">
        <ArrowIcon className={ARROW_ICON_CLASS_NAME} />
        <span className="font-gilroy font-bold text-[2rem] leading-none mt-[0.5rem]">
          {type}
        </span>
      </div>
      <div className="flex gap-[0.5rem]">
        {stacks.map((stackName) => (
          <StackTag key={stackName} name={stackName} />
        ))}
      </div>
    </CardWrapper>
  );
};

export default TechStackCard;
