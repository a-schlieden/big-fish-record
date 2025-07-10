
/* import { useEffect, useState } from 'react'; */

import Records from 'components/Records/Records';
/* import * as filmsFetch from '../../api/Fetch'; */

import style from './home.module.css';


const Home = ({ recordsArr }) => {

    /*    const [table, setTable] = useState([]);
   
       useEffect(() => {
           filmsFetch.fetchGoogleTable().then(result => {
               setTable(result.values);
           });
       }, []);
    */
    const recordsArray = recordsArr;
    return (
        <div className={style.homeWrapp}>


            {/*     <Records tableItems={table} /> */}
            <Records tableItems={recordsArray} />

        </div>
    );
};

export default Home;