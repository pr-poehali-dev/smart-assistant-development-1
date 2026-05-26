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
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/b7dca7c3-1693-4d7c-8eec-c1a44385bb72.jpg"
          alt="Тропические цветы"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(7,15,10,0.55) 0%, rgba(7,15,10,0.15) 40%, rgba(7,15,10,0.75) 100%)" }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p
          className="font-display text-xs uppercase tracking-[0.5em] mb-5 font-semibold"
          style={{ color: "#C6FF00" }}
        >
          Ботанический гид
        </p>
        <h1
          className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl leading-none mb-6"
          style={{ background: "linear-gradient(135deg, #C6FF00 0%, #00E5FF 50%, #FF2D78 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          TROPICA
        </h1>
        <p className="font-sans font-light text-lg md:text-xl max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
          Яркие, дерзкие, живые — исследуй мир тропических цветов со всего света
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <a
            href="#varieties"
            className="font-display font-bold text-sm uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(90deg, #C6FF00, #00E5FF)", color: "#070f0a" }}
          >
            Смотреть цветы
          </a>
        </div>
      </div>
    </div>
  );
}
