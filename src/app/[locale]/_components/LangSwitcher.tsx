import { useLocale, useTranslations } from 'next-intl';
import LangSwitcherSelect from './LangSwitcherSelect';
import { routing } from '@/i18n/routing';
import styles from './LangSwitcher.module.scss';

export default function LangSwitcher() {
    const t = useTranslations('LangSwitcher');
    const locale = useLocale();

    return (
        <LangSwitcherSelect defaultValue={locale}>
            {routing.locales.map((locale) => (
                <option key={locale} value={locale}>
                    {t('locale', { locale: locale})}
                </option>
            ))}
        </LangSwitcherSelect>
    )
}