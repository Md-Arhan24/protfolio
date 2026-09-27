import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'light', // 'light' (white+golden) or 'dark' (black+golden)
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('arhan_portfolio_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return 'light'; // default white+golden
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('arhan_portfolio_theme', theme);
    } catch (e) {
      console.error(e);
    }

    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
