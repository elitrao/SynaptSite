export type NavItem = {
  label: string;
  href: string;
};

export type HeaderNavItem = {
  label: string;
  href?: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type ClientLogo = {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
};

export type Service = {
  id: string;
  featured?: boolean;
  category: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  imageFit: "cover" | "contain";
};

export type CaseMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  description: string;
  client: string;
  challenge: string;
  delivered: string[];
  duration: string;
  budget: string;
  result: string;
  metrics: CaseMetric[];
  outcomes: string[];
  image: string;
  imageAlt: string;
  gallery: Array<{
    src: string;
    alt: string;
  }>;
  video: {
    title: string;
    src?: string;
    poster?: string;
  };
  contentAlign: "left" | "right";
};

export type TeamCapability = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContactConfig = {
  privacyPath: string;
};

export type PrivacyConfig = {
  isDraft: boolean;
  operatorName: string;
  contactEmail: string;
  storagePeriod: string;
};

const configuredEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
const configuredContactEmail = process.env.CONTACT_TO_EMAIL?.trim();
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  name: "Synapt",
  title: "Synapt | Разработка цифровых продуктов под ключ",
  description:
    "Разрабатываем SaaS, AI-агентов, автоматизацию и LMS-платформы. От архитектуры до запуска и поддержки продукта.",
  siteUrl: configuredSiteUrl
    ? configuredSiteUrl.replace(/\/$/, "")
    : "http://localhost:3000",
};

export const navigation: NavItem[] = [
  { label: "Услуги", href: "/#services" },
  { label: "Кейсы", href: "/#cases" },
  { label: "Команда", href: "/#team" },
  { label: "FAQ", href: "/#faq" },
];

export const headerNavigation: HeaderNavItem[] = [
  { label: "Кейсы", href: "/#cases" },
  { label: "Услуги", href: "/#services" },
  { label: "Компания" },
  { label: "Блог" },
  { label: "Контакты" },
];

export const hero = {
  title: "Мы создаем цифровые сервисы, которые работают на вас",
  prefix: "Мы создаем",
  rotatingPhrases: [
    "цифровые сервисы",
    "приложения любой сложности",
    "web-сервисы",
    "AI-агентов",
  ],
  suffix: "которые работают на вас",
  cta: "Оставить заявку",
};

export const clientLogos: ClientLogo[] = [
  {
    id: "global-dent-club",
    name: "Global Dent Club",
    src: "/assets/clients/global-dent-club.png",
    width: 5848,
    height: 4134,
  },
  {
    id: "yandex",
    name: "Яндекс",
    src: "/assets/clients/yandex.png",
    width: 85,
    height: 25,
  },
  {
    id: "vk",
    name: "ВКонтакте",
    src: "/assets/clients/vk.png",
    width: 138,
    height: 24,
  },
  {
    id: "avito",
    name: "Авито",
    src: "/assets/clients/avito.png",
    width: 90,
    height: 23,
  },
  {
    id: "vtb",
    name: "ВТБ",
    src: "/assets/clients/vtb.png",
    width: 116,
    height: 43,
  },
];

export const metrics: Metric[] = [
  {
    value: "40+",
    label: "продуктов запущено для клиентов",
  },
  {
    value: "100%",
    label: "сдача в срок закреплена в договоре",
  },
  {
    value: "4-8 недель",
    label: "до запуска вместо 6 месяцев найма команды",
  },
  {
    value: "24/7",
    label: "остаёмся на связи после запуска",
  },
];

