import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/fa6eba0b-d03b-4030-987c-86e37eb3a887.jpg"
            alt="Розы в саду"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <h3 className="absolute top-12 right-6 uppercase z-10 text-sm md:text-base lg:text-lg font-sans font-light tracking-[0.3em]" style={{color: '#A8E6CF'}}>
        Язык цветов
      </h3>

      <p className="absolute bottom-12 right-6 text-white font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10 italic leading-tight">
        Розы говорят без слов. Красная — страсть, белая — чистота, жёлтая — дружба.
        Выбери свою розу и передай то, что сложно выразить словами.
      </p>
    </div>
  );
}