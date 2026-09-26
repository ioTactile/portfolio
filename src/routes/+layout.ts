import type { LayoutLoad } from './$types';
import { DEFAULT_LOCALE, isLocale, type Locale } from '$lib/i18n/locales';
import { getDictionary } from '$lib/i18n';

export const load: LayoutLoad = async ({ url, data }) => {
  const urlLocale = url.searchParams.get('lang');
  const initialLocale: Locale = urlLocale && isLocale(urlLocale) ? urlLocale : DEFAULT_LOCALE;

  const messages = getDictionary(initialLocale);

  const parentData = (data ?? {}) as Record<string, unknown>;

  return {
    ...parentData,
    locale: initialLocale,
    messages,
  };
};
