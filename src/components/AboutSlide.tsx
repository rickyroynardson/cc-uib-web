import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const AboutSlide = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-95%"]);

  return (
    <div ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex items-center gap-6">
          <div className="flex-shrink-0 w-[400px] md:w-[380px] lg:w-[600px] xl:w-[780px] lg:ml-20 xl:ml-40 md:flex snap-center font-semibold text-2xl md:text-4xl lg:text-5xl xl:leading-snug text-light text-opacity-60">
            Computer Community or CC UIB– is where computer enthusiasts come
            together to learn and innovate. We aspire to be share knowledge and
            be a professional.
          </div>
          <div className="relative  flex-shrink-0 w-[400px] h-full md:flex md:w-[500px] lg:w-[600px] xl:w-[700px] snap-start">
            <img
              src="https://dummyimage.com/hd1080"
              alt="Dummy Image"
              className="w-full h-full object-cover content-center"
            />
          </div>
          <div className="relative flex-shrink-0 w-[400px] md:w-[500px] lg:w-[600px] snap-center rounded-2xl bg-[#273DFF] bg-opacity-30 p-6 space-y-4">
            <div>
              <p className="font-semibold text-3xl lg:text-4xl text-light text-opacity-60">
                HMPS
              </p>
              <p className="font-semibold text-3xl lg:text-4xl text-light">
                Visi
              </p>
            </div>
            <p className="text-light text-lg text-justify lg:text-xl  xl:text-2xl">
              Membangun HMPS SI menjadi sebuah organisasi yang mampu bekerja
              sama, mandiri, bertanggung jawab, kritis, serta menjadi wadah
              sebagai ikatan antar mahasiswa untuk mencapai keunggulan akademik
              dan non-akademik dalam era transformasi digital.
            </p>
          </div>
          <div className="relative flex-shrink-0 w-[400px] md:w-[500px] lg:w-[600px] snap-center rounded-2xl bg-[#273DFF] bg-opacity-60 p-6 space-y-4">
            <div>
              <p className="font-semibold text-3xl lg:text-4xl text-light text-opacity-60">
                HMPS
              </p>
              <p className="font-semibodl text-3xl lg:text-4xl text-light">
                Misi
              </p>
            </div>
            <p className="text-light text-lg text-justify lg:text-xl xl:text-2xl">
              Meningkatkan kolaborasi antar mahasiswa dalam kerja sama.
              Membentuk organisasi yang transparan dan bertanggung jawab dalam
              melaksanakan tugas dan kegiatan. Menginspirasi setiap anggota
              organisasi untuk memiliki jiwa mandiri yang kreatif dan berpikiran
              kritis.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
