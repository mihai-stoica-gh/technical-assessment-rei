import {useTranslations} from 'next-intl';
import Image from "next/image";
import styles from './Movie.module.scss';

export default function Movie({movie}: any) {
    const t = useTranslations('MoviePage');

    return (
        <div className={styles.container}>
            <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} poster`}
                width={300}
                height={450}
            />
            <h1 className={styles.title}>{movie.title}</h1>
            <p className={styles.overview}>{movie.overview}</p>
            <p>
                <strong>{t('movie_release_date')}:</strong> {movie.release_date}
            </p>
            <p>
                <strong>{t('movie_rating')}:</strong> {movie.vote_average}/10
            </p>
            <p>
                <strong>{t('movie_genres')}:</strong> {movie.genres.map((genre: any) => genre.name).join(', ')}
            </p>
        </div>
    )
}