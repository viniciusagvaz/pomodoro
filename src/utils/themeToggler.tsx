import { useEffect, useState } from 'react';

type Themes = 'dark' | 'light';

export function ThemeToggler() {
  const [theme, setTheme] = useState<Themes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return handleThemeChange;
}
