
/* import FischList from 'components/FischList/FischList'; */

import style from './home.module.css';

const Home = () => {
    /* const Home = ({ tackleArr }) => { */
    /*    const tackleArray = tackleArr */

    return (
        <div className={style.homeWrapp}>
            <h2>HOME</h2>
            {/*             <FischList sublink={'fishes/'} tackleArr={tackleArray} />
            <div className={style.homeWeatherWrapp}>
                <Weather />
                <WeatherWeek />
            </div> */}
        </div>
    );
};

export default Home;