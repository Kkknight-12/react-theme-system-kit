// Minimal theme initialization to prevent FOUC
(function() {
  try {
    // Get user preferences
    const settings = localStorage.getItem('settings');
    let isDark = false;
    let themePreset = 'default';

    if (settings) {
      try {
        const parsed = JSON.parse(settings);
        isDark = parsed.themeMode === 'dark';
        themePreset = parsed.themePreset || 'default';
      } catch {
        isDark = localStorage.getItem('dark-mode') === 'true';
        themePreset = localStorage.getItem('theme-preset') || 'default';
      }
    } else {
      isDark = localStorage.getItem('dark-mode') === 'true';
      themePreset = localStorage.getItem('theme-preset') || 'default';
    }

    // Apply dark mode
    if (isDark) {
      document.documentElement.classList.add('dark');
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.content = '#242424';
    }

    // Minimal theme data - just enough to prevent FOUC
    const themes = {
      default: { p: '166', s: '303' },  // primary: emerald-500, secondary: purple-500
      blue: { p: '259', s: '47' },      // primary: blue-500, secondary: orange-500
      purple: { p: '303', s: '142' },   // primary: purple-500, secondary: green-500
      orange: { p: '47', s: '259' },    // primary: orange-500, secondary: blue-500
      red: { p: '16', s: '182' },       // primary: rose-500, secondary: teal-500
      teal: { p: '182', s: '206' },     // primary: teal-500, secondary: cyan-500
      indigo: { p: '277', s: '95' },    // primary: indigo-500, secondary: yellow-500
      pink: { p: '354', s: '206' }      // primary: pink-500, secondary: cyan-500
    };

    const t = themes[themePreset];
    if (!t) return;

    // Inject minimal critical styles
    const style = document.createElement('style');
    style.id = 'theme-critical';
    style.textContent = `
      :root {
        --color-primary-500: oklch(0.64 0.20 ${t.p});
        --color-primary-600: oklch(0.54 0.18 ${t.p});
        --color-secondary-500: oklch(0.65 0.2 ${t.s});
        --primary: var(--color-primary-500);
        --secondary: var(--color-secondary-500);
        --accent: oklch(0.94 0.10 ${t.p});
      }
      :root.dark {
        --accent: oklch(0.22 0.10 ${t.p});
      }
    `;
    document.head.appendChild(style);
  } catch {
    // Silently fail if theme initialization fails
  }
})();