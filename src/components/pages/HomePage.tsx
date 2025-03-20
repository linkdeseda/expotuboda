import Layout from '../layout/Layout';
import Hero from '../home/Hero';
import Overview from '../home/Overview';
import DressGallery from '../home/DressGallery';
import Program from '../home/Program';
import Registration from '../home/Registration';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Overview />
      <DressGallery />
      <Program />
      <Registration />
    </Layout>
  );
};

export default HomePage;
