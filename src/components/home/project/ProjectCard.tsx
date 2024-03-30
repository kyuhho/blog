import Image, { StaticImageData } from 'next/image';

interface ProjectCardProps {
  title: string;
  imgUrl: StaticImageData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imgUrl }) => {
  return (
    <div className="rounded-2xl bg-card-bg shadow-xl">
      <div className="relative h-96 ">
        <Image src={imgUrl} fill alt={title} style={{ objectFit: 'contain' }} />
      </div>
      <div className="text-teal-50">{title}</div>
    </div>
  );
};

export default ProjectCard;
