window.AppTemplateConfig = {
  site: {
    pageTitle: "Бобры. Загородные дома",
    tagline: "Современный загородный отдых",
    name: "Бобры",
    description:
      "Минималистичная страница-визитка для быстрого перехода в соцсети, мессенджеры и онлайн-бронирование.",
    logo: {
      src: "logoweb.png",
      alt: "Логотип Бобры"
    },
    background: {
      image: "background.jpg",
      position: "center center"
    },
    infoChips: [
      "Ленинградская область",
      "Онлайн-бронирование",
      "Домики и баня",
      "Быстрый ответ в мессенджерах"
    ],
    footerNote: "Шаблон легко редактируется: меняйте поля в assets/js/template-config.js"
  },

  sections: {
    socialCaption: "Соцсети и контакты",
    socialTitle: "Оставайтесь на связи",
    socialDescription:
      "Добавляйте, удаляйте и переупорядочивайте ссылки в одном массиве. Поддерживаются встроенные SVG и кастомные SVG/PNG иконки."
  },

  theme: {
    activePreset: "forest-sand",
    allowSwitcher: true,
    presets: {
      "forest-sand": {
        label: "Forest Sand",
        colors: {
          "bg-overlay-start": "rgba(9, 16, 19, 0.72)",
          "bg-overlay-end": "rgba(15, 34, 32, 0.64)",
          "surface": "rgba(20, 33, 35, 0.78)",
          "surface-border": "rgba(255, 255, 255, 0.18)",
          "surface-shadow": "0 20px 48px rgba(0, 0, 0, 0.36)",
          "text-primary": "#f8f6f1",
          "text-secondary": "#d5d0c7",
          "accent": "#ea7a3a",
          "accent-hover": "#d86523",
          "accent-soft": "rgba(234, 122, 58, 0.18)",
          "button-text": "#ffffff",
          "chip-bg": "rgba(255, 255, 255, 0.08)",
          "chip-border": "rgba(255, 255, 255, 0.14)",
          "social-bg": "rgba(255, 255, 255, 0.06)",
          "social-border": "rgba(255, 255, 255, 0.12)"
        }
      },
      "ocean-slate": {
        label: "Ocean Slate",
        colors: {
          "bg-overlay-start": "rgba(7, 27, 41, 0.76)",
          "bg-overlay-end": "rgba(20, 60, 78, 0.62)",
          "surface": "rgba(13, 31, 43, 0.8)",
          "surface-border": "rgba(171, 222, 245, 0.3)",
          "surface-shadow": "0 20px 48px rgba(2, 16, 24, 0.45)",
          "text-primary": "#edf7fc",
          "text-secondary": "#bcd6e4",
          "accent": "#3ab8d8",
          "accent-hover": "#1ea3c8",
          "accent-soft": "rgba(58, 184, 216, 0.2)",
          "button-text": "#ffffff",
          "chip-bg": "rgba(171, 222, 245, 0.12)",
          "chip-border": "rgba(171, 222, 245, 0.26)",
          "social-bg": "rgba(171, 222, 245, 0.08)",
          "social-border": "rgba(171, 222, 245, 0.2)"
        }
      },
      "cream-graphite": {
        label: "Cream Graphite",
        colors: {
          "bg-overlay-start": "rgba(34, 37, 39, 0.56)",
          "bg-overlay-end": "rgba(24, 24, 26, 0.42)",
          "surface": "rgba(255, 252, 245, 0.9)",
          "surface-border": "rgba(41, 44, 46, 0.16)",
          "surface-shadow": "0 18px 44px rgba(29, 30, 30, 0.2)",
          "text-primary": "#1f2328",
          "text-secondary": "#5a636d",
          "accent": "#d36434",
          "accent-hover": "#b94e22",
          "accent-soft": "rgba(211, 100, 52, 0.14)",
          "button-text": "#ffffff",
          "chip-bg": "rgba(28, 34, 40, 0.05)",
          "chip-border": "rgba(28, 34, 40, 0.16)",
          "social-bg": "rgba(28, 34, 40, 0.04)",
          "social-border": "rgba(28, 34, 40, 0.14)"
        }
      }
    }
  },

  primaryActions: [
    {
      label: "Забронировать",
      href: "https://homereserve.ru/gDleLbdhMC",
      style: "primary"
    },
    {
      label: "Позвонить",
      href: "tel:+79214060607",
      style: "secondary"
    }
  ],

  socials: [
    {
      label: "Instagram",
      meta: "@bobry_country_houses",
      href: "https://instagram.com/bobry_country_houses",
      icon: { type: "platform", name: "instagram" }
    },
    {
      label: "VK",
      meta: "@bobryhouses",
      href: "https://vk.com/bobryhouses",
      icon: { type: "platform", name: "vk" }
    },
    {
      label: "Telegram",
      meta: "@bobryhouses",
      href: "https://t.me/bobryhouses",
      icon: { type: "platform", name: "telegram" }
    },
    {
      label: "WhatsApp",
      meta: "+7 921 406-06-07",
      href: "https://wa.me/79214060607",
      icon: { type: "platform", name: "whatsapp" }
    },
    {
      label: "Отзывы",
      meta: "Яндекс Карты",
      href: "https://yandex.ru/maps/org/bobry_country_houses/169139949040/reviews",
      icon: { type: "platform", name: "reviews" }
    },
    {
      label: "Проживание",
      meta: "Правила проживания",
      href: "https://www.bobryhouses.ru/rules",
      icon: { type: "platform", name: "home" }
    },
    {
      label: "Телефон",
      meta: "+7 921 406-06-07",
      href: "tel:+79214060607",
      icon: { type: "platform", name: "phone" }
    },
    {
      label: "Свой сервис",
      meta: "Пример PNG/SVG иконки",
      href: "https://www.bobryhouses.ru/",
      icon: {
        type: "image",
        src: "logoweb.png"
      }
    }
  ]
};
