import { useEffect, useRef, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { GallerySlide } from "./components/GallerySlide";
// import { Header } from "./components/Header";
import { PeopleSlide } from "./components/PeopleSlide";

const App = () => {
  const [heroScale, setHeroScale] = useState<number>(1);
  const [heroBg, setHeroBg] = useState<string>("");
  const [isScrollBreak, setIsScrollBreak] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const breakStart = 400;
      const breakEnd = 1000;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      let scaleIncrease: number = 0;

      if (scrollY < breakStart) {
        scaleIncrease = scrollY / 1000;
        setIsScrollBreak(false);
        setHeroBg(`rgba(17,17,17, 0)`);
      } else {
        if (scrollY >= breakStart) {
          scaleIncrease =
            scrollY >= breakEnd
              ? (scrollY - (breakEnd - breakStart)) / 1000
              : breakStart / 1000;
          setIsScrollBreak(true);
          const opacity = Math.min(
            (scrollY - breakEnd) / ((heroHeight - breakEnd) * 0.75)
          );
          setHeroBg(`rgba(17,17,17,${opacity})`);
        }
      }

      const newScale = 1 + scaleIncrease;
      setHeroScale(newScale);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="scroll-smooth">
      {/* <Header /> */}
      <div ref={heroRef} className="relative h-[300vh] bg-light">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          {isScrollBreak && (
            <div className="absolute top-1/3 sm:top-1/4 lg:top-1/4 xl:top-32 w-full flex justify-center">
              <div className="text-[#3C3F3C]">
                <div className="flex items-center gap-3">
                  <p className="font-bold text-6xl xs2:text-7xl md:text-8xl xl:text-9xl">
                    Computer
                  </p>
                  <p className="-rotate-12 w-16 md:w-20 xl:w-28 aspect-square rounded-full text-light bg-[#FF372A] flex items-center justify-center text-2xl md:text-4xl font-semibold">
                    24
                  </p>
                </div>
                <p className="font-bold text-6xl xs2:text-7xl md:text-8xl xl:text-9xl ml-3">
                  Community
                </p>
              </div>
            </div>
          )}
          <div
            className="absolute bottom-0 w-full flex justify-center"
            style={{ transform: `scale(${heroScale})` }}
          >
            <img
              src="/hero.png"
              alt="UIB"
              className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5"
            />
          </div>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ backgroundColor: heroBg }}
        ></div>
      </div>
      <AboutSection />
      <PeopleSlide />
      <GallerySlide />
      <Footer />
    </main>
  );
};

export default App;
