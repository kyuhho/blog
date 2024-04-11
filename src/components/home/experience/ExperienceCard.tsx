import StackTag from '@/components/shared/StackTag';
import { ExperienceCardItem } from '@/utils/types';

import Image from 'next/image';

interface ExperienceCardProps {
  item: ExperienceCardItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => {
  return (
    <li className="flex flex-col gap-6 rounded-2xl bg-card-bg shadow-xl p-4">
      <div className="flex gap-4">
        <div className="aspect-video relative">
          <Image
            src={item.imgUrl}
            width={120}
            height={100}
            alt={item.name}
            style={{
              borderRadius: '1rem',
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-black font-bold text-2xl">{item.name}</div>
          <div className="text-black text-lg">{item.role}</div>
          <div className="text-black">{`${item.startDate} ~ ${item.endDate}`}</div>
        </div>
      </div>
      <div className="text-black">{item.description}</div>

      <div className="flex gap-2 flex-wrap">
        {item.stacks.map((item) => (
          <StackTag key={item} name={item} />
        ))}
        {item.tools.map((item) => (
          <StackTag key={item} name={item} color="blue" />
        ))}
      </div>
    </li>
  );
};

export default ExperienceCard;
