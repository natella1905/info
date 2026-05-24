window.AppTemplateConfig = {
  site: {
    pageTitle: "Бобры. Загородные дома",
    tagline: "Современный загородный отдых",
    name: "Бобры",
    description: "Подписывайтесь на наши соц сети, чтобы быть в курсе",
    avatar: {
      src: "bobry-icon.png",
      alt: "Логотип Бобры"
    },
    background: {
      image: "background.jpg",
      position: "center center"
    }
  },

  theme: {
    activePreset: "forest-sand",
    allowSwitcher: false,
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
      }
    }
  },

  primaryActions: [
    {
      label: "Забронировать",
      href: "https://homereserve.ru/gDleLbdhMC",
      meta: "Онлайн-бронирование",
      icon: { type: "platform", name: "booking" }
    },
    {
      label: "Позвонить",
      href: "tel:+79214060607",
      meta: "+7 921 406-06-07",
      icon: { type: "platform", name: "phone" }
    }
  ],

  socials: [
    {
      label: "Instagram",
      meta: "@bobry_country_houses",
      href: "https://instagram.com/bobry_country_houses",
      icon: {
        type: "image",
        src: "https://cdn.simpleicons.org/instagram",
        alt: "Instagram"
      }
    },
    {
      label: "VK",
      meta: "@bobryhouses",
      href: "https://vk.com/bobryhouses",
      icon: {
        type: "image",
        src: "https://cdn.simpleicons.org/vk",
        alt: "VK"
      }
    },
    {
      label: "Telegram",
      meta: "@bobryhouses",
      href: "https://t.me/bobryhouses",
      icon: {
        type: "image",
        src: "https://cdn.simpleicons.org/telegram",
        alt: "Telegram"
      }
    },
    {
      label: "WhatsApp",
      meta: "+7 921 406-06-07",
      href: "https://wa.me/79214060607",
      icon: {
        type: "image",
        src: "https://cdn.simpleicons.org/whatsapp",
        alt: "WhatsApp"
      }
    },
    {
      label: "MAX",
      meta: "Написать в MAX",
      href: "https://max.ru/u/f9LHodD0cOJPFlIMvgwL6YRxq3bvho5sFw8tnhwZDB45g3SDnXQybzzWfxA",
      icon: {
        type: "image",
        src: "max-favicon.png",
        alt: "MAX"
      }
    },
    {
      label: "Отзывы",
      meta: "Яндекс Карты",
      href: "https://yandex.ru/maps/org/bobry_country_houses/169139949040/reviews",
      icon: {
        type: "image",
        src: "https://yandex.ru/maps/favicon.svg",
        alt: "Яндекс"
      }
    },
    {
      label: "Правила проживания",
      meta: "Правила проживания",
      href: "https://bobryhouses.ru/pravila",
      icon: { type: "platform", name: "rules" }
    },
    {
      label: "Сайт",
      meta: "bobryhouses.ru",
      href: "https://bobryhouses.ru/",
      icon: {
        type: "image",
        src: "https://www.google.com/chrome/static/images/favicons/favicon-96x96.png",
        alt: "Google Chrome"
      }
    }
  ]
};
