const KEY = '0e67fb79d752f59394a3aa358d9abf8d';
export const URL = 'https://api.themoviedb.org/3/';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';


/* const GURL = 'https://sheets.googleapis.com/v4/spreadsheets'; */
/* const GTID = '1MkRvOyanHhb5KT3MkkuUQwh3z7fy4-UB22240FMbglM';
const APIGKEY = 'AIzaSyAXZBENak9u6rX-A1nVG9PR4spYHyXYXlY' */
/* const range = 'Sheet1!A1:C5'; */

async function fetchWithErrorHandling(url = '') {
    const response = await fetch(url);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}



export function fetchTrendingMovies() {
    return fetchWithErrorHandling(`${URL}trending/movie/week?api_key=${KEY}`);
}

export function fetchSearchMovies(querry) {
    return fetchWithErrorHandling(`${URL}search/movie?api_key=${KEY}&language=en-US&query=${querry}&include_adult=false`);
}

export function fetchMoviesById(FilmId) {
    return fetchWithErrorHandling(`${URL}movie/${FilmId}?api_key=${KEY}&language=en-US`);
}


export function fetchCastMovie(FilmId) {
    return fetchWithErrorHandling(`${URL}movie/${FilmId}/credits?api_key=${KEY}&language=en-US`);
}


export function fetchReviewMovie(FilmId) {
    return fetchWithErrorHandling(`${URL}movie/${FilmId}/reviews?api_key=${KEY}&language=en-US`);
}


/* async function googleFetch(url = '') {
    const response = await fetch(url);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
} */
/* %21A1%3AC4 */
/* export function fetchGoogleTable() {
    return googleFetch(`${GURL}/${GTID}/values/Sheet1?key=${APIGKEY}`);
} */
/* const CSS_KEY = '/api/v1/open_events.ics';
const CSS_SUB = 'habemus.app';
const CSS_URL = 'https://corpssaxonialeipzig.de.';

async function cssFetch(url = '') {
    const response = await fetch(url);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchCSSTable() {
    return cssFetch(`${CSS_URL}${CSS_SUB}${CSS_KEY}`);
}  */