import { techStackMockData } from '@/utils/mock';
import NumberBox from '../shared/NumberBox';
import TitleBox from '../shared/TitleBox';
import TechStackCard from './tech-stack/TechStackCard';
import Divider from '../shared/Divider';

const TechStackSection: React.FC = () => {
  return (
    <section id="tech-section py-[12.5rem]">
      <div className="flex gap-[0.625rem]">
        <NumberBox number={2} bgColor="green" />
        <TitleBox content="Tech Stacks" bgColor="inherit" />
      </div>
      <div className="mt-[2.25rem]">
        {techStackMockData.map((teckStackCardItem) => (
          <>
            <Divider />
            <TechStackCard
              key={teckStackCardItem.type}
              type={teckStackCardItem.type}
              stacks={teckStackCardItem.stacks}
            />
          </>
        ))}
        <Divider />
      </div>
    </section>
  );
};

export default TechStackSection;
