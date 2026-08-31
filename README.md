# arlekin-dev

Персональный сайт-портфолио frontend-разработчика.

На сайте собрана информация обо мне, используемых технологиях, проектах и способах связи.

**Live:** https://arlekin-dev.ru
**GitHub:** https://github.com/Arlekin20/arlekin-dev

## О проекте

Сайт создан как единая точка для знакомства с моими проектами и опытом.

Основное направление — frontend-разработка на JavaScript, TypeScript и React.

На сайте представлены мои проекты с возможностью сразу открыть работающую версию приложения или исходный код на GitHub.

## Проекты

### MockForge

Конструктор mock API endpoints для frontend-разработки.

**Stack:** React · TypeScript · Node.js · Express

* Live: https://mockforge.arlekin-dev.ru
* GitHub: https://github.com/Arlekin20/MockForge

### GitGuide

Интерактивный помощник по Git с практическими сценариями, командами и пояснениями.

**Stack:** React · TypeScript · Vite · Clipboard API

* Live: https://gitguide.arlekin-dev.ru
* GitHub: https://github.com/Arlekin20/GitGuide

## Стек сайта

* JavaScript
* TypeScript
* React
* HTML
* CSS
* Vite
* Git / GitHub
* GitHub Actions

## Что реализовано

* персональная страница разработчика;
* блок с основным технологическим стеком;
* секция с проектами;
* ссылки на Live-версии проектов;
* ссылки на GitHub;
* ссылки на профессиональные профили и резюме;
* контактная информация;
* адаптивная верстка;
* автоматический deployment.

## Локальный запуск

Клонировать репозиторий:

```bash
git clone https://github.com/Arlekin20/arlekin-dev.git
cd arlekin-dev
```

Установить зависимости:

```bash
npm install
```

Запустить проект:

```bash
npm run dev
```

## Сборка

```bash
npm run build
```

Проверка production build:

```bash
npm run preview
```

## Deployment

Сайт размещён на собственном VPS.

При push в ветку `main` GitHub Actions подключается к серверу по SSH и автоматически:

1. получает последние изменения из репозитория;
2. устанавливает зависимости;
3. собирает production-версию приложения.

Сайт доступен по адресу:

https://arlekin-dev.ru

## Автор

**Александр Соловьев**

Frontend-разработчик с фокусом на JavaScript, TypeScript и React.

GitHub: https://github.com/Arlekin20
