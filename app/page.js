'use client';

import Aurora from './_components/Aurora';
import MagicBento from './_components/MagicBento';
import PillNav from './_components/PillNav';
import ShinyText from './_components/ShinyText';
import Carousel from './_components/Carousel';
import HorizontalScroll from './_components/HorizontalScroll';

import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';




const items = [
  { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
  { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
  { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
  { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
];

export default function Home() {
  return (
    <section>
      <Aurora colorStops={["#3A29FF", "#5f37ff", "#a457f8"]} blend={0.5} amplitude={1} speed={0.5}/>
      <div className="px-6">
        <nav className="flex flex-row items-center w-full h-16">
          <div className="w-2/3 flex justify-end">
            <PillNav
              logo="/logo.png"
              logoAlt="Company Logo"
              items={[
                { label: "Home", href: "#" },
                { label: "About", href: "#" },
                { label: "Projects", href: "#" },
                { label: "Contact", href: "#" },
              ]}
              activeHref="/"
              className="custom-nav"
              ease="power2.easeOut"
              baseColor="#000000"
              pillColor="rgba(255,255,255,0.2)"
              hoveredPillTextColor="#ffffff"
              pillTextColor="#ffffff"
            />
          </div>
          <div className="w-1/3 flex justify-end">
            <ShinyText 
              text='Press "/" for terminal navigation'
              disabled={false}
              speed={3}
              className="text-lg font-bold whitespace-nowrap"
            />
          </div>
        </nav>

        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
        <div style={{ height: '600px', position: 'relative' }}>
          <Carousel
            baseWidth={300}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
          <HorizontalScroll />
        <footer>
          Hello poopt
        </footer>
      </div>
    </section>
  );
}
