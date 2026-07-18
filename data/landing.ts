export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  shortLabel: string;
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
  metrics: CaseMetric[];
  outcomes: string[];
  image: string;
  imageAlt: string;
  contentAlign: "left" | "right";
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContactConfig = {
  recipientEmail: string;
  recipientIsPlaceholder: boolean;
  privacyPath: string;
};

export type PrivacyConfig = {
  isDraft: boolean;
  operatorName: string;
  contactEmail: string;
  storagePeriod: string;
};

const configuredEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
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
  { label: "Что умеем", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "FAQ", href: "#faq" },
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
  description:
    "Полный цикл в диджитал от веб-разработки до разработки собственных продуктов",
  cta: "Оставить заявку",
  presentationCta: "Презентация компании",
  presentationHref: "/assets/synapt-presentation.pdf",
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
    shortLabel: "продуктов",
    label: "цифровых продуктов запущено",
  },
  {
    value: "100%",
    shortLabel: "проектов",
    label: "проектов сдаём в срок",
  },
  {
    value: "4-8",
    shortLabel: "недель",
    label: "недель до работающего продукта",
  },
  {
    value: "24/7",
    shortLabel: "поддержка",
    label: "поддержка продукта после внедрения",
  },
];

export const services: Service[] = [
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
    contentAlign: "left",
  },
  {
    id: "consultant",
    title: "AI-консультант",
    description:
      "Автономный помощник, обученный на корпоративной методологии и базе знаний клиента.",
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
    contentAlign: "right",
  },
  {
    id: "sales-analytics",
    title: "AI-аналитика отдела продаж",
    description:
      "Система разбирает звонки и переписки, оценивает качество диалогов и собирает отчётность.",
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
    contentAlign: "left",
  },
  {
    id: "legacy",
    title: "Реверс-инжиниринг Legacy-кода",
    description:
      "Перенос математического ядра из DOS-среды в современный web-продукт без изменения расчётов.",
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
    contentAlign: "left",
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
  recipientEmail: configuredEmail || "hello@synapt.example",
  recipientIsPlaceholder:
    !configuredEmail || configuredEmail.toLowerCase().endsWith(".example"),
  privacyPath: "/privacy",
};

export const privacyConfig: PrivacyConfig = {
  isDraft: true,
  operatorName: "Команда Synapt",
  contactEmail: contactConfig.recipientEmail,
  storagePeriod: "до достижения цели обращения или отзыва согласия",
};
