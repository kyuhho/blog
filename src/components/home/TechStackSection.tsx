import TechStackFrontend from './tech-stack/TechStackFrontend';

const TechStackSection: React.FC = () => {
  return (
    <section id="tech-section">
      <h1 className="text-teal-50 font-bold text-5xl">Tech Stacks</h1>
      <TechStackFrontend />
    </section>
  );
};

export default TechStackSection;
