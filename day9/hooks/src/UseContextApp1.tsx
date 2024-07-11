import { useState } from 'react';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

export default function UseContextApp1() {
  const [isDark, setIsDark] = useState(false);
  return (
    <UserContext.Provider value={String(isDark)}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
