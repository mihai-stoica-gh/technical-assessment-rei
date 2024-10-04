import {useTranslations} from 'next-intl';
import LangSwitcher from "./LangSwitcher";
import {Link} from "@/i18n/routing";
import styles from './MobileMenu.module.scss';
import { XIcon, HomeIcon, ClapperboardIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function MobileMenu({setParentShowMenu}: any) {
    const t = useTranslations('Header');
    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = () => {
        setShowMenu(false);
        setTimeout(() => {
            setParentShowMenu(false);
        }, 350);
    }

    useEffect(() => {
        setShowMenu(true);
        return () => {
            setShowMenu(false);
        };
    }, []);

    return (
        <div className={styles.screen}>
            <div className={styles.overlay}></div>
            <div className={styles.scrollContainer}>
                <div className={styles.scrollContent}>
                    <div className={styles.alignRight}>
                        <button onClick={closeMenu}>
                            <XIcon size={28} strokeWidth={1.5} />
                            <span className={styles.sr}>Close</span>
                        </button>
                    </div>
                    <div className={styles.branding}>
                        <h1>MOVIES<span>APP</span></h1>
                    </div>
                    <div className={styles.menu}>
                        <ul>
                            <li>
                                <Link href="/">
                                    <HomeIcon size={24} />
                                    {t('menu_home')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/popular">
                                    <ClapperboardIcon size={24} />
                                    {t('menu_popular')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/toprated">
                                    <ClapperboardIcon size={24} />
                                    {t('menu_toprated')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/upcoming">
                                    <ClapperboardIcon size={24} />
                                    {t('menu_upcoming')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}