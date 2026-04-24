
import style from './OneRecord.module.css';

const OneRecord = ({ fetchesRecords }) => {

    let fischNameExceptionArr = ['ukelei', 'zwergwels'];

    const fischRecordType = (fishName, fishNumber, fishWeight, fishlength) => {
        if (fischNameExceptionArr.includes(fishName.toLowerCase())) {
            return fischRercordNumber(fishNumber);
        }
        else {
            return fischRercordWeight(fishWeight, fishlength);
        }
    }

    const fischRercordNumber = (numbersOfFish) => {
        let fischNumbers = " ";
        if (numbersOfFish && numbersOfFish > 0) {
            fischNumbers = <p className={style.itemNumer}>{numbersOfFish} шт</p>
        }
        else {
            fischNumbers = <p> </p>
        }
        return fischNumbers;
    }

    const fischRercordWeight = (weight, length) => {
        let fischWeightForPerson = " ";
        if (weight && weight > 0) {
            fischWeightForPerson = <p className={style.itemNumer}>{weight / 1000} kg<br></br>{length} sm</p>
        }
        else {
            fischWeightForPerson = <p> </p>;
        }
        return fischWeightForPerson;
    }

    const styleHeightSecondBlock = (firstWeight, secondWeight, firstNumber, secondNumber, fName) => {
        let heightSecondBlock = ``;
        if (firstWeight && secondWeight >= 0) {
            heightSecondBlock = `${(secondWeight / firstWeight) * 100}%`;
        }
        else if (firstNumber && secondNumber) {
            heightSecondBlock = `${(secondNumber / firstNumber) * 100}%`
        }
        return heightSecondBlock;
    }

    const showOneRecord = (id, first, second, nameOfFish) => {
        return <div className={style.item} key={id}>
            <div className={style.itemBody}>
                <div className={style.itemFirst}>
                    <img className={style.fisherImg} src={process.env.PUBLIC_URL + '/images/' + first.name + '.jpg'} alt="fischer-icon" />
                    {fischRecordType(nameOfFish, first.number, first.weight, first.length)}
                </div>
                <div className={style.itemSecond} style={{ height: styleHeightSecondBlock(first.weight, second.weight, first.number, second.number, nameOfFish) }}>
                    <img className={style.fisherImg} src={process.env.PUBLIC_URL + '/images/' + second.name + '.jpg'} alt="fischer-icon" />
                    {fischRecordType(nameOfFish, second.number, second.weight, second.length)}
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
                                {showOneRecord(ArrItem.id, ArrItem.alex, ArrItem.vlad, ArrItem.fish_name_en)}
                            </div>)
                            :
                            (<div style={{ minWidth: '300px' }}>
                                {showOneRecord(ArrItem.id, ArrItem.vlad, ArrItem.alex, ArrItem.fish_name_en)}
                            </div>)
                    }
                </div>
            )}
        </>
    );
};

export default OneRecord;

