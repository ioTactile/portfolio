export const availableLocales = ['en', 'fr'] as const;

export type Locale = (typeof availableLocales)[number];

export const DEFAULT_LOCALE: Locale = 'fr';

export function isLocale(value: string): value is Locale {
	return (availableLocales as readonly string[]).includes(value);
}
