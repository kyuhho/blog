import StackTag from '@/components/shared/StackTag';
import { ExperienceCardItem } from '@/utils/types';

import PlusIcon from 'public/icons/plus.svg';
import Image from 'next/image';

//
//
//

interface ExperienceCardProps {
  experienceItem: ExperienceCardItem;
}

//
//
//

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experienceItem }) => {
  const renderExperienceImage = () => {
    switch (experienceItem.name) {
      case 'Elice':
        return (
          <Image
            fill
            src={experienceItem.imgUrl}
            alt={experienceItem.name}
            className="rounded-[1.25rem]"
            style={{ objectFit: 'contain' }}
          />
        );
      case 'CEOS':
        return (
          <Image
            fill
            src={experienceItem.imgUrl}
            alt={experienceItem.name}
            className="rounded-[1.25rem]"
            style={{ objectFit: 'cover' }}
          />
        );
      default:
        return null;
    }
  };

  //
  //
  //

  return (
    <li className="flex justify-between">
      <div className="flex flex-col gap-[1.875rem] py-[1.25rem]">
        <div className="font-gilroy flex flex-col gap-[0.125rem] leading-[1.2]">
          <div className="text-black text-[2rem] font-bold">
            {experienceItem.name}
          </div>
          <div className="text-black text-[1.125rem] font-medium">
            {experienceItem.role}
          </div>
          <div className="text-black text-[1.125rem] font-medium">{`${experienceItem.startDate} ~ ${experienceItem.endDate}`}</div>
        </div>
        <div className="text-black font-nanum-square-neo font-normal">
          {experienceItem.description}
        </div>

        <div className="flex gap-[0.75rem] flex-wrap items-center">
          <PlusIcon />
          {experienceItem.stacks.map((item) => (
            <StackTag key={item} name={item} />
          ))}
          {experienceItem.tools.map((item) => (
            <StackTag key={item} name={item} />
          ))}
        </div>
      </div>
      <div className="relative h-full w-[16.1875rem]">
        {renderExperienceImage()}
      </div>
    </li>
  );
};

export default ExperienceCard;
