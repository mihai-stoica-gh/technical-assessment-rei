import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import Movie from './_components/Movie';

const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Fetch movie data from the TMDb API
async function fetchMovie(movieId: string, locale: string) {
    let lang = '';
    switch(locale) {
        case "ro": lang = 'ro-RO'; break;
        default: lang = 'en-US';
    }

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=${lang}&append_to_response=credits`
    );
  
    if (!res.ok) {
        console.error('Movie not found or fetch error');
        return null;
    }
  
    return res.json();
}
 
export async function generateMetadata({
        params: {
            locale,
            movieId,
        }
    }: Readonly<{
        params: {
            locale: string,
            movieId: string,
        };
    }>) {
        
    const movie = await fetchMovie(movieId, locale);
    if (!movie) {
        return {
            title: '-'
        };
    }

    return {
        title: 'MoviesApp - ' + movie.title
    };
}

type PageProps = {
    params: {
        locale: string;
        movieId: string;
    };
};

export default async function Page({params: {locale, movieId}}: PageProps) {
    const t = await getTranslations('MoviePage');

    const movie = await fetchMovie(movieId, locale);
    if (!movie) {
        notFound();
    }

    return (
        <Movie movie={movie}></Movie>
    );
}
