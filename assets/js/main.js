(function () {
  const config = window.AppTemplateConfig;
  if (!config) {
    return;
  }

  const root = document.documentElement;

  const icons = {
    instagram: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"></rect>
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.8"></circle>
        <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor"></circle>
      </svg>
    `,
    vk: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 7.5c.2-.6.6-.8 1.1-.8h1.8c.5 0 .8.2.9.7.4 1.5 1 2.9 1.9 4.1.9 1.2 1.5 1.8 1.9 1.8.2 0 .3-.1.3-.4V7.8c0-.5.2-.8.7-1h2.8c.5 0 .8.3.8.8v3.6c0 .3.1.4.3.4.4 0 1.1-.6 2-1.8.8-1.1 1.4-2.3 1.8-3.6.2-.5.5-.7 1-.7h1.9c.6 0 .9.3.8.9-.2.9-.8 2.1-1.7 3.6-.8 1.3-1.5 2.2-2.2 2.8-.3.2-.3.4 0 .7.3.3.8.7 1.4 1.4.6.6 1.1 1.2 1.4 1.8.2.4.1.8-.4 1h-2.1c-.5 0-.9-.2-1.2-.6l-1.2-1.4c-.4-.4-.7-.7-1-.9-.3-.2-.5-.1-.7.3l-.1 1.1c0 .8-.4 1.3-1.3 1.3-1.3 0-2.7-.8-4.3-2.3-1.5-1.5-2.8-3.5-3.8-6-.2-.4-.2-.7-.1-1Z" fill="currentColor"></path>
      </svg>
    `,
    telegram: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20.2 4.3 3.4 10.8c-.9.4-.9 1.7.1 2L8 14.1l1.7 5c.2.7 1.1.9 1.6.4l2.4-2.3 3.9 2.9c.7.5 1.7.1 1.8-.8l2-13.7c.1-.9-.7-1.6-1.5-1.3Zm-9.6 10 6.8-6.2c.2-.2.5.1.3.3l-5.5 7.4-.2 2.7-1.4-4.2Z" fill="currentColor"></path>
      </svg>
    `,
    whatsapp: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3.3a8.7 8.7 0 0 0-7.5 13.2L3.3 21l4.6-1.2A8.7 8.7 0 1 0 12 3.3Zm0 15.7c-1.3 0-2.5-.4-3.6-1l-.2-.1-2.7.7.7-2.6-.2-.3A6.8 6.8 0 1 1 12 19Zm3.9-5.1-.7-.4c-.3-.2-.6-.2-.8.1l-.5.6c-.2.2-.4.2-.7.1-.7-.3-1.6-1-2.2-2-.2-.3-.2-.5 0-.7l.4-.5c.2-.2.2-.5.1-.8l-.3-.8c-.2-.4-.5-.5-.8-.5h-.6c-.2 0-.5.1-.7.3-.7.7-1 1.6-1 2.5 0 .6.2 1.3.6 2 .9 1.7 2.6 3.2 4.5 3.9.7.3 1.4.4 2.1.3.6 0 1.3-.3 1.8-.8.4-.4.6-.9.7-1.3.1-.3-.1-.5-.3-.6Z" fill="currentColor"></path>
      </svg>
    `,
    reviews: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 5h14v10H8l-3 3V5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"></path>
        <path d="m10 9 .9 1.8 2-.3-1.4 1.5.4 2-1.9-1-1.9 1 .4-2-1.4-1.5 2 .3L10 9Z" fill="currentColor"></path>
      </svg>
    `,
    home: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 10.3 12 4l8 6.3V20H4v-9.7Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"></path>
        <path d="M10 20v-5h4v5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
      </svg>
    `,
    phone: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7.8 4.8h2.1c.5 0 .9.4 1 .9l.4 2.4c.1.5-.2 1-.7 1.2l-1.4.6a13 13 0 0 0 5 5l.6-1.4c.2-.5.7-.8 1.2-.7l2.4.4c.5.1.9.5.9 1v2.1c0 .6-.5 1.1-1.1 1.1C10 18.8 5.2 14 5.2 5.9c0-.6.5-1.1 1.1-1.1Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"></path>
      </svg>
    `,
    globe: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"></circle>
        <path d="M3 12h18M12 3c2.8 2.7 2.8 15.3 0 18M12 3c-2.8 2.7-2.8 15.3 0 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      </svg>
    `
  };

  renderStaticContent(config);
  applyBackground(config.site?.background);
  renderChips(config.site?.infoChips || []);
  renderActions(config.primaryActions || []);
  renderSocials(config.socials || [], icons);
  renderThemeSwitcher(config.theme || {});
  setTheme((config.theme && config.theme.activePreset) || "", config.theme || {});

  function renderStaticContent(data) {
    setText("pageTitle", data.site?.pageTitle || "Digital Card Template", true);
    setText("brandTagline", data.site?.tagline || "");
    setText("brandName", data.site?.name || "");
    setText("brandDescription", data.site?.description || "");
    setText("socialCaption", data.sections?.socialCaption || "");
    setText("socialTitle", data.sections?.socialTitle || "");
    setText("socialDescription", data.sections?.socialDescription || "");
    setText("footerNote", data.site?.footerNote || "");

    const logoEl = document.getElementById("logoImage");
    if (!logoEl) return;
    if (data.site?.logo?.src) {
      logoEl.src = data.site.logo.src;
    }
    logoEl.alt = data.site?.logo?.alt || "Логотип";
  }

  function applyBackground(background) {
    if (!background) return;
    if (background.image) {
      root.style.setProperty("--bg-image", `url("${background.image}")`);
    }
    if (background.position) {
      root.style.setProperty("--bg-position", background.position);
    }
  }

  function renderChips(chips) {
    const container = document.getElementById("infoChips");
    if (!container) return;
    container.innerHTML = "";
    chips.forEach((chip) => {
      const span = document.createElement("span");
      span.className = "chip";
      span.textContent = chip;
      container.appendChild(span);
    });
  }

  function renderActions(actions) {
    const container = document.getElementById("primaryActions");
    if (!container) return;
    container.innerHTML = "";
    actions.forEach((action) => {
      const link = document.createElement("a");
      link.className = `action-link ${action.style === "secondary" ? "secondary" : "primary"}`;
      link.href = action.href || "#";
      link.textContent = action.label || "Ссылка";
      applyTarget(link, action.href);
      container.appendChild(link);
    });
  }

  function renderSocials(socials, iconMap) {
    const container = document.getElementById("socialLinks");
    if (!container) return;
    container.innerHTML = "";

    socials.forEach((social) => {
      const link = document.createElement("a");
      link.className = "social-link";
      link.href = social.href || "#";
      applyTarget(link, social.href);

      const iconWrap = document.createElement("span");
      iconWrap.className = "icon-wrap";
      iconWrap.appendChild(buildIconNode(social.icon, iconMap));

      const text = document.createElement("span");
      text.className = "social-text";

      const label = document.createElement("p");
      label.className = "social-label";
      label.textContent = social.label || "Ссылка";

      const meta = document.createElement("p");
      meta.className = "social-meta";
      meta.textContent = social.meta || social.href || "";

      text.appendChild(label);
      text.appendChild(meta);

      link.appendChild(iconWrap);
      link.appendChild(text);
      container.appendChild(link);
    });
  }

  function renderThemeSwitcher(theme) {
    const container = document.getElementById("themeSwitcher");
    if (!container) return;
    container.innerHTML = "";

    if (!theme.allowSwitcher || !theme.presets) {
      return;
    }

    Object.entries(theme.presets).forEach(([presetKey, preset]) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "theme-btn";
      btn.dataset.preset = presetKey;
      btn.textContent = preset.label || presetKey;
      btn.addEventListener("click", () => setTheme(presetKey, theme));
      container.appendChild(btn);
    });
  }

  function setTheme(presetKey, theme) {
    if (!theme.presets) return;
    const keys = Object.keys(theme.presets);
    const selectedKey = keys.includes(presetKey) ? presetKey : keys[0];
    const selected = theme.presets[selectedKey];
    if (!selected || !selected.colors) return;

    Object.entries(selected.colors).forEach(([name, value]) => {
      root.style.setProperty(`--${name}`, value);
    });

    const buttons = document.querySelectorAll(".theme-btn");
    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.preset === selectedKey);
    });
  }

  function buildIconNode(iconConfig, iconMap) {
    if (iconConfig && iconConfig.type === "image" && iconConfig.src) {
      const img = document.createElement("img");
      img.src = iconConfig.src;
      img.alt = iconConfig.alt || "";
      img.loading = "lazy";
      return img;
    }

    if (iconConfig && iconConfig.type === "inline-svg" && iconConfig.svg) {
      const wrapper = document.createElement("span");
      wrapper.innerHTML = iconConfig.svg.trim();
      return wrapper.firstElementChild || createFallbackIcon(iconMap);
    }

    const platform = iconConfig && iconConfig.name ? iconConfig.name : "globe";
    const iconMarkup = iconMap[platform] || iconMap.globe;
    const wrapper = document.createElement("span");
    wrapper.innerHTML = iconMarkup.trim();
    return wrapper.firstElementChild || createFallbackIcon(iconMap);
  }

  function createFallbackIcon(iconMap) {
    const wrapper = document.createElement("span");
    wrapper.innerHTML = (iconMap.globe || "").trim();
    return wrapper.firstElementChild || document.createTextNode("•");
  }

  function setText(elementId, value, isDocumentTitle) {
    const nextValue = value || "";
    if (isDocumentTitle) {
      document.title = nextValue;
    }
    const node = document.getElementById(elementId);
    if (!node) return;
    node.textContent = nextValue;
  }

  function applyTarget(anchorEl, href) {
    if (!href) return;
    if (/^https?:\/\//i.test(href)) {
      anchorEl.target = "_blank";
      anchorEl.rel = "noopener noreferrer";
    }
  }
})();
