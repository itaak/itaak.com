import { ui } from "@i18n/ui"

export type Locale = "fr" | "en" | string;

interface Fallback {
	[key: string]: string
}

export const LOCALES = {
	FR: "fr",
	EN: "en"
} as const

export const DEFAULT_LANGUAGE = "fr"

export const FALLBACK: Fallback = {
	en: "fr",
}

export const SHOW_DEFAULT_LANG = false

export const TRANSLATIONS = ui

export type Lang = keyof typeof TRANSLATIONS