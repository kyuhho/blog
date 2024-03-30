import HeroSection from '@/components/home/HeroSection';
import TechSection from '@/components/home/TechSection';
import MainLayout from '@/components/shared/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <TechSection />
    </MainLayout>
  );
}