export const services: Service[] = [
  {
    id: "ai-desant",
    featured: true,
    category: "Флагманское направление",
    title: "AI-десант",
    summary: "Выделенная команда внедрения",
    description:
      "Специалист Synapt на месяц входит в вашу команду, внедряет первые AI-решения в рабочие процессы и обучает сотрудников самостоятельно работать с ними после завершения проекта.",
    features: [
      "Разбор процесса и данных",
      "Архитектура и рабочая версия",
      "Внедрение и передача в эксплуатацию",
    ],
    tags: ["Диагностика", "AI", "Интеграции", "Запуск"],
    image: "/assets/services/ai-agent.webp",
    imageAlt: "AI-решение, встроенное в рабочий процесс компании",
    imageFit: "contain",
  },
  {
    id: "product",
    category: "Продуктовая разработка",
    title: "IT-продукты под ключ",
    summary: "SaaS, web и mobile",
    description:
      "Проектируем SaaS, web- и мобильные продукты. Берём на себя интерфейс, backend, инфраструктуру и запуск.",
    features: [
      "Исследование и продуктовая архитектура",
      "Интерфейсы, backend и инфраструктура",
      "Запуск, аналитика и развитие",
    ],
    tags: ["SaaS", "Web", "Mobile", "Инфраструктура"],
    image: "/assets/services/product.webp",
    imageAlt: "Интерфейс платформы для анализа клиентских сценариев",
    imageFit: "cover",
  },
  {
    id: "ai-agent",
    category: "Искусственный интеллект",
    title: "AI-агенты",
    summary: "На данных вашего бизнеса",
    description:
      "Создаём AI-агентов для поддержки, продаж и внутренних процессов. Подключаем данные и контролируем качество ответов.",
    features: [
      "Поддержка и корпоративный поиск",
      "Продажи и квалификация обращений",
      "Контроль ответов и качества работы",
    ],
    tags: ["RAG", "Чат-боты", "База знаний", "Контроль качества"],
    image: "/assets/services/ai-agent.webp",
    imageAlt: "AI-консультант отвечает пользователю в мобильном приложении",
    imageFit: "contain",
  },
  {
    id: "automation",
    category: "Автоматизация процессов",
    title: "Интеграции и автоматизация",
    summary: "CRM, ERP, 1С и внутренние системы",
    description:
      "Связываем CRM, ERP, 1С и внутренние сервисы. Убираем ручные операции и делаем процесс прозрачным для команды.",
    features: [
      "Интеграции через API и события",
      "Обработка документов и коммуникаций",
      "Мониторинг ошибок и результата",
    ],
    tags: ["API", "CRM", "ERP", "1С"],
    image: "/assets/services/automation.webp",
    imageAlt: "Панель управления и аналитики отдела продаж",
    imageFit: "cover",
  },
  {
    id: "lms",
    category: "Корпоративное обучение",
    title: "LMS-платформы с AI",
    summary: "Обучение и корпоративные знания",
    description:
      "Разрабатываем LMS с AI-проверкой заданий, учебными траекториями, отчётностью и интеграциями с HR-системами.",
    features: [
      "Ролевые кабинеты и учебные траектории",
      "AI-проверка заданий и обратная связь",
      "Отчётность и интеграции с HR-системами",
    ],
    tags: ["AI-проверка", "Траектории", "Отчётность", "HR-системы"],
    image: "/assets/services/lms.webp",
    imageAlt: "Панель управления корпоративной LMS-платформой",
    imageFit: "cover",
  },
];

export const cases: CaseStudy[] = [
  {
    id: "foodtech",
    title: "AI-движок для FoodTech",
    description:
      "Поиск по продуктам и рецептам с учётом реальных остатков, параметров и ограничений.",
    client: "FoodTech-платформа с каталогом продуктов и рецептов",
    challenge:
      "Объединить поиск, реальные складские остатки и данные из PDF-карт в одном рабочем сценарии.",
    delivered: [
      "Семантический AI-поиск по базе продуктов",
      "Перерасчёт пропорций и параметров в реальном времени",
      "Структурирование продуктовых карт из PDF",
    ],
    duration: "Срок уточняется",
    budget: "Стоимость по запросу",
    result:
      "Команда получила масштабируемую базу и поиск, который учитывает реальные остатки и ограничения пользователя.",
    metrics: [
      { value: "30 000+", label: "сообщений обработано" },
      { value: "1 200+", label: "PDF-карт оцифровано" },
    ],
    outcomes: [
      "Семантический поиск по базе продуктов",
      "Перерасчёт параметров в реальном времени",
      "Структурирование данных из PDF",
    ],
    image: "/assets/cases/foodtech.webp",
    imageAlt: "Мобильный интерфейс AI-движка для поиска рецептов",
    gallery: [
      {
        src: "/assets/cases/foodtech.webp",
        alt: "Интерфейсы AI-движка для FoodTech-платформы",
      },
    ],
    video: { title: "Видео о проекте" },
    contentAlign: "left",
  },
  {
    id: "consultant",
    title: "AI-консультант",
    description:
      "Автономный помощник, обученный на корпоративной методологии и базе знаний клиента.",
    client: "Компания с собственной консультационной методологией",
    challenge:
      "Перенести корпоративную экспертизу в самостоятельного цифрового консультанта, доступного сотрудникам в привычном канале.",
    delivered: [
      "Обучение модели на корпоративной методологии",
      "Автономный Telegram Web App",
      "Контекстный анализ нестандартных ситуаций",
    ],
    duration: "Срок уточняется",
    budget: "Стоимость по запросу",
    result:
      "Консультант работает с базой из 800+ страниц и экономит команде более 300 часов ежемесячно.",
    metrics: [
      { value: "300+", label: "часов экономии ежемесячно" },
      { value: "800+", label: "страниц базы знаний" },
    ],
    outcomes: [
      "Обучение на корпоративной методологии",
      "Автономный Telegram Web App",
      "Контекстный анализ сложных ситуаций",
    ],
    image: "/assets/cases/consultant.webp",
    imageAlt: "Мобильный интерфейс AI-консультанта",
    gallery: [
      {
        src: "/assets/cases/consultant.webp",
        alt: "Мобильные экраны корпоративного AI-консультанта",
      },
    ],
    video: { title: "Видео о проекте" },
    contentAlign: "right",
  },
  {
    id: "sales-analytics",
    title: "AI-аналитика отдела продаж",
    description:
      "Система разбирает звонки и переписки, оценивает качество диалогов и собирает отчётность.",
    client: "Отдел продаж, работающий со звонками, переписками и amoCRM",
    challenge:
      "Проверять все диалоги, видеть качество работы менеджеров и находить причины потери конверсии.",
    delivered: [
      "Транскрибация звонков и разбор переписок",
      "AI-скоринг по скрипту и качеству выявления потребностей",
      "Отчётность по работе менеджеров в реальном времени",
    ],
    duration: "Срок уточняется",
    budget: "Стоимость по запросу",
    result:
      "Система анализирует 100% диалогов и дала клиенту рост конверсии на 20%.",
    metrics: [
      { value: "100%", label: "диалогов в анализе" },
      { value: "+20%", label: "рост конверсии" },
      { value: "360°", label: "оценка коммуникаций" },
    ],
    outcomes: [
      "Speech-to-Text для звонков и переписок",
      "AI-скоринг диалогов",
      "Отчётность в реальном времени",
    ],
    image: "/assets/cases/sales-analytics.webp",
    imageAlt: "Ноутбук с панелью AI-аналитики отдела продаж",
    gallery: [
      {
        src: "/assets/cases/sales-analytics.webp",
        alt: "Панель AI-аналитики отдела продаж",
      },
    ],
    video: { title: "Видео о проекте" },
    contentAlign: "left",
  },
  {
    id: "legacy",
    title: "Реверс-инжиниринг Legacy-кода",
    description:
      "Перенос математического ядра из DOS-среды в современный web-продукт без изменения расчётов.",
    client: "Владелец инженерной системы с математическим ядром 1992 года",
    challenge:
      "Перенести расчёты из DOS-среды в современный web-интерфейс без потери точности и логики исходной системы.",
    delivered: [
      "Полный реверс-инжиниринг расчётной логики",
      "Перенос математического ядра на современный web-стек",
      "Новый интерфейс визуализации данных",
    ],
    duration: "Срок уточняется",
    budget: "Стоимость по запросу",
    result:
      "Сохранена 100% точность вычислений, а система с историей более 30 лет стала доступна в современном web-продукте.",
    metrics: [
      { value: "100%", label: "точность вычислений" },
      { value: "30+ лет", label: "истории исходной системы" },
    ],
    outcomes: [
      "Декодирование логики системы 1992 года",
      "Перенос математического ядра на web-стек",
      "Современная визуализация данных",
    ],
    image: "/assets/cases/legacy.webp",
    imageAlt: "Серверное оборудование старой вычислительной системы",
    gallery: [
      {
        src: "/assets/cases/legacy.webp",
        alt: "Материалы проекта по переносу Legacy-системы",
      },
    ],
    video: { title: "Видео о проекте" },
    contentAlign: "left",
  },
];

