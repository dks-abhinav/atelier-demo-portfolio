import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  compact?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ compact = false }) => {
  const { themeMode, resolvedTheme, setThemeMode, toggleTheme } = useTheme();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    // Keyboard shortcut: press 's' or 'S' to restore system preference
    if (e.key === 's' || e.key === 'S') {
      e.preventDefault();
      setThemeMode('system');
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    // Secondary interaction: right-click to restore system preference
    e.preventDefault();
    setThemeMode('system');
  };

  const isLight = resolvedTheme === 'light';
  const label = isLight 
    ? `Switch to dark theme (current: ${themeMode === 'system' ? 'System Light' : 'Light'})` 
    : `Switch to light theme (current: ${themeMode === 'system' ? 'System Dark' : 'Dark'})`;
  const tooltip = isLight 
    ? 'Switch to dark theme (Right-click or press "S" for system preference)' 
    : 'Switch to light theme (Right-click or press "S" for system preference)';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      onContextMenu={handleContextMenu}
      aria-label={label}
      title={tooltip}
      className="inline-flex items-center justify-center rounded border border-[#DDD5C7] dark:border-[#274C3F] bg-[#FFFFFF] dark:bg-[#173D32] text-[#173D32] dark:text-[#F5F0E6] hover:bg-[#EFE9DF] dark:hover:bg-[#1E463A] transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#BD805B] cursor-pointer shadow-xs shrink-0 w-9 h-9 p-0"
    >
      {isLight ? (
        <Moon className="w-4 h-4 text-[#173D32]" aria-hidden="true" />
      ) : (
        <Sun className="w-4 h-4 text-[#BD805B]" aria-hidden="true" />
      )}
    </button>
  );
};

