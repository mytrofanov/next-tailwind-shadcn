import React from 'react';
import { IntlProvider } from 'react-intl';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';

import { useGlobalStore } from '@/store/global.store';
import { selectLocaleMessages } from '@/localization/locale.service';

dayjs.locale('en');

interface ConfigurationProps {
    children: React.ReactNode;
}

const LocaleProvider = (props: ConfigurationProps) => {
    const { children } = props;

    const [state] = useGlobalStore();

    const { messages } = React.useMemo(() => {
        dayjs.locale(state.locale);
        return {
            messages: selectLocaleMessages(state.locale),
        };
    }, [state.locale]);

    return (
        <IntlProvider messages={messages} locale={state.locale} defaultLocale={state.defaultLocale}>
            {children}
        </IntlProvider>
    );
};

export default LocaleProvider;
