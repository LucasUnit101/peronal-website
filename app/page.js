import MagicBento from './_components/MagicBento';
import Carousel from './_components/Carousel';

export default function Home() {
  return (
    <section>
      <div className="flex flex-row">
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
        <div style={{ height: '60px', position: 'relative' }}>
          <Carousel
            baseWidth={300}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>
    </section>
  );
}
