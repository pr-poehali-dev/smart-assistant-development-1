const flowers = [
  {
    name: "Стрелиция",
    subtitle: "Птица рая",
    description: "Самый узнаваемый тропик-цветок планеты. Оранжево-синие лепестки похожи на экзотическую птицу в полёте. Символ свободы и солнца.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/0fa8895c-cf07-4980-9911-538d5be15b0b.jpg",
    accent: "#00E5FF",
    tag: "Южная Африка",
  },
  {
    name: "Гибискус",
    subtitle: "Цветок солнца",
    description: "Национальный цветок Малайзии и Гавайев. Живёт всего один день — но горит ярче всех. Чай из лепестков пьют от жары по всему миру.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/57f59a08-2b46-48c6-a8fe-20d8c70cf556.jpg",
    accent: "#FF2D78",
    tag: "Тропическая Азия",
  },
  {
    name: "Геликония",
    subtitle: "Омаровый коготь",
    description: "Огненные прицветники похожи на морских созданий. Стоит срезанной до 2 недель без воды. Любимица флористов и тропических садов.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/360de619-332c-4a99-8228-e037cf9b595f.jpg",
    accent: "#FF6B00",
    tag: "Центральная Америка",
  },
  {
    name: "Антуриум",
    subtitle: "Лакированное сердце",
    description: "Глянцевый, почти пластиковый на вид — но настоящий. Один из самых долгоцветущих тропических растений: до 3 месяцев без остановки.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/6c1edde0-cd88-49bd-b1dc-5298bb5476ea.jpg",
    accent: "#FF2D78",
    tag: "Южная Америка",
  },
  {
    name: "Плюмерия",
    subtitle: "Аромат Гавайев",
    description: "Из этих цветков плетут гавайские гирлянды-леи. Запах — смесь жасмина, персика и ванили. Один из самых вкусно пахнущих цветков на планете.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/287a9ab4-fd25-4568-9b7c-871b9d3f77c3.jpg",
    accent: "#FFD600",
    tag: "Центральная Америка",
  },
  {
    name: "Пассифлора",
    subtitle: "Пришелец из джунглей",
    description: "Настолько геометрически точная, что кажется нарисованной. 500+ видов, и каждый выглядит как CGI. Плоды — маракуйя — едят по всему миру.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/dc74886c-fc5c-408f-be84-c9fedc29b712.jpg",
    accent: "#BF00FF",
    tag: "Южная Америка",
  },
  {
    name: "Раффлезия",
    subtitle: "Самый большой цветок",
    description: "Диаметр до 1 метра, вес до 11 кг — рекорд для цветков. Не имеет стеблей и листьев, живёт как паразит. Пахнет гнилым мясом, чтобы привлекать мух.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/9aee2f08-227c-4bf1-8299-5cd635dbee90.jpg",
    accent: "#FF6B00",
    tag: "Борнео, Суматра",
  },
  {
    name: "Лотос",
    subtitle: "Священный цветок",
    description: "Растёт в грязи, но всплывает безупречно чистым — отсюда символ чистоты во всех восточных религиях. Семена живут 1000+ лет и всё равно прорастают.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/53822e2c-1c1f-49a6-9954-5022bd954317.jpg",
    accent: "#FF2D78",
    tag: "Азия, Австралия",
  },
  {
    name: "Орхидея",
    subtitle: "Королева джунглей",
    description: "30 000 видов — больше, чем у птиц и млекопитающих вместе. Некоторые пахнут шоколадом, другие имитируют насекомых для опыления. Живёт до 100 лет.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/720bb2af-d99b-4ded-bc5a-9ddeae112d6b.jpg",
    accent: "#BF00FF",
    tag: "Тропики всего мира",
  },
  {
    name: "Имбирный факел",
    subtitle: "Живой огонь",
    description: "Etlingera elatior — соцветие похоже на пламя факела. В Малайзии его едят в салатах и карри. Один из самых фотогеничных цветков Юго-Восточной Азии.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/0a0d986e-9d4c-4a50-91d5-0674117b261b.jpg",
    accent: "#FF6B00",
    tag: "Малайзия, Индонезия",
  },
  {
    name: "Бругмансия",
    subtitle: "Труба ангела",
    description: "Огромные цветки-граммофоны свисают вниз и источают одурманивающий аромат к ночи. Всё растение ядовито. Использовалась шаманами в ритуалах.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/9b8facb6-f470-477a-82d6-16a7b64258cf.jpg",
    accent: "#FFD600",
    tag: "Южная Америка",
  },
  {
    name: "Аморфофаллус",
    subtitle: "Трупный цветок",
    description: "Самое крупное соцветие на Земле — до 3 метров. Цветёт раз в 10 лет и всего 48 часов. В ботанических садах к нему выстраиваются очереди.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/44e112b9-cc1a-4dcf-82fc-610e8166f9f4.jpg",
    accent: "#C6FF00",
    tag: "Суматра",
  },
  {
    name: "Бугенвиллея",
    subtitle: "Взрыв цвета",
    description: "Яркие «лепестки» — это листья-прицветники, а не цветки. Настоящие цветки крошечные и белые внутри. Покрывает стены и заборы по всем тропикам мира.",
    img: "https://cdn.poehali.dev/projects/e729de26-2bec-4653-b5f1-ab1b221d505a/files/819151cf-e5e2-46cb-809d-f1af4af82141.jpg",
    accent: "#FF2D78",
    tag: "Южная Америка",
  },
];

export default function Featured() {
  return (
    <div id="varieties" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #070f0a 0%, #0a1a0f 60%, #070f0a 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="font-display text-xs uppercase tracking-[0.5em] mb-4 text-center font-semibold"
          style={{ color: "#C6FF00" }}
        >
          Виды
        </p>
        <h2
          className="font-display font-extrabold text-4xl lg:text-6xl text-center mb-4 leading-none"
          style={{ background: "linear-gradient(90deg, #fff 60%, #C6FF00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          Цветы, которые<br />взрывают мозг
        </h2>
        <p className="text-center mb-16 font-sans font-light" style={{ color: "rgba(255,255,255,0.45)" }}>
          13 самых iconic цветков тропиков — факты, фото, атмосфера
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flowers.map((flower) => (
            <div
              key={flower.name}
              className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              style={{ borderColor: "rgba(255,255,255,0.07)", background: "#0d1a10" }}
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={flower.img}
                  alt={flower.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0d1a10 0%, transparent 50%)" }} />
                <span
                  className="absolute top-4 left-4 font-display font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: flower.accent, color: "#070f0a" }}
                >
                  {flower.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1">
                <p className="font-sans text-xs font-light uppercase tracking-widest" style={{ color: flower.accent }}>
                  {flower.subtitle}
                </p>
                <h3 className="font-display font-extrabold text-2xl" style={{ color: "#fff" }}>
                  {flower.name}
                </h3>
                <p className="font-sans font-light text-sm leading-relaxed mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {flower.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
