const stories = [
  {
    label: "История открытия",
    tag: "1818 · Суматра",
    title: "Как нашли самый вонючий цветок Земли",
    text: "В 1818 году британский натуралист Джозеф Арнольд шёл сквозь суматранские джунгли вместе с местным проводником. Вдруг проводник замер и жестом показал под ноги. На земле лежало нечто огромное, красно-бурое, похожее на мясо — и воняло именно так. Арнольд решил, что нашёл падаль. Но это оказался цветок. Раффлезия арнольди — названная в честь него — стала сенсацией эпохи. Арнольд написал письмо коллегам, но умер от лихорадки раньше, чем оно дошло.",
    accent: "#FF6B00",
    number: "01",
  },
  {
    label: "История открытия",
    tag: "1858 · Борнео",
    title: "Аморфофаллус: цветок, которого ждут 10 лет",
    text: "Итальянский ботаник Одоардо Беккари нашёл его на Борнео случайно — шёл записывать птиц, а наткнулся на трёхметровое соцветие, которое источало жар и запах тухлятины. Местные племена знали об этом растении веками и называли его «трупным деревом». Беккари отправил семена в Европу — и когда в 1889 году растение впервые зацвело в Королевском ботаническом саду Кью, туда пришли тысячи людей. Газеты вышли с заголовком: «Невозможно стоять рядом дольше минуты».",
    accent: "#C6FF00",
    number: "02",
  },
  {
    label: "Факт о тропиках",
    tag: "Наука",
    title: "Почему тропические цветы такие безумно яркие",
    text: "В тропиках солнечного света избыток — но и конкурентов у каждого цветка тысячи. Чтобы перекричать джунгли визуально, растения эволюционировали в сторону предельной яркости, контраста и размера. Плюс — опылители здесь другие: не скромные пчёлы умеренного климата, а колибри, летучие мыши и огромные тропические бабочки. Их привлекает только максимально интенсивный сигнал. Именно поэтому стрелиция синяя там, где «достаточно» было бы жёлтой.",
    accent: "#00E5FF",
    number: "03",
  },
  {
    label: "История открытия",
    tag: "1789 · Таити",
    title: "Бугенвиллея: цветок, открытый вместо золота",
    text: "Луи Антуан де Бугенвиль отправился в кругосветку в 1766 году искать новые территории для Франции. На Таити он взял на борт ботаника Филибера Коммерсона — и его помощницу Жанну Баре, которая путешествовала под видом мужчины, потому что женщинам на королевских кораблях было запрещено. Именно Жанна первой увидела ползущий куст с пурпурными прицветниками и описала его. Растение назвали в честь командира, но открыла его женщина — первая, обогнувшая Землю.",
    accent: "#FF2D78",
    number: "04",
  },
];

export default function Stories() {
  return (
    <div className="py-24 px-6" style={{ background: "#070f0a" }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="font-display text-xs uppercase tracking-[0.5em] mb-4 text-center font-semibold"
          style={{ color: "#C6FF00" }}
        >
          Истории
        </p>
        <h2
          className="font-display font-extrabold text-4xl lg:text-6xl text-center mb-4 leading-none"
          style={{ background: "linear-gradient(90deg, #fff 50%, #FF2D78)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          Открытия, которые<br />изменили ботанику
        </h2>
        <p className="text-center mb-20 font-sans font-light" style={{ color: "rgba(255,255,255,0.4)" }}>
          Настоящие истории учёных, авантюристов и случайных свидетелей
        </p>

        <div className="flex flex-col gap-0">
          {stories.map((story, i) => (
            <div
              key={story.number}
              className="group grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 py-12 border-t transition-all duration-300"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3 lg:pt-1">
                <span
                  className="font-display font-extrabold text-5xl lg:text-7xl leading-none opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ color: story.accent }}
                >
                  {story.number}
                </span>
                <span
                  className="font-display font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap"
                  style={{ background: story.accent, color: "#070f0a" }}
                >
                  {story.tag}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-sans text-xs uppercase tracking-widest font-light" style={{ color: story.accent }}>
                  {story.label}
                </p>
                <h3
                  className="font-display font-extrabold text-2xl lg:text-3xl leading-tight"
                  style={{ color: "#fff" }}
                >
                  {story.title}
                </h3>
                <p
                  className="font-sans font-light text-base leading-relaxed max-w-2xl"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {story.text}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }} />
        </div>
      </div>
    </div>
  );
}
