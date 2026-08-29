import type { Locale } from './locales';
import en from '../../../i18n/en/index.json';
import fr from '../../../i18n/fr/index.json';

const dictionaries = {
	en,
	fr
} as const satisfies Record<Locale, Record<string, unknown>>;

export type Messages = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale) {
	return dictionaries[locale];
}
