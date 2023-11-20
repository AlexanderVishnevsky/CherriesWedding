'use client';

import { LocaleType } from '@typings/model';

import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

interface RType {
    lang: LocaleType;
    handleSwitchTranslation: (T: LocaleType) => Promise<void>;
}

export const useSwitchLanguage = (): RType => {
    const { lang } = useTranslation();

    const handleSwitchTranslation = async (locale: LocaleType): Promise<void> => {
        if (lang !== locale) {
            await setLanguage(locale);
        }
    };

    return { lang: lang as LocaleType, handleSwitchTranslation };
};
