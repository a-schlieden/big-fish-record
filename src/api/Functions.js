
/* import * as Styles from '../css/Styles'; */
import '../css/Styles.css';
import vladImg from '../images/vlad.jpg';

function fischRecordWeight(weight, length) {
    let fischWeightForSecond = " ";
    if (weight > 0) {
        fischWeightForSecond = <p>{weight / 1000} kg<br></br>{length} sm</p>
    }
    else {
        fischWeightForSecond = <p> </p>;
    }
    return fischWeightForSecond;
}

export function consLogging(id, first, second) {
    return <div className="item" key={id}>
        <div className="item-body">
            <div className="item-first">
                <img className="vladJpg" src={vladImg} alt="fisch-icon" />
                <span className="item-first-img"><b>{first.name}</b></span>
                {/* <p>{first.weight / 1000} kg <br></br> {first.length} sm</p> */}
                {fischRecordWeight(first.weight, first.length)}
            </div>
            <div className="item-second" style={{ height: `${(second.weight / first.weight) * 100}%` }}>
                <span className="item-second-img">
                    <b>{second.name}</b>
                </span>
                {fischRecordWeight(second.weight, second.length)}
            </div>
        </div>
    </div>;
}
