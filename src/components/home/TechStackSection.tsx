import { techStackMockData } from '@/utils/mock';
import NumberBox from '../shared/NumberBox';
import TitleBox from '../shared/TitleBox';
import TechStackCard from './tech-stack/TechStackCard';

const TechStackSection: React.FC = () => {
  return (
    <section id="tech-section py-[12.5rem] flex flex-col gap-[2.25rem]">
      <div className="flex gap-[0.625rem]">
        <NumberBox number={2} bgColor="green" />
        <TitleBox content="Tech Stacks" bgColor="inherit" />
      </div>
      {techStackMockData.map((teckStackCardItem) => (
        <TechStackCard
          key={teckStackCardItem.type}
          type={teckStackCardItem.type}
          stacks={teckStackCardItem.stacks}
        />
      ))}
    </section>
  );
};

export default TechStackSection;
