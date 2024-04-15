import { experienceMockData } from '@/utils/mock';
import { ExperienceCardItem } from '@/utils/types';
import ExperienceCard from './experience/ExperienceCard';
import NumberBox from '../shared/NumberBox';

const ExperienceSection: React.FC = () => {
  const ExperienceItems: ExperienceCardItem[] = experienceMockData;

  return (
    <section id="experience-section" className="w-full mt-[5rem]">
      <NumberBox number={1} bgColor="green" />
      <ul className="grid grid-cols-template-experiences grid-rows-1 gap-4">
        {ExperienceItems.map((item) => (
          <ExperienceCard key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
