import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Header } from "./components/Header";
import { PEOPLE } from "./constants/people";

import "swiper/css";

const App = () => {
  const [galleryActiveIndex, setGalleryActiveIndex] = useState(0);

  return (
    <main>
      <Header />
      <div className="h-[300vh] bg-red-100">
        section 1 under progress, just skip this section.. keep scrolling
      </div>
      <div className="h-screen bg-dark flex flex-col">
        <div className="container h-[60%] flex items-center justify-center">
          <div className="text-light">
            <div className="flex items-center gap-3">
              <p className="font-bold text-6xl">Computer</p>
              <p className="-rotate-12 w-16 aspect-square rounded-full bg-[#FF372A] flex items-center justify-center text-2xl font-semibold">
                24
              </p>
            </div>
            <p className="font-bold text-6xl ml-3">Community</p>
          </div>
        </div>
        <div className="grow container snap-y overflow-y-auto space-y-4">
          <div className="snap-start font-semibold text-2xl text-light text-opacity-60">
            Computer Community or CC UIB– is where computer enthusiasts come
            together to learn and innovate. We aspire to be share knowledge and
            be a professional.
          </div>
          <div className="snap-start">
            <img src="https://dummyimage.com/hd1080" alt="Dummy Image" />
          </div>
          <div className="snap-start rounded-2xl bg-[#273DFF] bg-opacity-30 p-6 space-y-4">
            <div>
              <p className="font-semibold text-3xl text-light text-opacity-60">
                HMPS
              </p>
              <p className="font-semibold text-3xl text-light">Visi</p>
            </div>
            <p className="text-light text-lg text-justify">
              Membangun HMPS SI menjadi sebuah organisasi yang mampu bekerja
              sama, mandiri, bertanggung jawab, kritis, serta menjadi wadah
              sebagai ikatan antar mahasiswa untuk mencapai keunggulan akademik
              dan non-akademik dalam era transformasi digital.
            </p>
          </div>
          <div className="snap-start rounded-2xl bg-[#273DFF] bg-opacity-60 p-6 space-y-4">
            <div>
              <p className="font-semibold text-3xl text-light text-opacity-60">
                HMPS
              </p>
              <p className="font-semibodl text-3xl text-light">Misi</p>
            </div>
            <p className="text-light text-lg text-justify">
              Meningkatkan kolaborasi antar mahasiswa dalam kerja sama.
              Membentuk organisasi yang transparan dan bertanggung jawab dalam
              melaksanakan tugas dan kegiatan. Menginspirasi setiap anggota
              organisasi untuk memiliki jiwa mandiri yang kreatif dan berpikiran
              kritis.
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen bg-dark text-light flex flex-col gap-8">
        <div className="container h-1/3 flex items-end justify-center relative">
          <p className="font-bold text-7xl text-center z-10">Folks behind CC</p>
          <p className="absolute right-16 bottom-12 -rotate-12 w-16 aspect-square rounded-full bg-[#FF372A] flex items-center justify-center text-2xl font-semibold">
            24
          </p>
        </div>
        <div className="grow space-y-4">
          <Swiper
            slidesPerView={1.38}
            spaceBetween={40}
            centeredSlides={true}
            loop={true}
            onSlideChange={(swiper) => setGalleryActiveIndex(swiper.realIndex)}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              scale: 0.9,
              slideShadows: false,
            }}
            modules={[Autoplay, EffectCoverflow]}
          >
            {PEOPLE.map((people, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`rounded-2xl overflow-hidden border-2 border-light w-72 aspect-square bg-red-50 text-dark ${
                    galleryActiveIndex !== index && "opacity-30"
                  }`}
                >
                  <img
                    src={people.image}
                    alt={people.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div>
            <div className="flex items-center justify-center gap-1 text-lg">
              <p className="font-bold">{PEOPLE[galleryActiveIndex].name}</p>
              <p className="text-[#AAAAAA]">
                {PEOPLE[galleryActiveIndex].role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
