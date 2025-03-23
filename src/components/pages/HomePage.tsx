import Layout from '../layout/Layout';
import Hero from '../home/Hero';
import Overview from '../home/Overview';
import DressGallery from '../home/DressGallery';
import Program from '../home/Program';
import Registration from '../home/Registration';
import Patrocinadores from '../home/Patrocinadores';
import { useRef } from 'react';

const HomePage = () => {
  const overviewRef = useRef(null); 
  const patrocinadoresRef = useRef(null); 
  return (
    <Layout overviewRef={overviewRef}>
      <Hero />
      <div ref={overviewRef}> 
        <Overview />
      </div>
      <DressGallery />
      <Program />
      <Registration />
      <Patrocinadores/>
    </Layout>
  );
};

export default HomePage;