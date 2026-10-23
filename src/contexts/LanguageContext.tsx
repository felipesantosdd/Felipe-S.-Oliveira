"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Lang, Translation } from "@/i18n/types";
import { pt } from "@/i18n/pt";
import { en } from "@/i18n/en";

const TRANSLATIONS: Record<Lang, Translation> = { pt, en };

interface LanguageContextValue {
  lang: Lang;
  t: Translation;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: en,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "en" || saved === "pt") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, t: TRANSLATIONS[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
