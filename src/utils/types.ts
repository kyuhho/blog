import { StaticImageData } from 'next/image';

export interface ProjectCardItem {
  title: string;
  description: string;
  imgUrl: StaticImageData;
  roles: string[];
  stacks: string[];
  tools: string[];
}

export interface ExperienceCardItem {
  name: string;
  imgUrl: StaticImageData;
  description: string;
  role: string;
  startDate: string;
  endDate: string;
  stacks: string[];
  tools: string[];
}
