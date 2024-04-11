import { techStackFrontendMockData } from '@/utils/mock';
import Image from 'next/image';

const TechStackFrontend: React.FC = () => {
  const firstRowImages = techStackFrontendMockData.splice(0, 3);
  const fullWidthImages = techStackFrontendMockData.splice(3);

  //
  //
  //

  return (
    <div className="bg-card-bg rounded-2xl p-8">
      <div className="text-teal-50 font-medium text-4xl ">Frontend</div>
      <div className="w-full bg-teal-50 h-[0.125rem] mt-2 mb-8" />

      {/* align html, css, js */}
      <div className="flex gap-4">
        {firstRowImages.map((item) => (
          <div key={item.name}>
            <Image src={item.imgUrl} alt={item.name} width={100} height={100} />
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        {fullWidthImages.map((item) => (
          <div key={item.name}>
            <Image src={item.imgUrl} alt={item.name} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackFrontend;
