import MagicBento from './_components/MagicBento';
import Carousel from './_components/Carousel';
import Circle from './_components/Circle';
import RotatingText from './_components/RotatingText';

export default function Home() {
  return (
    <section>
      <div className="flex flex-col px-12">
        <div className="flex flex-row w-full py-12">
          <div className="flex w-1/3 justify-end">
            <Circle height="325px" width="325px" outlineGlow="#5f37ff" imgUrl="/headshot.jpg"/>
          </div>
          <div className="flex flex-col w-2/3 justify-center px-12 items-start text-7xl font-bold">
            <span>Hi my name is Lucas</span>
            <span>I'm a 
              <RotatingText
                texts={['Student!', 'Software Engineer!', 'Frontend Engineer!', 'Backend Engineer!', 'Full-Stack Engineer!', 'Web Developer!', 'Developer!']}
                mainClassName="px-2 sm:px-2 md:px-3 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg leading-[1.2]"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </span>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex w-1/3 justify-center">
            tech skills
          </div>
          <div className="flex w-2/3 justify-center">
            somethin else idk
          </div>
        </div>
        <div>
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
        </div>
      </div>
    </section>
  );
}
