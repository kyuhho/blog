'use client';
import Lottie from 'react-lottie-player';
import backgroundLottie from 'public/lotties/backgroundLottie.json';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20">
      <Lottie
        loop
        animationData={backgroundLottie}
        play
        style={{ position: 'absolute', top: 0, width: '100vw', zIndex: -1 }}
      />
      <div className="flex-col w-[50rem]">
        <h1 className="flex justify-center text-4xl font-bold text-teal-50 pb-10">
          <span>안녕하세요, 프론트엔드 개발자 &nbsp;</span>
          <span className="text-teal-300">이규호</span>
          <span>입니다.</span>
        </h1>
        <div className="flex text-teal-50 text-2xl font-medium justify-start">
          안녕하세요 소개소개 이러쿵저러쿵
        </div>
        <div className="flex text-teal-50 text-2xl font-medium justify-end">
          랄랄라 움냠냠 동당당
        </div>
        <div className="w-full flex justify-center p-16 gap-4">
          <button className="bg-teal-500 rounded-[1rem] w-[10rem] h-[3rem]">
            Projects
          </button>
          <button className="bg-teal-500 rounded-[1rem] w-[10rem] h-[3rem]">
            Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
