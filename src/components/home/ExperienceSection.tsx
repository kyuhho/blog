import { experienceMockData } from '@/utils/mock';
import { ExperienceCardItem } from '@/utils/types';
import ExperienceCard from './experience/ExperienceCard';

const ExperienceSection: React.FC = () => {
  const ExperienceItems: ExperienceCardItem[] = experienceMockData;

  return (
    <section id="experience-section" className="w-full">
      <h1 className="text-black font-bold text-5xl mb-6">Experience</h1>
      <ul className="grid grid-cols-template-experiences grid-rows-1 gap-4">
        {ExperienceItems.map((item) => (
          <ExperienceCard key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
