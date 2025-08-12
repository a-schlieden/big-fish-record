
/* import { useEffect, useState } from 'react'; */

import Records from 'components/Records/Records';
/* import * as filmsFetch from '../../api/Fetch'; */

import style from './home.module.css';

const Home = ({ recordsArr }) => {
    const recordsArray = recordsArr;
    return (
        <div className={style.homeWrapp} >
            <Records tableItems={recordsArray} />
        </div>
    );
};

export default Home;