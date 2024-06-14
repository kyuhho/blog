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
const STACK_TAGS_CLASS_NAME = 'stacks-tag';

//
//
//

const CardWrapper = styled.div`
  &:hover .${ARROW_ICON_CLASS_NAME} {
    transform: rotate(45deg);
    transition: transform 0.25s ease-in-out;
  }

  .${STACK_TAGS_CLASS_NAME} {
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    max-height: 0;
    overflow: hidden;
  }

  &:hover .${STACK_TAGS_CLASS_NAME} {
    opacity: 1;
    max-height: 100%;
    padding-top: 1.5rem;
  }
`;

//
//
//

const TechStackCard: React.FC<TechStackCardProps> = ({ type, stacks }) => {
  return (
    <CardWrapper className="flex flex-col py-[2.75rem] pl-[1rem]">
      <div className="flex gap-[1rem] items-center">
        <ArrowIcon className={ARROW_ICON_CLASS_NAME} />
        <span className="font-gilroy font-bold text-[2rem] leading-none mt-[0.5rem]">
          {type}
        </span>
      </div>
      <div className={`flex gap-[0.5rem] ${STACK_TAGS_CLASS_NAME}`}>
        {stacks.map((stackName) => (
          <StackTag key={stackName} name={stackName} />
        ))}
      </div>
    </CardWrapper>
  );
};

export default TechStackCard;
