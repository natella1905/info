# Modern HTML Social Template

Современный адаптивный шаблон страницы-визитки на `HTML + CSS + JS` без привязки к Jekyll.

## Структура

- `index.html` - разметка страницы
- `assets/css/styles.css` - стили, адаптив, визуальная система
- `assets/js/template-config.js` - главный конфиг (тексты, цвета, ссылки, иконки, фон)
- `assets/js/main.js` - рендер контента из конфига
- `.nojekyll` - отключает старый Jekyll-пайплайн для GitHub Pages

## Что редактировать

Открывайте `assets/js/template-config.js` и меняйте:

- `site` - логотип, название, описание, фон, подписи
- `theme.activePreset` - активная тема
- `theme.presets` - свои цветовые палитры
- `primaryActions` - главные кнопки
- `socials` - соцсети и ссылки

## Иконки соцсетей (SVG/PNG)

Для каждого элемента в `socials` поддерживаются 3 типа:

1. Встроенная SVG-иконка по имени платформы:

```js
icon: { type: "platform", name: "telegram" }
```

2. Кастомная иконка из файла `svg/png`:

```js
icon: { type: "image", src: "assets/icons/my-network.svg", alt: "My Network" }
```

3. Полностью кастомный inline SVG:

```js
icon: { type: "inline-svg", svg: "<svg ...>...</svg>" }
```

## Цветовые пресеты

В шаблоне уже есть 3 готовых варианта:

- `forest-sand` - контрастный природный (тёплый акцент)
- `ocean-slate` - холодный технологичный
- `cream-graphite` - светлый минималистичный

Переключение:

```js
theme: {
  activePreset: "ocean-slate"
}
```

## Запуск

Можно открыть `index.html` напрямую в браузере или использовать GitHub Pages как статический сайт.
