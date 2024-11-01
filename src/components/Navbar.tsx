import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              MetaFashion
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/#marketplace">Marketplace</NavLink>
            <NavLink to="/#runway">Virtual Runway</NavLink>
            <NavLink to="/#designers">Meet Designers</NavLink>
            <NavLink to="/#create">Create</NavLink>
            <Link 
              to="/connect" 
              className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-full transition-all"
            >
              Connect Wallet
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/#marketplace">Marketplace</MobileNavLink>
            <MobileNavLink to="/#runway">Virtual Runway</MobileNavLink>
            <MobileNavLink to="/#designers">Meet Designers</MobileNavLink>
            <MobileNavLink to="/#create">Create</MobileNavLink>
            <Link
              to="/connect"
              className="block w-full text-left px-4 py-2 text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all"
            >
              Connect Wallet
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2 text-gray-300 hover:bg-purple-500/10 rounded-lg transition-all"
    >
      {children}
    </Link>
  );
}