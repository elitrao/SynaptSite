# SynaptSite

Премиальный лендинг IT-агентства Synapt. Сайт рассказывает о направлениях разработки, показывает показатели команды и кейсы, отвечает на частые вопросы и ведёт пользователя к заявке.

## Стек

- Next.js 16 и App Router
- TypeScript
- Tailwind CSS 4
- Motion для интерфейсных анимаций
- Lucide React для иконок

## Локальный запуск

Требуется Node.js 20+ и pnpm.

```bash
pnpm install
pnpm dev
```

Сайт откроется по адресу [http://localhost:3000](http://localhost:3000).

## Переменные окружения

Скопируйте `.env.example` в `.env.local` и замените значения:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.ru
CONTACT_TO_EMAIL=hello@your-domain.ru
CONTACT_FROM_EMAIL=requests@your-domain.ru
RESEND_API_KEY=re_replace_me
```

Адрес отправителя должен находиться на домене, подтверждённом в Resend. Если
переменные не заполнены, форма показывает ошибку подключения и не имитирует
успешную отправку.

## Проверка перед публикацией

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

## Важно перед запуском

- подключить Resend и рабочие адреса для заявок;
- заполнить реквизиты и условия обработки данных на странице `/privacy`;
- подключить рабочий домен.
