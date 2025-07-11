import * as Functions from '../../api/Functions';

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
                    <h4 key={ArrItem.id}>{ArrItem.name}</h4>
                    {/*         <p>{ArrItem.alex.name} {ArrItem.alex.weight}</p>
                    <p>{ArrItem.vlad.name} {ArrItem.vlad.weight}</p> */}
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