const roses = [
  {
    name: "Чайно-гибридные",
    description:
      "Самые популярные садовые розы с крупными, высококонусными бутонами и богатым ароматом. Цветут повторно на протяжении всего сезона. Идеальны для срезки и украшения сада.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/1befce3a-841f-44c2-893f-20702fc4c65d.jpg",
    color: "Красные, розовые, жёлтые, белые",
    accent: "#FF6B6B",
  },
  {
    name: "Плетистые розы",
    description:
      "Мощные лианы высотой до 6 метров, создающие живописные арки и перголы. Весной покрываются водопадом цветков. Незаменимы для вертикального озеленения.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/fa6eba0b-d03b-4030-987c-86e37eb3a887.jpg",
    color: "Нежно-розовые, белые, персиковые",
    accent: "#2EC4C4",
  },
  {
    name: "Английские розы",
    description:
      "Выведены Дэвидом Остином. Сочетают очарование старинных роз с современной выносливостью. Пышные чашевидные соцветия с изысканным ароматом.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/679fcddf-473b-4b2c-9368-847ebdea919f.jpg",
    color: "Кремовые, розовые, абрикосовые",
    accent: "#FFAA80",
  },
];

export default function Featured() {
  return (
    <div id="varieties" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #ffffff 0%, #fff0eb 50%, #f0fafa 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <h3
          className="uppercase mb-4 text-sm tracking-[0.3em] text-center font-sans font-light"
          style={{ color: "#2EC4C4" }}
        >
          Виды роз
        </h3>
        <h2
          className="font-display text-3xl lg:text-5xl font-bold text-center mb-16 leading-tight"
          style={{ color: "#2a1a1a" }}
        >
          Каждая роза — своя история
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {roses.map((rose) => (
            <div key={rose.name} className="flex flex-col group">
              <div className="h-72 overflow-hidden mb-6 rounded-2xl shadow-lg">
                <img
                  src={rose.img}
                  alt={rose.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span
                className="text-xs uppercase tracking-widest mb-2 font-sans font-light"
                style={{ color: rose.accent }}
              >
                {rose.color}
              </span>
              <h3
                className="font-display text-xl font-bold mb-3"
                style={{ color: "#2a1a1a" }}
              >
                {rose.name}
              </h3>
              <p className="leading-relaxed text-sm font-sans" style={{ color: "#6b4f4f" }}>
                {rose.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}