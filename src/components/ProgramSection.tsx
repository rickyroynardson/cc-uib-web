import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProgramCardDescriptionProps {
  content: string;
}

const ProgramCardDescription: React.FC<ProgramCardDescriptionProps> = ({
  content,
}) => {
  const [text, setText] = useState(content);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    setText(isFull ? content : content.split(" ").slice(0, 60).join(" "));
  }, [content, isFull]);

  return (
    <div className="space-y-2">
      <p className="text-light text-sm xs2:text-base text-justify">
        {text}
        {content.split(" ").length > 60 && !isFull && " ..."}
      </p>
      {content.split(" ").length > 60 && (
        <div className="flex justify-end">
          <p
            className="w-fit text-sm text-light cursor-pointer"
            onClick={() => setIsFull(!isFull)}
          >
            {isFull ? "Read less" : "Read more"}
          </p>
        </div>
      )}
    </div>
  );
};

export const ProgramSection = () => {
  const cardStyle =
    "h-fit bg-gray-900 bg-opacity-70 rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 hover:scale-[103%] transition-transform duration-300";
  const cardTitleStyle = "text-lg font-bold text-light";

  return (
    <div className="w-full min-h-screen bg-grid-pattern bg-cover object-center">
      <div className="py-16 sm:py-20 md:py-28 space-y-14 sm:space-y-16 md:space-y-20">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="font-bold text-6xl xs2:text-7xl lg:text-8xl xl:text-9xl text-center text-light"
        >
          Programs
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className="px-4 xs3:px-8 sm:px-12 lg:px-36 xl:px-60 space-y-8 md:space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6"
        >
          <div className={`${cardStyle}`}>
            <h3 className={`${cardTitleStyle}`}>Basic Multimedia Class</h3>
            <ProgramCardDescription
              content="Pelatihan ini merupakan bentuk usaha untuk meningkatkan
              keterampilan individu dalam penggunaan alat dan teknik multimedia,
              mendorong kreativitas, meningkatkan produktivitas, mengembangkan
              pemahaman konsep multimedia, mempersiapkan untuk karir dalam
              bidang multimedia, dan menggunakan multimedia secara efektif untuk
              berbagai tujuan, dengan fokus pada pengalaman pengguna yang lebih
              baik serta perkembangan teknologi."
            />
          </div>
          <div className={`${cardStyle}`}>
            <h3 className={`${cardTitleStyle}`}>Basic Programming Class</h3>
            <ProgramCardDescription
              content="Pelatihan pemrograman Sitem informasi ini berfokus pada algoritma
              dan logika hal ini bertujuan untuk mengembangkan pemahaman
              mendalam tentang algoritma, meningkatkan kemampuan berpikir logis
              dan analitis, memperkuat kemampuan pemecahan masalah, meningkatkan
              efisiensi penulisan kode, memahami kompleksitas algoritma,
              mendukung persiapan untuk kompetisi pemrograman (jika relevan),
              mempersiapkan karir dalam pemrograman yang menekankan pemahaman
              algoritma, dan memberikan dasar teoritis yang kuat dalam
              pemrograman komputer. Dengan fokus ini, peserta akan memiliki
              keterampilan yang lebih kuat dalam merancang dan
              mengimplementasikan solusi pemrograman yang efektif."
            />
          </div>
          <div className={`${cardStyle}`}>
            <h3 className={`${cardTitleStyle}`}>Malam Keakraban</h3>
            <ProgramCardDescription content="Tujuan utama dari Makrab HMPS SI adalah mempererat hubungan antaranggota, membangun solidaritas, menyampaikan informasi, memberikan motivasi, memperluas jaringan, dan memberikan hiburan kepada anggota Himpunan Mahasiswa Program Studi Sistem Informasi." />
          </div>
          <div className={`${cardStyle}`}>
            <h3 className={`${cardTitleStyle}`}>Seminar/Webinar</h3>
            <ProgramCardDescription content="Seminar/webinar ini adalah untuk menyediakan platform untuk berbagi pengetahuan, memotivasi, dan mengedukasi anggota dan peserta mahasiswa prodi SI terkait dengan perkembangan, isu-isu, dan peluang dalam dunia teknologi informasi." />
          </div>
          <div className={`${cardStyle}`}>
            <h3 className={`${cardTitleStyle}`}>SI Internal Cup</h3>
            <ProgramCardDescription content="Memberikan kesempatan bagi mahasiswa untuk menunjukkan dan mengembangkan kemampuannya dalam bentuk lomba, serta memperluas jaringan relasi." />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
