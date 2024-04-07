import { techStackFrontendMockData } from '@/utils/mock';
import Image from 'next/image';

const TechStackFrontend: React.FC = () => {
  return (
    <div className="bg-card-bg rounded-2xl p-8">
      <div className="text-teal-50 font-medium text-4xl ">Frontend</div>
      <div className="w-full bg-teal-50 h-[0.125rem] mt-2 mb-8" />
      {/* align html, css, js */}
      <div className="flex gap-4">
        {techStackFrontendMockData.splice(0, 3).map((item) => (
          <div key={item.name} className="relative">
            <Image src={item.imgUrl} alt={item.name} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackFrontend;
