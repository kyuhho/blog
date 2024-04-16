import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen justify-center mb-24">
      <div className=" flex flex-col items-center w-[70rem]">{children}</div>
    </main>
  );
};

export default MainLayout;
