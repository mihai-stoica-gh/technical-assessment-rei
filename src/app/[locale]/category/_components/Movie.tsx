import {useTranslations} from 'next-intl';
import Image from "next/image";
import styles from './Movie.module.scss';
import { Link } from '@/i18n/routing';
import { CalendarDaysIcon, StarIcon, ChevronRightIcon } from 'lucide-react';
import moment from 'moment';

export default function Movie({movie}: any) {
    const t = useTranslations('CategoryPage');

    return (
        <div className={styles.movie}>
            <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} poster`}
                width={300}
                height={450}
            />
            <div className={styles.overlay}>
                <div className={styles.background}></div>
                <div className={styles.background}></div>
                <div className={styles.foreground}>
                    <h2 className={styles.title}>{movie.title}</h2>
                    <p className={styles.meta}>
                        <span>
                            <CalendarDaysIcon size={18} />
                            {moment(movie.release_date).format('YYYY')}
                        </span>
                        <span>
                            <StarIcon size={18} />
                            {Math.round(movie.vote_average)}/10
                        </span>
                    </p>
                    <Link href={`/movie/${movie.id}`} className={styles.button}>
                        {t('view_more')}
                        <ChevronRightIcon size={18} />
                    </Link>
                </div>
            </div>
        </div>
    )
}