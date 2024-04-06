import ProjectCard from './project/ProjectCard';
import sharmindImage from './images/sharemind.png';

const ProjectSection: React.FC = () => {
  return (
    <section id="project-section" className="w-full">
      <h1 className="text-teal-50 font-bold text-5xl mb-6">Projects</h1>
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <ProjectCard
          title="셰어마인드"
          imgUrl={sharmindImage}
          description="설명설명 어쩌구 살랴살랴"
        />
        <ProjectCard
          title="셰어마인드"
          imgUrl={sharmindImage}
          description="설명설명 어쩌구 살랴살랴"
        />
      </div>
    </section>
  );
};

export default ProjectSection;
