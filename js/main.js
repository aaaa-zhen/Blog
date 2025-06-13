  // 暗黑模式切换
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // 更新图标函数
  function updateThemeIcon(isDark) {
      themeToggle.textContent = isDark ? '🌙' : '☀️';
  }
  
  // 初始化主题
  if (prefersDarkScheme.matches) {
      document.body.setAttribute('data-theme', 'dark');
      updateThemeIcon(true);
  } else {
      updateThemeIcon(false);
  }

  // 监听系统主题变化
  prefersDarkScheme.addEventListener('change', (e) => {
      if (e.matches) {
          document.body.setAttribute('data-theme', 'dark');
          updateThemeIcon(true);
      } else {
          document.body.removeAttribute('data-theme');
          updateThemeIcon(false);
      }
  });

  themeToggle.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      if (currentTheme === 'dark') {
          document.body.removeAttribute('data-theme');
          updateThemeIcon(false);
      } else {
          document.body.setAttribute('data-theme', 'dark');
          updateThemeIcon(true);
      }
  });