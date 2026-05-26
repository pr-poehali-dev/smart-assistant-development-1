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
            src="https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/171322b9-c402-427c-b839-183b7cf5ad28.jpg"
            alt="Тропический сад"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,15,10,0.6) 0%, rgba(198,255,0,0.1) 100%)" }} />
      </div>

      <p
        className="absolute top-12 left-6 font-display font-bold uppercase z-10 text-xs tracking-[0.5em]"
        style={{ color: "#C6FF00" }}
      >
        Факт дня
      </p>

      <p
        className="absolute bottom-12 left-6 right-6 font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl z-10 leading-tight"
        style={{ background: "linear-gradient(90deg, #fff 50%, #C6FF00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
      >
        На Земле более 400&thinsp;000 видов цветковых растений. Большинство живёт в тропиках.
      </p>
    </div>
  );
}
