
/* import * as Styles from '../css/Styles'; */
import '../css/Styles.css';
import vladImg from '../images/vlad.jpg';
import alexImg from '../images/alex.jpg';


function fischerFoto(foto) {
    let fischerImg = " ";
    if (foto === "vlad") {
        fischerImg = <img className="fisher-img" src={vladImg} alt="fisch-icon" />
    }
    else {
        fischerImg = <img className="fisher-img" src={alexImg} alt="fisch-icon" />
    }
    return fischerImg;
}

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

/*  <img className="vladJpg" src={vladImg} alt="fisch-icon" /> 
 `url(${'../images/' + FischTacklesArrItem + '.jpg'})` 
 <span className="item-first-img"><b>{first.name}</b></span> 
 <p>{first.weight / 1000} kg <br></br> {first.length} sm</p>  */

export function oneRecordFn(id, first, second) {
    return <div className="item" key={id}>
        <div className="item-body">
            <div className="item-first">
                {fischerFoto(first.name)}
                {fischRecordWeight(first.weight, first.length)}
                <span style={{ backgroundImage: `url(${'../images/' + first.name + '.jpg'})` }} >1</span>
            </div>
            <div className="item-second" style={{ height: `${(second.weight / first.weight) * 100}%` }}>
                {fischerFoto(second.name)}
                {fischRecordWeight(second.weight, second.length)}
            </div>
        </div>
    </div>;
}

