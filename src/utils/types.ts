import { StaticImageData } from 'next/image';

export interface ProjectCardItem {
  title: string;
  description: string;
  imgUrl: StaticImageData;
  roles: string[];
  stacks: string[];
  tools: string[];
}
