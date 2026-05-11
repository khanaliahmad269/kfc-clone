import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedItems from '../components/FeaturedItems';

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedItems items={[]} />
    </div>
  );
}

export default Home;