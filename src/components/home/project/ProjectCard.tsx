import StackTag from '@/components/shared/StackTag';
import Image, { StaticImageData } from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: StaticImageData;
  roles: string[];
  stacks: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgUrl,
  description,
  roles,
  stacks,
}) => {
  return (
    <li className="rounded-2xl bg-card-bg shadow-xl">
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
      <div className="flex flex-col gap-4 p-4">
        <div className="text-teal-50 font-bold text-2xl">{title}</div>
        <div className="text-teal-50">{description}</div>
        <div className="mt-6 flex gap-2">
          {stacks.map((item) => (
            <StackTag key={item} name={item} />
          ))}
          {roles.map((item) => (
            <StackTag key={item} name={item} isRole={true} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
