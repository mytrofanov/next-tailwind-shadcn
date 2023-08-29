export interface AccountSettings {
    title: string;
}

export interface AccountDictionary {
    accountSettings: AccountSettings;
}

export interface HeaderDictionary {
    home: string;
    register: string;
    about: string;
    account: string;
}

export interface ModeToggleDictionary {
    light: string;
    dark: string;
    system: string;
}

export interface Dictionary {
    account: AccountDictionary;
    header: HeaderDictionary;
    modeToggle: ModeToggleDictionary;
}
