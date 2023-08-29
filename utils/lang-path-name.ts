export const langPathName = (pathName: string, locale: string) => {
    if (!pathName) return '/';

    return `/${locale}` + `${pathName}`;
};
