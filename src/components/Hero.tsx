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
          src="https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/1befce3a-841f-44c2-893f-20702fc4c65d.jpg"
          alt="Красные розы в полном цвету"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          МИР РОЗ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Откройте для себя удивительное разнообразие роз — от классических чайно-гибридных до изысканных плетистых сортов
        </p>
      </div>
    </div>
  );
}