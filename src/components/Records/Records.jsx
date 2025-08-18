
import OneRecord from 'components/OneRecord/OneRecord';
import style from './Records.module.css';
import { useEffect, useState } from 'react';
import { fetchRecords } from '../../api/Fetch';


const Records = () => {

    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetchRecords().then(result => {
            setRecords(result);
        });
    }, []);

    return (
        <div className={style.recordsWrap}>
            <OneRecord fetchesRecords={records} />
        </div>
    );
};

export default Records;