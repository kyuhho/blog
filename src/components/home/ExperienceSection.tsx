import { experienceMockData } from '@/utils/mock';
import { ExperienceCardItem } from '@/utils/types';
import ExperienceCard from './experience/ExperienceCard';
import NumberBox from '../shared/NumberBox';
import TitleBox from '../shared/TitleBox';

const ExperienceSection: React.FC = () => {
  const ExperienceItems: ExperienceCardItem[] = experienceMockData;

  return (
    <section
      id="experience-section"
      className="mt-[5rem] flex flex-col gap-[2.25rem]"
    >
      <div className="flex gap-[0.625rem]">
        <NumberBox number={1} bgColor="green" />
        <TitleBox content="Experience" bgColor="inherit" />
      </div>
      <ul className="flex flex-col gap-[2.25rem]">
        {ExperienceItems.map((item) => (
          <ExperienceCard key={item.name} experienceItem={item} />
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
