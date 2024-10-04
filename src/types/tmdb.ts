export type MovieType = {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    genres: {
        name: string
    }[];
    credits?: {
        cast: {
            id: number;
            name: string;
        }[];
        crew: {
            id: number;
            name: string;
            job: string;
        }[];
    }

}