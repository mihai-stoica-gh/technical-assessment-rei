import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import styles from './Home.module.scss';
import { ClapperboardIcon, ChevronRightIcon } from 'lucide-react';

export default function Movie({movie}: any) {
    const t = useTranslations('HomePage');

    return (
        <div className={styles.screen}>
            <div className={styles.background}>
                <video playsInline muted loop src="https://pub-4df09a9c990e407fa0e1ea32917f2d33.r2.dev/movie-comp.mp4" autoPlay></video>
                <div className={styles.gradient}></div>
                <div className={styles.gradient}></div>
            </div>
            <div className={styles.foreground}>
                <div className={styles.container}>
                    <p className={styles.line1}>{t('line1')}</p>
                    <p className={styles.line2}>{t('line2')}</p>
                    <div className={styles.buttons}>
                        <Link href={`/popular`} className={styles.button}>
                            <ClapperboardIcon size={20} />
                            {t('button_popular')}
                            <ChevronRightIcon size={18} />
                        </Link>
                        <Link href={`/toprated`} className={styles.button}>
                            <ClapperboardIcon size={20} />
                            {t('button_toprated')}
                            <ChevronRightIcon size={18} />
                        </Link>
                        <Link href={`/upcoming`} className={styles.button}>
                            <ClapperboardIcon size={20} />
                            {t('button_upcoming')}
                            <ChevronRightIcon size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}