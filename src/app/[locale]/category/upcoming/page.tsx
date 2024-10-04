import {unstable_setRequestLocale, getTranslations} from 'next-intl/server';
import Category from './../_components/Category';
import { notFound } from 'next/navigation';

const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Fetch movie data from the TMDb API
async function fetchMovies(locale: string) {
    let lang = '';
    switch(locale) {
        case "ro": lang = 'ro-RO'; break;
        default: lang = 'en-US';
    }

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=${lang}&page=1`,
      { next: { revalidate: 60 } } // ISR: revalidate data every 60 seconds
    );
  
    if (!res.ok) {
        console.error('Fetch error');
        return null;
    }
  
    return res.json();
}
 
export async function generateMetadata({
        params: {locale}
    }: Readonly<PageProps>) {
    const t = await getTranslations('UpcomingPage');

    return {
        title: 'MoviesApp - ' + t('title')
    };
}

type PageProps = {
    params: {
        locale: string;
    };
};

export default async function Page({params: {locale}}: PageProps) {
    unstable_setRequestLocale(locale);
    const t = await getTranslations('UpcomingPage');

    const data = await fetchMovies(locale);
    if(!data) {
        notFound();
    }
    const movies = data.results;

    return (
        <Category title={t('title')} movies={movies}></Category>
    );
}
