import {useTranslations} from 'next-intl';
import styles from './Movie.module.scss';
import Image from "next/image";
import { CalendarDaysIcon, StarIcon, FlagIcon, UserRoundIcon } from 'lucide-react';
import moment from 'moment';

import type {MovieType} from '@/types/tmdb';

export default function Movie({movie}: {movie: MovieType}) {
    const t = useTranslations('MoviePage');

    const directors = movie.credits?.crew.filter((cast) => cast.job === 'Director') ?? [];
    const cast = movie.credits?.cast.slice(0, 5) ?? [];

    return (
        <div className={styles.screen}>
            <div className={styles.background} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`}}></div>
            <div className={styles.foreground}>
                <div className={styles.container}>
                    <div className={styles.movie}>
                        <div className={styles.cover}>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={`${movie.title} poster`}
                                width={400}
                                height={600}
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
                                    <strong>{t('movie_genres')}:</strong> {movie.genres.map((genre) => genre.name).join(', ')}
                                </span>
                            </div>
                            <div className={styles.section}>
                                <p className={styles.sectionTitle}>{t('movie_overview')}</p>
                                <p>{movie.overview}</p>
                            </div>
                            {!!directors.length && (
                                <div className={styles.section}>
                                    <p className={styles.sectionTitle}>{t('movie_director')}</p>
                                    {directors.map((director) => {
                                        return (
                                            <p key={director.id}>{director.name}</p>
                                        )
                                    })}
                                </div>
                            )}
                            {!!cast.length && (
                                <div className={styles.section}>
                                    <p className={styles.sectionTitle}>{t('movie_cast')}</p>
                                    {cast.map((cast) => {
                                        return (
                                            <p key={cast.id}>{cast.name}</p>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}