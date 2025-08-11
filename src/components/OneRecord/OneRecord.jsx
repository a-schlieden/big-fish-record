import * as Functions from '../../api/Functions';
/* import vladImg from '../../images/vlad.jpg' */
import style from './OneRecord.module.css';

const OneRecord = ({ ourAllRecordsArray }) => {
    const ourOneRecordArray = ourAllRecordsArray;
    /* console.log("ourOneRecordArray", ourOneRecordArray) */
    /*     let some = ourAllRecordsArray;
        console.log("ourAllRecordsArray", some)
    
        const nene = some.map(item => item);
        console.log("item.users", nene)
    
        const newArrey = some.map(ArrItem => ArrItem.users).flatMap(user => user.alex.id)
        console.log("newArrey", newArrey) */

    return (
        <>
            {ourOneRecordArray.map(ArrItem =>
                <div key={ArrItem.id} className={style.oneRecordWrap}>
                    <div className={style.oneRecordHeaderWrap}>
                        {/* <img src={ICONURL + weatherData.weather[0].icon + ".png"} alt="fisch-icon" /> */}
                        {/* <img className={style.oneRecordHeaderImg} src={vladImg} alt="fisch-icon" /> */}
                        {/* `url(${'../images/' + FischTacklesArrItem + '.jpg'})` */}
                        <h4>{ArrItem.name}</h4>
                    </div>
                    {((ArrItem.alex.weight === 0 && ArrItem.vlad.weight === 0)) ?
                        (<div style={{ minWidth: '300px' }}>No Info</div>) : (ArrItem.alex.weight > ArrItem.vlad.weight) ?
                            (<div style={{ minWidth: '300px' }}>
                                {Functions.consLogging(ArrItem.id, ArrItem.alex, ArrItem.vlad)}
                            </div>)
                            : (<div style={{ minWidth: '300px' }}>
                                {Functions.consLogging(ArrItem.id, ArrItem.vlad, ArrItem.alex)}
                            </div>)
                    }
                </div>
            )}
        </>
    );
};

export default OneRecord;

