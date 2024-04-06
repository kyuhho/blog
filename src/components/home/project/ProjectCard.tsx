import Image, { StaticImageData } from 'next/image';

interface ProjectCardProps {
  title: string;
  imgUrl: StaticImageData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imgUrl }) => {
  return (
    <div className="rounded-2xl bg-card-bg shadow-xl h-96 ">
      <div className="aspect-video relative">
        <Image
          src={imgUrl}
          fill
          alt={title}
          style={{
            borderTopLeftRadius: '1rem',
            borderTopRightRadius: '1rem',
            objectFit: 'contain',
          }}
        />
      </div>
      <div className="text-teal-50">{title}</div>
    </div>
  );
};

export default ProjectCard;
