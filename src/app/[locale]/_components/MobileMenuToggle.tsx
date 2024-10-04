'use client';

import {useTranslations} from 'next-intl';
import LangSwitcher from "./LangSwitcher";
import {Link, usePathname} from "@/i18n/routing";
import styles from './Header.module.scss';
import { MenuIcon } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { useState, useEffect } from 'react';

export default function MobileMenuToggle() {
    const pathname = usePathname();

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    useEffect(() => {
        if(showMenu) setShowMenu(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <>
            <button className={styles.button} onClick={toggleMenu}>
                <MenuIcon size={28} />
            </button>
            {showMenu && (
                <MobileMenu setParentShowMenu={setShowMenu}></MobileMenu>
            )}
        </>
    );
}