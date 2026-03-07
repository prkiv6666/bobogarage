import { useState } from 'react';

export default function App() {
  const whatsappNumber = '359898795827';
  const [sliderPosition, setSliderPosition] = useState(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: 'Интериорен детайлинг',
      description: 'Дълбоко почистване на целия интериор – седалки, пластмаси, таван, багажник и труднодостъпни места.'
    },
    {
      title: 'Екстериорен детайлинг',
      description: 'Детайлно измиване на автомобила, джанти, арки и защита за по-дълготраен блясък.'
    },
    {
      title: 'Пране на седалки',
      description: 'Професионално изпиране на текстилни седалки и мокети за премахване на петна и миризми.'
    },
    {
      title: 'Полиране на фарове',
      description: 'Възстановяване на прозрачността на фаровете за по-добра визия и видимост.'
    },
    {
      title: 'Корекция на лаково покритие',
      description: 'Премахване на драскотини и дефекти по боята чрез многостъпков процес на полиране.'
    },
    {
      title: 'Цялостно полиране',
      description: 'Пълно машинно полиране на автомобила за максимален гланц и дълбочина на цвета.'
    },
    {
      title: 'Нанокерамични покрития и силанти',
      description: 'Дълготрайна защита на боята срещу вода, мръсотия и външни влияния.'
    },
    {
      title: 'Стандартно външно и вътрешно почистване',
      description: 'Комбинирано почистване на интериора и екстериора за свеж и поддържан автомобил.'
    },
    {
      title: 'Детайлно измиване на двигател',
      description: 'Безопасно почистване на двигателния отсек за по-добра визия и поддръжка.'
    }
  ];

  const advantages = [
    'Премиум визия и отношение към всеки детайл',
    'Професионални препарати и техника',
    'Индивидуален подход към всеки автомобил',
    'Бърза комуникация и удобно записване на час'
  ];

  const gallery = [
    'Преди / След детайлинг',
    'Интериор в дълбочина',
    'Гланц и защита на екстериора',
    'Детайли, които се забелязват'
  ];

  const bookingSteps = [
    'Избираш услуга',
    'Посочваш дата и час',
    'Оставяш име и телефон',
    'Изпращаш заявката'
  ];

  const timeSlots = ['09:00', '11:00', '13:00', '15:00', '17:00'];

  const serviceOptions = services.map((service) => service.title);

  const stats = [
    { number: '500+', text: 'обслужени автомобила' },
    { number: '3+', text: 'години опит' },
    { number: '100%', text: 'внимание към детайла' }
  ];

  const pricing = [
    {
      title: 'Интериорен детайлинг',
      price: 'от 120 лв',
      desc: 'Дълбоко почистване на салона, седалки, пластмаси и мокети.'
    },
    {
      title: 'Екстериорен детайлинг',
      price: 'от 100 лв',
      desc: 'Детайлно измиване, джанти, защита и блясък.'
    },
    {
      title: 'Цялостен детайлинг',
      price: 'от 200 лв',
      desc: 'Пълна грижа за интериор и екстериор.'
    }
  ];

  const reviews = [
    {
      name: 'Иван П.',
      text: 'Много добро отношение и страхотен резултат. Колата изглеждаше като нова.'
    },
    {
      name: 'Георги Д.',
      text: 'Интериорът беше изчистен перфектно. Личи си, че работят с внимание към детайла.'
    },
    {
      name: 'Мартин С.',
      text: 'Полиране и външен детайлинг на много високо ниво. Препоръчвам с две ръце.'
    }
  ];

  const faqs = [
    {
      question: 'Колко време отнема една услуга?',
      answer: 'Зависи от услугата и състоянието на автомобила, но обикновено между 2 и 8 часа.'
    },
    {
      question: 'Работите ли само с предварително записване?',
      answer: 'Да, за да можем да отделим нужното време и внимание на всеки автомобил.'
    },
    {
      question: 'Колко издържа керамичната защита?',
      answer: 'Зависи от продукта и поддръжката, но може да осигурява защита за дълъг период.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-[#D4AF37]/20 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Bobo Garage Detailing"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-[#D4AF37]/30 sm:h-14 sm:w-14"
            />
            <div>
              <div className="text-base font-bold tracking-wide text-[#D4AF37] sm:text-lg">BOBO GARAGE</div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/50 sm:text-xs">
                Detailing
              </div>
            </div>
          </a>

          <nav className="hidden gap-8 text-sm text-white/80 md:flex">
            <a href="#services" className="transition hover:text-[#D4AF37]">
              Услуги
            </a>
            <a href="#about" className="transition hover:text-[#D4AF37]">
              За нас
            </a>
            <a href="#gallery" className="transition hover:text-[#D4AF37]">
              Галерия
            </a>
            <a href="#contact" className="transition hover:text-[#D4AF37]">
              Контакт
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="hidden rounded-xl bg-[#D4AF37] px-4 py-2 text-xs font-bold text-black sm:px-5 sm:py-3 sm:text-sm md:inline-flex"
            >
              Запази час
            </a>

            <button
              type="button"
              aria-label="Отвори меню"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/30 text-[#D4AF37] md:hidden"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <span className="text-2xl leading-none">☰</span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#D4AF37]/15 bg-black md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 text-sm text-white/85">
              <a
                href="#services"
                className="rounded-xl px-3 py-3 transition hover:bg-white/5 hover:text-[#D4AF37]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#about"
                className="rounded-xl px-3 py-3 transition hover:bg-white/5 hover:text-[#D4AF37]"
                onClick={() => setMobileMenuOpen(false)}
              >
                За нас
              </a>
              <a
                href="#gallery"
                className="rounded-xl px-3 py-3 transition hover:bg-white/5 hover:text-[#D4AF37]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Галерия
              </a>
              <a
                href="#contact"
                className="rounded-xl px-3 py-3 transition hover:bg-white/5 hover:text-[#D4AF37]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакт
              </a>
              <a
                href="#booking"
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#D4AF37] px-5 py-3 font-bold text-black transition hover:bg-[#b99221]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Запази час
              </a>
            </nav>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_45%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28">
          <div className="relative z-10">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#D4AF37]">
              Premium Auto Detailing
            </p>
            <h1 className="mb-6 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              BOBO GARAGE <span className="text-[#D4AF37]">DETAILING</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/70">
              Професионален detailing за автомобили с луксозна визия, внимание към всеки детайл и
              резултат, който се вижда веднага. Грижим се автомобилът ти да изглежда чист, свеж и
              завършен на друго ниво.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="rounded-2xl bg-[#D4AF37] px-7 py-4 text-center font-bold text-black transition hover:bg-[#b99221]"
              >
                Запази час
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-[#D4AF37]/40 px-7 py-4 text-center font-semibold text-white transition hover:bg-[#D4AF37]/10"
              >
                Виж услугите
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#171717] to-black p-6 shadow-2xl shadow-[#D4AF37]/10">
              <img
                src="/logo2.jpg"
                alt="Bobo Garage logo"
                className="mx-auto max-h-[520px] w-full rounded-[1.5rem] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="grid gap-6 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.text}
              className="rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] p-8"
            >
              <div className="text-4xl font-black text-[#D4AF37]">{stat.number}</div>
              <div className="mt-2 text-white/70">{stat.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Услуги</p>
          <h2 className="text-4xl font-black">Какво предлагаме</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            Услуги, създадени за хора, които искат автомобилът им да изглежда чисто, поддържано и
            premium.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/[0.05]"
            >
              <div className="mb-4 h-1 w-16 rounded-full bg-[#D4AF37]" />
              <h3 className="mb-3 text-2xl font-bold text-[#D4AF37]">{service.title}</h3>
              <p className="leading-relaxed text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#D4AF37]/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Цени</p>
            <h2 className="text-4xl font-black">Популярни услуги</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pricing.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-white/[0.03] p-7 text-center"
              >
                <h3 className="mb-2 text-2xl font-bold text-[#D4AF37]">{item.title}</h3>
                <div className="mb-4 text-3xl font-black">{item.price}</div>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#D4AF37]/10 bg-[#0a0a0a]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">За нас</p>
            <h2 className="mb-6 text-4xl font-black">Качество, което се вижда от първия поглед</h2>
            <p className="text-lg leading-relaxed text-white/70">
              В BOBO GARAGE DETAILING работим с ясна цел — всеки автомобил да излезе с по-силно
              присъствие, по-добър блясък и усещане за истинска грижа. За нас detailing не е просто
              почистване, а пълно визуално освежаване и защита.
            </p>
          </div>

          <div className="grid gap-5">
            {advantages.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-white/80"
              >
                <span className="mr-3 text-[#D4AF37]">●</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Галерия</p>
          <h2 className="text-4xl font-black">Резултати, които правят впечатление</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {gallery.map((item, index) => {
            let videoSrc = null;

            if (item === 'Преди / След детайлинг') videoSrc = '/beforeafter2.mp4';
            if (item === 'Интериор в дълбочина') videoSrc = '/beforeafter.mp4';
            if (item === 'Гланц и защита на екстериора') videoSrc = '/beforeafter4.mp4';
            if (item === 'Детайли, които се забелязват') videoSrc = '/beforeafter3.mp4';

            return (
              <div
                key={item}
                className="group relative overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/15 bg-black"
              >
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-56 w-full object-cover sm:h-72"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-[#D4AF37] font-bold">
                  0{index + 1}. {item}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#D4AF37]/10 bg-[#0b0b0b]">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Before / After</p>
            <h2 className="text-4xl font-black">Виж разликата</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/65">
              Плъзни разделителя и сравни резултата преди и след детайлинг.
            </p>
          </div>

          <div className="flex justify-center overflow-hidden rounded-[2rem] border border-[#D4AF37]/15 bg-black p-4">
            <div
              className="relative mx-auto h-[220px] w-full max-w-xl touch-none overflow-hidden rounded-[1.5rem] sm:h-[260px] md:h-[380px]"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percentage = (x / rect.width) * 100;
                setSliderPosition(Math.max(0, Math.min(100, percentage)));
              }}
              onTouchStart={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.touches[0].clientX - rect.left;
                const percentage = (x / rect.width) * 100;
                setSliderPosition(Math.max(0, Math.min(100, percentage)));
              }}
              onTouchMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.touches[0].clientX - rect.left;
                const percentage = (x / rect.width) * 100;
                setSliderPosition(Math.max(0, Math.min(100, percentage)));
              }}
            >
              <img
                src="/after.png"
                alt="After detailing"
                className="absolute inset-0 h-full w-full object-contain"
              />

              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src="/before.png"
                  alt="Before detailing"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>

              <div
                className="absolute inset-y-0 z-20 w-1 bg-[#D4AF37]"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-black text-[#D4AF37] shadow-lg">
                  ⇆
                </div>
              </div>

              <div className="absolute left-4 top-4 z-20 rounded-full bg-black/70 px-4 py-2 text-sm font-bold text-white">
                BEFORE
              </div>

              <div className="absolute right-4 top-4 z-20 rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-bold text-black">
                AFTER
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-20">
        <div className="rounded-[2rem] border border-[#D4AF37]/15 bg-gradient-to-r from-[#111] via-black to-[#111] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Защо нас</p>
              <h3 className="text-3xl font-black">Защо да изберете BOBO GARAGE DETAILING</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-xl font-bold text-[#D4AF37]">Професионално отношение</div>
              <p className="text-white/70">
                Работим с внимание към всеки детайл и използваме професионални препарати и техника,
                за да постигнем максимално чист и блестящ резултат.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-xl font-bold text-[#D4AF37]">Видим резултат</div>
              <p className="text-white/70">
                Нашата цел не е просто почистване, а реална промяна във визията на автомобила –
                по-дълбок гланц, по-чист интериор и защита на повърхностите.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Отзиви</p>
          <h2 className="text-4xl font-black">Какво казват клиентите</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-white/[0.03] p-7"
            >
              <div className="mb-4 text-2xl text-[#D4AF37]">★★★★★</div>
              <p className="leading-relaxed text-white/75">{review.text}</p>
              <div className="mt-6 font-bold text-[#D4AF37]">{review.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#D4AF37]/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Instagram</p>
            <h2 className="text-4xl font-black">Последвай ни за още резултати</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/65">
              Виж още видеа, снимки и реални резултати в Instagram профила ни.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <a
                key={item}
                href="https://www.instagram.com/bobogarage_/"
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/15 bg-black"
              >
                <img
                  src={`/insta${item}.jpg`}
                  alt={`Instagram ${item}`}
                  className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.instagram.com/bobogarage_/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-2xl bg-[#D4AF37] px-7 py-4 font-bold text-black transition hover:bg-[#b99221]"
            >
              Отвори Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">FAQ</p>
          <h2 className="text-4xl font-black">Често задавани въпроси</h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[1.5rem] border border-[#D4AF37]/15 bg-white/[0.03] p-6"
            >
              <h3 className="mb-3 text-xl font-bold text-[#D4AF37]">{faq.question}</h3>
              <p className="text-white/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="border-y border-[#D4AF37]/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Booking</p>
            <h2 className="text-4xl font-black">Запази час онлайн</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/65">
              Клиентът попълва кратка форма, избира услуга и предпочитан час, след което ти се
              свързваш за потвърждение.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5">
              {bookingSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] font-bold text-black">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#D4AF37]">{step}</div>
                    <p className="mt-1 text-white/65">
                      {index === 0 && 'Избор на най-подходящата услуга според нуждите на автомобила.'}
                      {index === 1 && 'Клиентът посочва удобен ден и свободен часови диапазон.'}
                      {index === 2 &&
                        'Оставя данни за връзка, за да може заявката да бъде потвърдена.'}
                      {index === 3 &&
                        'Заявката се изпраща и ти я получаваш за преглед и обратна връзка.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-[#D4AF37]/15 bg-gradient-to-br from-[#151515] to-black p-8 shadow-2xl shadow-[#D4AF37]/5">
              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name') || '';
                  const phone = formData.get('phone') || '';
                  const service = formData.get('service') || '';
                  const date = formData.get('date') || '';
                  const time = formData.get('time') || '';
                  const message = formData.get('message') || '';

                  const text = `Нова заявка за час - BOBO GARAGE DETAILING

Име: ${name}
Телефон: ${phone}
Услуга: ${service}
Дата: ${date}
Час: ${time}
Съобщение: ${message}`;

                  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
                  window.open(url, '_blank');
                }}
              >
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">Име</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Въведи име"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#D4AF37]/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">Телефон</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Въведи телефон"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#D4AF37]/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">Услуга</label>
                  <select
                    name="service"
                    className="w-full rounded-2xl border border-white/10 bg-[#111] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/50"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Избери услуга
                    </option>
                    {serviceOptions.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">Дата</label>
                    <input
                      name="date"
                      type="date"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/50"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">Час</label>
                    <select
                      name="time"
                      className="w-full rounded-2xl border border-white/10 bg-[#111] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/50"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Избери час
                      </option>
                      {timeSlots.map((slot) => (
                        <option key={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#D4AF37]">
                    Съобщение
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Напиши какво искаш да бъде направено по автомобила"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#D4AF37]/50"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-2xl bg-[#D4AF37] px-4 py-4 text-base font-bold text-black transition hover:bg-[#b99221]"
                >
                  Изпрати в WhatsApp
                </button>

                <p className="text-sm text-white/45">
                  Смени номера в кода с реалния WhatsApp номер и формата ще отваря готово съобщение
                  за изпращане.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D4AF37]/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Локация</p>
            <h2 className="text-4xl font-black">Къде да ни намериш</h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#D4AF37]/15">
            <iframe
              title="Bobo Garage Location"
              src="https://www.google.com/maps?q=Shumen,Bulgaria&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://maps.google.com/?q=Shumen,Bulgaria"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl bg-[#D4AF37] px-6 py-3 font-bold text-black transition hover:bg-[#b99221]"
            >
              Отвори в Google Maps
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[#D4AF37]/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Контакт</p>
            <h2 className="text-4xl font-black">Запази своя час</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/65">
              Свържи се за свободни часове, индивидуална оферта и консултация според състоянието на
              автомобила.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-white/[0.03] p-7 text-center">
              <div className="mb-3 text-xl font-bold text-[#D4AF37]">Телефон</div>
              <div className="text-white/75">+359 898 795 827</div>
            </div>
            <div className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-white/[0.03] p-7 text-center">
              <div className="mb-3 text-xl font-bold text-[#D4AF37]">Instagram</div>
              <div className="text-white/75">@bobogarage_</div>
            </div>
            <div className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-white/[0.03] p-7 text-center">
              <div className="mb-3 text-xl font-bold text-[#D4AF37]">Локация</div>
              <div className="text-white/75">Шумен, България</div>
            </div>
          </div>
        </div>
      </section>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-[999] flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 font-bold text-black shadow-2xl transition hover:scale-105"
      >
        <span className="text-xl">💬</span>
        WhatsApp
      </a>
    </div>
  );
}