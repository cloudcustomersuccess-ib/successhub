'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Globe, Sun, Moon, ChevronDown } from 'lucide-react';
import { useThemeMode } from '@/lib/theme-registry';
import { useLanguage } from '@/lib/i18n/language-provider';
import type { Language as LanguageCode } from '@/lib/i18n/types';
import { cn } from '@/lib/utils';

const navigationItems = [
  { label: 'Onboarding', href: '/onboarding' },
  { label: 'StreamOne ION', href: '/streamone-ion' },
  { label: 'Fabricantes', href: '/fabricantes' },
  { label: 'Soporte', href: '/soporte' },
  { label: 'Growth Lab', href: '/growth-lab' },
];

const languages: { code: LanguageCode; label: string }[] = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
];

export default function GlobalHeader() {
  const pathname = usePathname();
  const { mode, toggleTheme } = useThemeMode();
  const { language, setLanguage } = useLanguage();
  const [searchValue, setSearchValue] = useState('');
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const logoUrl =
    mode === 'light'
      ? 'https://i.imgur.com/RTXa1q1.png'
      : 'https://i.imgur.com/uWm1GT5.png';

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="flex h-14 items-center gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoUrl} alt="TD SYNNEX" className="h-7 object-contain" />
            <div className="h-5 w-px bg-[var(--border)]" />
            <span className="text-sm font-semibold text-[var(--foreground)]">CX</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                  isActive(item.href)
                    ? 'text-[#005657]'
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-[60%] bg-[#005657] rounded-t" />
                )}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--muted)] px-3 py-1.5 min-w-[180px] focus-within:border-[#005657] transition-colors"
          >
            <Search className="h-3.5 w-3.5 text-[var(--muted-foreground)] shrink-0" />
            <input
              type="text"
              placeholder="Buscar..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-1 bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none"
            />
          </form>

          {/* Language Dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium uppercase text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              {language}
              <ChevronDown className="h-3 w-3" />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 w-36 rounded-lg border border-[var(--border)] bg-[var(--background)] shadow-lg py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                    className={cn(
                      'w-full px-3 py-1.5 text-left text-sm transition-colors',
                      lang.code === language
                        ? 'text-[#005657] font-semibold bg-[var(--accent-subtle)]'
                        : 'text-[var(--foreground)] hover:bg-[var(--muted)]'
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-md p-1.5 text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="Toggle theme"
          >
            {mode === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
