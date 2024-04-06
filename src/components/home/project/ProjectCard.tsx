import StackTag from '@/components/shared/StackTag';
import Image, { StaticImageData } from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: StaticImageData;
  stacks: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgUrl,
  description,
  stacks,
}) => {
  return (
    <div className="rounded-2xl bg-card-bg shadow-xl">
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
      <div className="text-teal-50">{description}</div>
      {stacks.map((item) => (
        <StackTag key={item} name={item} />
      ))}
    </div>
  );
};

export default ProjectCard;
