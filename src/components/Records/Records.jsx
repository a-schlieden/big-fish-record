import OneRecord from 'components/OneRecord/OneRecord';

import style from './Records.module.css';

/* import { useEffect, useState } from 'react';

import * as filmsFetch from '../../api/Fetch'; */


const Records = ({ tableItems }) => {
    const ourRecordsArray = tableItems;

    /*     const [films2, setFilms2] = useState([]);
    
        useEffect(() => {
            filmsFetch.fetchMOCKAPI().then(result => {
                setFilms2(result);
            });
        }, []); */
    /* console.log("films2", films2) */


    return (
        <div className={style.recordsWrap}>
            <OneRecord ourAllRecordsArray={ourRecordsArray} />
        </div>
    );
};

export default Records;