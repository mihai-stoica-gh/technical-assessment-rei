import {useTranslations} from 'next-intl';
import Movie from "./Movie";
import styles from './PopularMovies.module.scss';

export default function PopularMovies({movies}: any) {
    const t = useTranslations('PopularPage');

    return (
        <div className={styles.container}>
            <h1>Popular movies this month</h1>
            <div className={styles.movies}>
                {movies.map((movie: any) => {
                    return (
                        <Movie key={movie.id} movie={movie}></Movie>
                    )
                })}
            </div>
        </div>
    )
}