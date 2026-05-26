import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/171322b9-c402-427c-b839-183b7cf5ad28.jpg"
          alt="Яркие тропические розы"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B]/40 via-[#2EC4C4]/20 to-black/50" />

      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#A8E6CF] font-sans font-light">Ботанический гид</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          Мир Роз
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-sans font-light leading-relaxed">
          Откройте для себя удивительное разнообразие роз — от классических чайно-гибридных до изысканных плетистых сортов
        </p>
      </div>
    </div>
  );
}