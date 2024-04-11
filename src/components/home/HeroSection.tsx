import LinkButton from '../shared/AnimateButton';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faSheetPlastic } from '@fortawesome/free-solid-svg-icons';
const HeroSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="flex-col w-[50rem]">
        <h1 className="flex justify-center text-4xl font-bold text-black pb-10">
          <span>안녕하세요, 프론트엔드 개발자 &nbsp;</span>
          <span className="text-black">이규호</span>
          <span>입니다.</span>
        </h1>
        <div className="flex text-black text-2xl font-medium justify-start">
          안녕하세요 소개소개 이러쿵저러쿵
        </div>
        <div className="flex text-black text-2xl font-medium justify-end">
          새로운 스택이 어쩌구 저쩌구 옴냠냠
        </div>
        <div className="w-full flex justify-center p-16 gap-4">
          <LinkButton link="#experience-section" text="Experiences" />
          <LinkButton link="#tech-section" text="Tech Stacks" />
          <LinkButton link="#project-section" text="Projects" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
