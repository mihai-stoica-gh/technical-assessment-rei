import {useTranslations} from 'next-intl';
import LangSwitcher from "./LangSwitcher";
import {Link} from "@/i18n/routing";
import styles from './Header.module.scss';
import { HomeIcon, StarIcon } from 'lucide-react';

export default function Header() {
    const t = useTranslations('Header');

    return (
        <header className={styles.header}>
            <div className={styles.background}></div>
            <div className={styles.container}>
                <div className={styles.branding}>
                    <h1>MoviesApp</h1>
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li>
                            <Link href="/">
                                <HomeIcon size={20} />
                                {t('menu_home')}
                            </Link>
                        </li>
                        <li>
                            <Link href="/popular">
                                <StarIcon size={20} />
                                {t('menu_popular')}
                            </Link>
                        </li>
                    </ul>
                    <LangSwitcher></LangSwitcher>
                </div>
            </div>
        </header>
    );
}