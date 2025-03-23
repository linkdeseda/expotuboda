import Layout from '../layout/Layout';
import Hero from '../home/Hero';
import Overview from '../home/Overview';
import DressGallery from '../home/DressGallery';
import Program from '../home/Program';
import Registration from '../home/Registration';
import Patrocinadores from '../home/Patrocinadores';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Overview />
      <DressGallery />
      <Program />
      <Registration />
      <Patrocinadores/>
    </Layout>
  );
};

export default HomePage;
