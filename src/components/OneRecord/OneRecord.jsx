
import style from './OneRecord.module.css';

const OneRecord = ({ fetchesRecords }) => {

    const fischRercordWeight = (weight, length) => {
        let fischWeightForPerson = " ";
        if (weight > 0) {
            fischWeightForPerson = <p className={style.itemNumer}>{weight / 1000} kg<br></br>{length} sm</p>
        }
        else {
            fischWeightForPerson = <p> </p>;
        }
        return fischWeightForPerson;
    }

    const showOnerecord = (id, first, second) => {
        return <div className={style.item} key={id}>
            <div className={style.itemBody}>
                <div className={style.itemFirst}>
                    <img className={style.fisherImg} src={process.env.PUBLIC_URL + '/images/' + first.name + '.jpg'} alt="fisch-icon" />
                    {fischRercordWeight(first.weight, first.length)}
                </div>
                <div className={style.itemSecond} style={{ height: `${(second.weight / first.weight) * 100}%` }}>
                    <img className={style.fisherImg} src={process.env.PUBLIC_URL + '/images/' + second.name + '.jpg'} alt="fisch-icon" />
                    {fischRercordWeight(second.weight, second.length)}
                </div>
            </div>
        </div>;
    }


    return (
        <>
            {fetchesRecords.map(ArrItem =>
                <div key={ArrItem.id} className={style.oneRecordWrap}>
                    <div className={style.oneRecordHeaderWrap}>
                        <img className={style.oneRecordHeaderImg} src={process.env.PUBLIC_URL + '/images/perch.png'} alt="fisch-icon" />
                        {/* {funkRecord(ArrItem.vlad.name)} */}
                        <div className={style.oneRecordHeaderTextWrap}>
                            <h3>{ArrItem.fish_name_ua}</h3>
                        </div>
                    </div>
                    {((ArrItem.alex.weight === 0 && ArrItem.vlad.weight === 0)) ?
                        (<div className={style.oneRecordNoInfoWrap}>
                            <p>No Info</p>
                        </div>)
                        :
                        (ArrItem.alex.weight > ArrItem.vlad.weight)
                            ?
                            (<div style={{ minWidth: '300px' }}>
                                {showOnerecord(ArrItem.id, ArrItem.alex, ArrItem.vlad)}
                            </div>)
                            :
                            (<div style={{ minWidth: '300px' }}>
                                {showOnerecord(ArrItem.id, ArrItem.vlad, ArrItem.alex)}
                            </div>)
                    }
                </div>
            )}
        </>
    );
};

export default OneRecord;

