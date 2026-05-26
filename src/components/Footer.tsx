export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div
            className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #050d07 0%, #070f0a 60%, #0a0a1a 100%)" }}
          >
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3
                  className="mb-1 sm:mb-2 font-display font-bold uppercase text-xs sm:text-sm tracking-widest"
                  style={{ color: "#C6FF00" }}
                >
                  Цветы
                </h3>
                <a href="#varieties" className="font-sans text-sm sm:text-base transition-colors duration-300" style={{ color: "rgba(255,255,255,0.55)" }} onMouseEnter={e => (e.currentTarget.style.color = "#C6FF00")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>Стрелиция</a>
                <a href="#varieties" className="font-sans text-sm sm:text-base transition-colors duration-300" style={{ color: "rgba(255,255,255,0.55)" }} onMouseEnter={e => (e.currentTarget.style.color = "#FF2D78")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>Гибискус</a>
                <a href="#varieties" className="font-sans text-sm sm:text-base transition-colors duration-300" style={{ color: "rgba(255,255,255,0.55)" }} onMouseEnter={e => (e.currentTarget.style.color = "#FF6B00")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>Геликония</a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3
                  className="mb-1 sm:mb-2 font-display font-bold uppercase text-xs sm:text-sm tracking-widest"
                  style={{ color: "#00E5FF" }}
                >
                  Узнать больше
                </h3>
                <a href="#varieties" className="font-sans text-sm sm:text-base transition-colors duration-300" style={{ color: "rgba(255,255,255,0.55)" }} onMouseEnter={e => (e.currentTarget.style.color = "#00E5FF")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>Как ухаживать</a>
                <a href="#varieties" className="font-sans text-sm sm:text-base transition-colors duration-300" style={{ color: "rgba(255,255,255,0.55)" }} onMouseEnter={e => (e.currentTarget.style.color = "#00E5FF")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>Интересные факты</a>
                <a href="#varieties" className="font-sans text-sm sm:text-base transition-colors duration-300" style={{ color: "rgba(255,255,255,0.55)" }} onMouseEnter={e => (e.currentTarget.style.color = "#00E5FF")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>Где растут</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1
                className="font-display font-extrabold text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.85] mt-4 sm:mt-6 lg:mt-10"
                style={{ background: "linear-gradient(90deg, #C6FF00, #00E5FF, #FF2D78)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                TROPICA
              </h1>
              <p className="font-sans text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.3)" }}>
                {new Date().getFullYear()} Tropica
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
