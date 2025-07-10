
/* import { useEffect, useState } from 'react'; */

import Records from 'components/Records/Records';
/* import * as filmsFetch from '../../api/Fetch'; */

import style from './home.module.css';


const Home = () => {

    /*    const [table, setTable] = useState([]);
   
       useEffect(() => {
           filmsFetch.fetchGoogleTable().then(result => {
               setTable(result.values);
           });
       }, []);
    */

    return (
        <div className={style.homeWrapp}>


            {/*     <Records tableItems={table} /> */}
            <Records />

        </div>
    );
};

export default Home;