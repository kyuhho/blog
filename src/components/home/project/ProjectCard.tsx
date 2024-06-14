import StackTag from '@/components/shared/StackTag';
import { ProjectCardItem } from '@/utils/types';
import Image from 'next/image';

interface ProjectCardProps {
  item: ProjectCardItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  return (
    <li className="rounded-2xl bg-card-bg shadow-xl">
      <div className="aspect-video relative">
        <Image
          src={item.imgUrl}
          fill
          alt={item.title}
          style={{
            borderTopLeftRadius: '1rem',
            borderTopRightRadius: '1rem',
            objectFit: 'contain',
          }}
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="text-black font-bold text-2xl">{item.title}</div>
        <div className="text-black">{item.description}</div>
        <div className="mt-6 flex gap-2 flex-wrap">
          {item.roles.map((item) => (
            <StackTag key={item} name={item} />
          ))}
          {item.stacks.map((item) => (
            <StackTag key={item} name={item} />
          ))}
          {item.tools.map((item) => (
            <StackTag key={item} name={item} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
