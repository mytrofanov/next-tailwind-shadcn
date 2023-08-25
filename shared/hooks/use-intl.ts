'use client';

import { useIntl as Intl } from 'react-intl';
import type { PrimitiveType, FormatXMLElementFn, Options } from 'intl-messageformat';

type IntlValuesType = Record<string, PrimitiveType | FormatXMLElementFn<string, string>> | undefined;
type IntlOptionsType = Options | undefined;

interface UseIntlAPI {
    fm: (id: string, values?: IntlValuesType, opts?: IntlOptionsType) => string;
}

const useIntl = (): UseIntlAPI => {
    const intl = Intl();
    return {
        fm: (id, values, opts) => intl.formatMessage({ id }, values, opts),
    };
};

export default useIntl;
