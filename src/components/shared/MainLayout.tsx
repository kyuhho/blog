import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center">{children}</main>
  );
};

export default MainLayout;
