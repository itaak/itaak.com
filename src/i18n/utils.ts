import { DEFAULT_LANGUAGE, SHOW_DEFAULT_LANG, LOCALES } from '@i18n/config';
import { ui } from '@i18n/ui';

export function getLocaleFromSlug(url: string): string {
  if (url === undefined) return ""
  const parts = url.split('/').filter(function (el) {return el !== ''})
  let match = ''
  parts.forEach((part)=>{
    if (Object.values(LOCALES).map(locale => locale.toLowerCase()).includes(part.toLowerCase())) match = part
  })
  if (match) return match
  return DEFAULT_LANGUAGE;
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return DEFAULT_LANGUAGE;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof DEFAULT_LANGUAGE]) {
    return ui[lang][key] || ui[DEFAULT_LANGUAGE][key];
  }
}

export function useLanguage(url: URL) {
    const lang = getLangFromUrl(url);
    const t = useTranslations(lang);
  
    return { lang, t };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !SHOW_DEFAULT_LANG && l === DEFAULT_LANGUAGE ? path : `/${l}${path}`
  }
}