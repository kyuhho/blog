import { experienceMockData } from '@/utils/mock';
import { ExperienceCardItem } from '@/utils/types';
import ExperienceCard from './experience/ExperienceCard';
import NumberBox from '../shared/NumberBox';
import TitleBox from '../shared/TitleBox';

const ExperienceSection: React.FC = () => {
  const ExperienceItems: ExperienceCardItem[] = experienceMockData;

  return (
    <section id="experience-section" className="w-full mt-[5rem]">
      <div className="flex gap-[0.625rem]">
        <NumberBox number={1} bgColor="green" />
        <TitleBox content="Experience" bgColor="inherit" />
      </div>
      <ul className="flex flex-col">
        {ExperienceItems.map((item) => (
          <ExperienceCard key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
