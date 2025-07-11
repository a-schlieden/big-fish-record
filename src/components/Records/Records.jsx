import OneRecord from 'components/OneRecord/OneRecord';

import style from './Records.module.css';

const Records = ({ tableItems }) => {
    const ourRecordsArray = tableItems;
    return (
        <div className={style.recordsWrap}>
            <OneRecord ourAllRecordsArray={ourRecordsArray} />
        </div>
    );
};

export default Records;