
import { useEffect, useState } from 'react';

import Records from 'components/Records/Records';
import * as filmsFetch from '../../api/Fetch';

import style from './home.module.css';


const Home = () => {

    const [films, setFilms] = useState([]);
    const [table, setTable] = useState([]);

    useEffect(() => {
        filmsFetch.fetchTrendingMovies().then(result => {
            setFilms(result.results);
        });
    }, []);

    useEffect(() => {
        filmsFetch.fetchGoogleTable().then(result => {
            setTable(result);
        });
    }, []);



    return (
        <div className={style.homeWrapp}>


            <Records filmsArray={films} tableItems={table} />

        </div>
    );
};

export default Home;