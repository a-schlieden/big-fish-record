
import style from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={style.nav}>
                <h1 className={style.navHeader}>fish records</h1>
                <a className={style.navHeaderLink} href="https://a-schlieden.github.io/time2fishing/">Prepare the tackle</a>
            </div>
        </header >
    )
}

export default Header