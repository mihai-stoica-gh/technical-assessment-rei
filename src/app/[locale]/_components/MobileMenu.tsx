import {useTranslations} from 'next-intl';
import {Link} from "@/i18n/routing";
import styles from './MobileMenu.module.scss';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import LangSwitcher from './LangSwitcher';
import { XIcon, HomeIcon, ClapperboardIcon } from 'lucide-react';

export default function MobileMenu({setParentShowMenu}: {
    setParentShowMenu: Dispatch<SetStateAction<boolean>>
}) {
    const t = useTranslations('Header');

    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = () => {
        setShowMenu(false);
        setTimeout(() => {
            setParentShowMenu(false);
        }, 350);
    }

    // Show menu on mount
    useEffect(() => {
        setShowMenu(true);
    }, []);

    return (
        <div className={styles.screen}>
            <div className={styles.overlay + (showMenu ? ' '+styles.showOverlay:'')}></div>
            <div className={styles.scrollContainer + (showMenu ? ' '+styles.showScrollContent:'')}>
                <div className={styles.scrollContent}>
                    <div className={styles.branding}>
                        <h1>MOVIES<span>APP</span></h1>
                        <button type="button" onClick={closeMenu}>
                            <XIcon size={28} strokeWidth={1.5} />
                            <span className={styles.sr}>{t('close')}</span>
                        </button>
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
                </div>
            </div>
        </div>
    );
}