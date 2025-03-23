import { ReactNode, RefObject } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  overviewRef?: RefObject<HTMLDivElement>; // Acepta la referencia como prop opcional
}

const Layout = ({ children, overviewRef }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header overviewRef={overviewRef} /> 
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;