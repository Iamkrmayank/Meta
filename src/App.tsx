import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sparkles, ShoppingBag, Palette, Calendar, Crown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedItems from './components/FeaturedItems';
import DesignerSpotlight from './components/DesignerSpotlight';
import VirtualRunway from './components/VirtualRunway';
import CreateSection from './components/CreateSection';
import ConnectWallet from './components/ConnectWallet';

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedItems />
      <VirtualRunway />
      <DesignerSpotlight />
      <CreateSection />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connect" element={<ConnectWallet />} />
      </Routes>
      <footer className="bg-black/50 backdrop-blur-lg py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 MetaFashion. Step into the future of style.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;