import { projectMockData } from '@/utils/mock';
import ProjectCard from './project/ProjectCard';
import { ProjectCardItem } from '@/utils/types';
import NumberBox from '../shared/NumberBox';
import TitleBox from '../shared/TitleBox';

const ProjectSection: React.FC = () => {
  const ProjectCardItems: ProjectCardItem[] = projectMockData;

  return (
    <section id="project-section" className="w-full py-[12.5rem]">
      <div className="flex gap-[0.625rem]">
        <NumberBox number={3} bgColor="green" />
        <TitleBox content="Projects" bgColor="inherit" />
      </div>

      <ul className="grid grid-cols-template-projects grid-rows-1 gap-4">
        {ProjectCardItems.map((item) => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
