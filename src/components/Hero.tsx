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
      {/* Parallax фото */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/b7dca7c3-1693-4d7c-8eec-c1a44385bb72.jpg"
          alt="Тропические цветы"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Затемнение */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(7,15,10,0.55) 0%, rgba(7,15,10,0.15) 40%, rgba(7,15,10,0.75) 100%)" }} />

      {/* Большая белая сетка — акцент справа */}
      <div
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none"
        style={{ opacity: 0.07 }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
              <path d="M 42 0 L 0 0 0 42" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Угловые акценты */}
      <div className="absolute top-6 right-6 w-16 h-16 pointer-events-none" style={{ opacity: 0.35 }}>
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 0 H0 V0" stroke="#C6FF00" strokeWidth="2" />
          <path d="M64 0 V64" stroke="#C6FF00" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute bottom-6 left-6 w-16 h-16 pointer-events-none" style={{ opacity: 0.35 }}>
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 64 H64" stroke="#FF2D78" strokeWidth="2" />
          <path d="M0 64 V0" stroke="#FF2D78" strokeWidth="2" />
        </svg>
      </div>

      {/* Вертикальная подпись слева */}
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4"
        style={{ opacity: 0.4 }}
      >
        <div className="w-px h-16" style={{ background: "linear-gradient(to bottom, transparent, #C6FF00)" }} />
        <p
          className="font-display font-bold text-[10px] uppercase tracking-[0.4em] whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", color: "#C6FF00" }}
        >
          Тропический гид
        </p>
        <div className="w-px h-16" style={{ background: "linear-gradient(to bottom, #C6FF00, transparent)" }} />
      </div>

      {/* Счётчик видов справа */}
      <div
        className="absolute right-6 bottom-24 hidden lg:flex flex-col items-center gap-2"
        style={{ opacity: 0.5 }}
      >
        <p className="font-display font-extrabold text-4xl leading-none" style={{ color: "#fff" }}>13</p>
        <p className="font-display font-bold text-[9px] uppercase tracking-[0.35em] text-center" style={{ color: "#C6FF00" }}>видов<br />в каталоге</p>
      </div>

      {/* Центральный контент */}
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

      {/* Скролл-подсказка снизу по центру */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.4 }}>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, transparent, white)" }} />
        <p className="font-display text-[9px] uppercase tracking-[0.4em]" style={{ color: "white" }}>Скролл</p>
      </div>
    </div>
  );
}
