import {useTranslations} from 'next-intl';
import styles from './Category.module.scss';
import Movie from "./Movie";

import type {MovieType} from '@/types/tmdb';

export default function PopularMovies({title, movies}: {title: string, movies: MovieType[]}) {
    const t = useTranslations('PopularPage');

    return (
        <div className={styles.screen}>
            <div className={styles.foreground}>
                <div className={styles.container}>
                    <h1>{title}</h1>
                    <div className={styles.grid}>
                        {movies.map((movie: MovieType) => {
                            return (
                                <div key={movie.id} className={styles.item}>
                                    <Movie movie={movie}></Movie>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}