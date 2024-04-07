import { projectMockData } from '@/utils/mock';
import ProjectCard from './project/ProjectCard';

const ProjectSection: React.FC = () => {
  return (
    <section id="project-section" className="w-full">
      <h1 className="text-teal-50 font-bold text-5xl mb-6">Projects</h1>
      <ul className="grid grid-cols-2 grid-rows-1 gap-4">
        {projectMockData.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            imgUrl={item.imgUrl}
            description={item.description}
            roles={item.roles}
            stacks={item.stacks}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
