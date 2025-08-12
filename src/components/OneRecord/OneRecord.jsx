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
                        <img className={style.oneRecordHeaderImg} src={process.env.PUBLIC_URL + '/images/' + ArrItem.vlad.name + '.jpg'} alt="fisch-icon" />
                        {/*    <img className={style.oneRecordHeaderImg} src="images/vlad.jpg" alt="fisch-icon" /> */}
                        {/*    <img src={`${process.env.PUBLIC_URL}/images/vlad.jpg`} alt="foto" /> */}
                        {/* `url(${'../images/' + FischTacklesArrItem + '.jpg'})` */}
                        {/*    <span style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + ArrItem.vlad.name + '.jpg'})` }} className={style.oneRecordImge}>12</span> */}
                        <h4>{ArrItem.name}</h4>
                    </div>
                    {((ArrItem.alex.weight === 0 && ArrItem.vlad.weight === 0)) ?
                        (<div style={{ minWidth: '300px' }}>No Info</div>) : (ArrItem.alex.weight > ArrItem.vlad.weight) ?
                            (<div style={{ minWidth: '300px' }}>
                                {Functions.oneRecordFn(ArrItem.id, ArrItem.alex, ArrItem.vlad)}
                            </div>)
                            : (<div style={{ minWidth: '300px' }}>
                                {Functions.oneRecordFn(ArrItem.id, ArrItem.vlad, ArrItem.alex)}
                            </div>)
                    }
                </div>
            )}
        </>
    );
};

export default OneRecord;

