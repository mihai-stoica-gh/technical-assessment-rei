import {useTranslations} from 'next-intl';
import LangSwitcher from './LangSwitcher';
import {Link} from "@/i18n/routing";
import styles from './Header.module.scss';
import { HomeIcon, ClapperboardIcon } from 'lucide-react';
import MobileMenuToggle from './MobileMenuToggle';

export default function Header() {
    const t = useTranslations('Header');

    return (
        <header className={styles.header}>
            <div className={styles.background}></div>
            <div className={styles.background}></div>
            <div className={styles.foreground}>
                <div className={styles.container}>
                    <div className={styles.branding}>
                        <h1>MOVIES<span>APP</span></h1>
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
                                <Link href="/category/popular">
                                    <ClapperboardIcon size={20} />
                                    {t('menu_popular')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/toprated">
                                    <ClapperboardIcon size={20} />
                                    {t('menu_toprated')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/upcoming">
                                    <ClapperboardIcon size={20} />
                                    {t('menu_upcoming')}
                                </Link>
                            </li>
                        </ul>
                        <LangSwitcher></LangSwitcher>
                    </div>
                    <div className={styles.mobileMenu}>
                        <MobileMenuToggle></MobileMenuToggle>
                    </div>
                </div>
            </div>
        </header>
    );
}