export const teamCapabilities: TeamCapability[] = [
  {
    title: "Product и AI-архитектура",
    description:
      "Переводим бизнес-задачу в архитектуру продукта и выбираем технологию без лишней сложности.",
  },
  {
    title: "UX/UI и frontend",
    description:
      "Проектируем понятные сценарии и собираем интерфейсы для web, mobile и внутренних систем.",
  },
  {
    title: "Backend и интеграции",
    description:
      "Связываем продукт с данными, CRM, ERP, 1С и другими сервисами компании.",
  },
  {
    title: "Инфраструктура и QA",
    description:
      "Готовим окружение, проверяем критичные сценарии и поддерживаем продукт после запуска.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "С чего начинается проект?",
    answer:
      "С короткой диагностической встречи. Разбираем задачу, текущий процесс, данные и ожидаемый результат. После неё предлагаем состав первой версии и план работ.",
  },
  {
    question: "Когда будет первая рабочая версия?",
    answer:
      "Обычно работающий MVP появляется за 4-8 недель. Срок зависит от количества сценариев, интеграций и готовности исходных данных.",
  },
  {
    question: "Можно начать с небольшого MVP?",
    answer:
      "Да. Выбираем один процесс с понятной ценностью, запускаем его на ограниченном контуре и измеряем результат до масштабирования.",
  },
  {
    question: "Вы интегрируетесь с существующими системами?",
    answer:
      "Да. Подключаем CRM, ERP, 1С, базы знаний и внутренние сервисы через доступные API, очереди и обмен файлами.",
  },
  {
    question: "Что происходит после запуска?",
    answer:
      "Следим за стабильностью, качеством ответов и бизнес-метриками. Исправляем ошибки, обновляем сценарии и развиваем продукт вместе с командой заказчика.",
  },
  {
    question: "Как вы работаете с закрытыми данными?",
    answer:
      "На этапе архитектуры согласуем доступы, место хранения и контур обработки. Для чувствительных данных предусматриваем изолированную инфраструктуру и ролевой доступ.",
  },
];

export const contactConfig: ContactConfig = {
  privacyPath: "/privacy",
};

export const privacyConfig: PrivacyConfig = {
  isDraft: true,
  operatorName: "Команда Synapt",
  contactEmail:
    configuredContactEmail || configuredEmail || "hello@synapt.example",
  storagePeriod: "до достижения цели обращения или отзыва согласия",
};
