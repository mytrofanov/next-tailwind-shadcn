'use client';

import React from 'react';

import { locales } from '@/localization';
import { StoreAction } from '../lib/types';
import { LocaleType } from '@/localization/locale-types';

interface GlobalStore {
    isAuthenticated: boolean;
    defaultLocale: LocaleType;
    locale: LocaleType;
}

type GlobalStoreActions = StoreAction<'reset'> | StoreAction<'locale-set', LocaleType>;

const initialStoreState: GlobalStore = {
    isAuthenticated: false,
    defaultLocale: locales.en,
    locale: locales.en,
};

const storeReducer = (state: GlobalStore, action: GlobalStoreActions): GlobalStore => {
    if (action.type === 'reset') {
        return {
            ...state,
            isAuthenticated: false,
        };
    }
    if (action.type === 'locale-set') {
        return {
            ...state,
            locale: action.payload ?? locales.en,
        };
    }

    return state;
};

const GlobalStoreStateContext = React.createContext<GlobalStore>(initialStoreState);
const GlobalStoreDispatchContext = React.createContext<React.Dispatch<GlobalStoreActions> | null>(null);

const useGlobalStore = () => {
    const state = React.useContext(GlobalStoreStateContext);
    const dispatch = React.useContext(GlobalStoreDispatchContext);
    return [state, dispatch] as [GlobalStore, React.Dispatch<GlobalStoreActions>];
};

interface GlobalStoreProps {
    children: React.ReactNode;
}

const GlobalStoreProvider = (props: GlobalStoreProps) => {
    const { children } = props;
    const [state, dispatch] = React.useReducer(storeReducer, initialStoreState);

    return (
        <GlobalStoreStateContext.Provider value={state}>
            <GlobalStoreDispatchContext.Provider value={dispatch}>{children}</GlobalStoreDispatchContext.Provider>
        </GlobalStoreStateContext.Provider>
    );
};

export type { GlobalStore };
export { useGlobalStore, GlobalStoreProvider };
