import type { MessageFormatElement } from 'react-intl';
import flat from 'flat';

import en from './translations/en';
import ua from './translations/ua';

const locales = {
    en: 'en-US',
    ua: 'uk-UA',
};

const selectLocaleMessages = (locale: string): Record<string, MessageFormatElement[]> | undefined => {
    if (locale === locales.en) {
        return flat(en);
    }
    if (locale === locales.ua) {
        return flat(ua);
    }
};

export { locales, selectLocaleMessages };
