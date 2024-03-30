import ExperienceSection from '@/components/home/ExperienceSection';
import HeroSection from '@/components/home/HeroSection';
import ProjectSection from '@/components/home/ProjectSection';
import TechStackSection from '@/components/home/TechStackSection';
import MainLayout from '@/components/shared/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectSection />
    </MainLayout>
  );
}
