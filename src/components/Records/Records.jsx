
import style from './Records.module.css';

const Records = ({ filmsArray, tableItems }) => {
    console.log(filmsArray)
    console.log("tableItems", tableItems)
    return (
        <div className={style.recordsWrap}>
            <h1>Records</h1>
        </div>
    );
};

export default Records;