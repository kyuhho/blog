import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen justify-center">
      <div className=" flex flex-col items-center">{children}</div>
    </main>
  );
};

export default MainLayout;
