interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div
          className="font-display font-extrabold text-xl tracking-tight"
          style={{ background: "linear-gradient(90deg, #C6FF00, #00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          TROPICA
        </div>
        <nav className="flex gap-8">
          <a
            href="#varieties"
            className="font-display font-semibold text-sm uppercase tracking-widest transition-colors duration-300"
            style={{ color: "#C6FF00" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00E5FF")}
            onMouseLeave={e => (e.currentTarget.style.color = "#C6FF00")}
          >
            Цветы
          </a>
          <a
            href="#contact"
            className="font-display font-semibold text-sm uppercase tracking-widest transition-colors duration-300"
            style={{ color: "#C6FF00" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00E5FF")}
            onMouseLeave={e => (e.currentTarget.style.color = "#C6FF00")}
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}
