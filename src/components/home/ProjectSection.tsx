import { projectMockData } from '@/utils/mock';
import ProjectCard from './project/ProjectCard';

const ProjectSection: React.FC = () => {
  return (
    <section id="project-section" className="w-full">
      <h1 className="text-teal-50 font-bold text-5xl mb-6">Projects</h1>
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        {projectMockData.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            imgUrl={item.imgUrl}
            description={item.description}
            stacks={item.stacks}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
