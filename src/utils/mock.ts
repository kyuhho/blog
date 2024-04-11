/** projects image */
import sharemindImage from 'public/images/projects/sharemind.png';
/** experiences image */
import ceosImage from 'public/images/experiences/ceos.png';
import eliceImage from 'public/images/experiences/elice.png';
/** projects image */
import htmlImage from 'public/images/tech-stacks/html.png';
import cssImage from 'public/images/tech-stacks/css.png';
import javascriptImage from 'public/images/tech-stacks/javascript.png';
import reactImage from 'public/images/tech-stacks/react.png';
import nextImage from 'public/images/tech-stacks/nextjs.png';

export const projectMockData = [
  {
    title: '셰어마인드',
    description: '설명설명 어쩌구 살랴살랴',
    imgUrl: sharemindImage,
    roles: ['Frontend'],
    stacks: ['React', 'Styled-Components', 'Axios', 'Recoil', 'StompJs'],
    tools: ['Slack', 'Figma'],
  },
  {
    title: '셰어마인드',
    description: '설명설명 어쩌구 살랴살랴',
    imgUrl: sharemindImage,
    roles: ['Frontend'],
    stacks: ['React', 'Styled-Components', 'Axios', 'StompJs'],
    tools: ['Slack', 'Figma'],
  },
];

export const experienceMockData = [
  {
    name: '엘리스',
    imgUrl: eliceImage,
    description: '엘리스에서 랜딩도하고 lxp도 하고 어쩌구 저쩌구',
    role: 'Frontend Developer',
    startDate: '2024.03',
    endDate: 'Now',
    stacks: ['React', 'Nextjs', 'React-query', 'Material-UI'],
    tools: ['Jira', 'Teams'],
  },
  {
    name: 'CEOS',
    imgUrl: ceosImage,
    description: 'CEOS 하면서 이것도 하고 저것도 하고 어쩌구 저쩌구',
    role: 'Frontend Developer',
    startDate: '2023.09',
    endDate: '2024.02',
    stacks: ['React', 'Nextjs', 'Recoil', 'Styled-Components'],
    tools: ['Slack'],
  },
];

export const techStackFrontendMockData = [
  {
    name: 'html',
    imgUrl: '/images/tech-stacks/html.png',
  },
  { name: 'css', imgUrl: '/images/tech-stacks/css.png' },
  { name: 'javascript', imgUrl: '/images/tech-stacks/javascript.png' },
  { name: 'react', imgUrl: '/images/tech-stacks/react.png' },
  { name: 'nextjs', imgUrl: '/images/tech-stacks/nextjs.png' },
];
