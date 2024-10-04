'use client';

import {useTranslations} from 'next-intl';
import {usePathname} from "@/i18n/routing";
import styles from './MobileMenuToggle.module.scss';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import { MenuIcon } from 'lucide-react';

export default function MobileMenuToggle() {
    const t = useTranslations('Header');

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    // Hide menu after switching pages
    const pathname = usePathname();
    useEffect(() => {
        if(showMenu) setShowMenu(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <>
            <button type="button" onClick={toggleMenu}>
                <MenuIcon size={28} />
                <span className={styles.sr}>{t('menu')}</span>
            </button>
            {showMenu && (
                <MobileMenu setParentShowMenu={setShowMenu}></MobileMenu>
            )}
        </>
    );
}