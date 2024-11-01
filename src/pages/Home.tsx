import React from 'react';
import Hero from '../components/Hero';
import FeaturedItems from '../components/FeaturedItems';
import VirtualRunway from '../components/VirtualRunway';
import DesignerSpotlight from '../components/DesignerSpotlight';
import CreateSection from '../components/CreateSection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedItems />
      <VirtualRunway />
      <DesignerSpotlight />
      <CreateSection />
      <footer className="bg-black/50 backdrop-blur-lg py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 MetaFashion. Step into the future of style.</p>
        </div>
      </footer>
    </>
  );
}