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
NEXT_PUBLIC_CONTACT_EMAIL=hello@your-domain.ru
```

До замены тестового адреса форма не показывает фиктивную успешную отправку.

## Проверка перед публикацией

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

## Важно перед запуском

- заменить контактный email;
- заполнить реквизиты и условия обработки данных на странице `/privacy`;
- проверить ссылку на презентацию компании;
- подключить рабочий домен.
