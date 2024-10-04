import {useTranslations} from 'next-intl';
import Image from "next/image";
import styles from './Movie.module.scss';
import { CalendarDaysIcon, StarIcon, FlagIcon } from 'lucide-react';
import moment from 'moment';

export default function Movie({movie}: any) {
    const t = useTranslations('MoviePage');

    return (
        <div className={styles.container}>
            <div className={styles.background} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`}}></div>
            <div className={styles.movie}>
                <div className={styles.cover}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={`${movie.title} poster`}
                        width={300}
                        height={450}
                    />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    <div className={styles.meta}>
                        <span>
                            <CalendarDaysIcon size={18} />
                            <strong>{t('movie_release_date')}:</strong> {moment(movie.release_date).format('MM/DD/YYYY')}
                        </span>
                        <span>
                            <StarIcon size={18} />
                            <strong>{t('movie_rating')}:</strong> {Math.round(movie.vote_average)}/10
                        </span>
                        <span>
                            <FlagIcon size={18} />
                            <strong>{t('movie_genres')}:</strong> {movie.genres.map((genre: any) => genre.name).join(', ')}
                        </span>
                    </div>
                    <p className={styles.overview}>{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}