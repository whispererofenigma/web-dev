import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black/30 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logo.svg" alt="Enigma Logo" width={120} height={25} />
            </Link>
            <p className="text-white/60 max-w-md">
              Crafting the future of the web with high-performance, scalable, and user-centric software solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-white/60 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="text-white/60 hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors"><Github /></a>
              <a href="#" className="text-white/60 hover:text-white transition-colors"><Linkedin /></a>
              <a href="#" className="text-white/60 hover:text-white transition-colors"><Twitter /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Enigma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;