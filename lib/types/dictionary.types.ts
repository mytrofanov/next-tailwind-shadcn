interface AccountSettings {
    title: string;
}

interface AccountDictionary {
    accountSettings: AccountSettings;
}

interface HeaderDictionary {
    home: string;
    register: string;
    about: string;
    account: string;
}

interface ModeToggleDictionary {
    light: string;
    dark: string;
    system: string;
}

interface Dictionary {
    account: AccountDictionary;
    header: HeaderDictionary;
    modeToggle: ModeToggleDictionary;
}
