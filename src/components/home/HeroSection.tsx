import PopButton from '../shared/PopButton';

//
//
//

const HeroSection: React.FC = () => {
  return (
    <section className="py-[15rem]">
      <div className="flex flex-col items-center gap-[2.25rem]">
        <h1 className="font-gill-sans flex flex-col items-center text-5xl font-bold text-black px-[3.375rem]">
          <span>안녕하세요,</span>
          <span>프론트엔드 이규호입니다.</span>
        </h1>
        <div className="flex flex-col items-center font-nanum-square-neo  text-black text-2xl font-regular">
          <span>더 나은 경험을 주고자하는</span>
          <span>도전적인 프론트엔드 개발자입니다.</span>
        </div>
        <div className="w-full grid grid-cols-[repeat(3,1fr)] gap-[1rem]">
          <PopButton link="#experience-section" text="Experiences" />
          <PopButton link="#tech-section" text="Tech Stacks" />
          <PopButton link="#project-section" text="Projects" />
        </div>
        <div className="flex flex-col items-center gap-[0.75rem]">
          <div className="font-gilroy font-extrabold text-[1.25rem] mt-[6rem]">
            {"Let's Scroll :)"}
          </div>
          <div className="w-[2px] h-[12.5rem] bg-black" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
