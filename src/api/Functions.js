const KEY = '0e67fb79d752f59394a3aa358d9abf8d';
export const URL = 'https://api.themoviedb.org/3/';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';


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

export function consLogging(id, first, second) {
    return <div className="item" key={id}>
        <div className="item-body">
            <div class="item-first">
                <span class="first-img"></span>
            </div>
            <div class="item-second">
                <span class="second-img"></span>
            </div>
        </div>
        <p className="test-cl"><b>{first.name}</b></p>
        <p>{first.weight / 1000} kg / {first.length} sm</p>
        <p><b>{second.name}</b> </p>
        <p>{second.weight / 1000} kg / {second.length} sm</p>
    </div>;
    /* return console.log("first", first.name, "second", second.name) */
}
