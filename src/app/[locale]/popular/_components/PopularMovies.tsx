import {useTranslations} from 'next-intl';
import Movie from "./Movie";
import styles from './PopularMovies.module.scss';
import type {MovieType} from '@/types/tmdb';

export default function PopularMovies({movies}: {movies: MovieType[]}) {
    const t = useTranslations('PopularPage');

    return (
        <div className={styles.screen}>
            <div className={styles.foreground}>
                <div className={styles.container}>
                    <h1>Popular movies</h1>
                    <div className={styles.movies}>
                        {movies.map((movie: any) => {
                            return (
                                <Movie key={movie.id} movie={movie}></Movie>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}