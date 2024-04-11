import PopButton from '../shared/PopButton';

//
//
//

const HeroSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="font-nanum-square-neo flex-col w-[50rem]">
        <h1 className="flex justify-center text-4xl font-bold text-black pb-10">
          <span>안녕하세요, 프론트엔드 개발자 &nbsp;</span>
          <span className="text-black">이규호</span>
          <span>입니다.</span>
        </h1>
        <div className="flex text-black text-2xl font-medium justify-start">
          더 나은 경험을 주고자하는 도전적인 프론트엔드 개발자입니다.
        </div>
        <div className="w-full flex justify-center p-16 gap-4">
          <PopButton link="#experience-section" text="Experiences" />
          <PopButton link="#tech-section" text="Tech Stacks" />
          <PopButton link="#project-section" text="Projects" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
