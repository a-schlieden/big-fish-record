
import style from './Records.module.css';

const Records = ({ recordsArray }) => {
    const myrecordsArray = recordsArray;
    console.log("tableItems", myrecordsArray)
    return (
        <div className={style.recordsWrap}>
            <h1>Records</h1>
        </div>
    );
};

export default Records;