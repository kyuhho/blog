import { projectMockData } from '@/utils/mock';
import ProjectCard from './project/ProjectCard';
import { ProjectCardItem } from '@/utils/types';

const ProjectSection: React.FC = () => {
  const ProjectCardItems: ProjectCardItem[] = projectMockData;

  return (
    <section id="project-section" className="w-full">
      <h1 className="text-teal-50 font-bold text-5xl mb-6">Projects</h1>
      <ul className="grid grid-cols-2 grid-rows-1 gap-4">
        {ProjectCardItems.map((item) => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
