/* import { NavLink } from "react-router-dom"; */
import style from './Header.module.css';




const Header = () => {
    return (
        <header>
            <h1 className={style.nav}>HEADEWR</h1>
            {/*  <div >
                <nav className={style.nav}>
                    <ul>
                        {Items.map(item =>
                            <li key={item.title}>
                                <NavLink
                                    className={({ isActive }) => isActive ? style.navActive : undefined}
                                    to={item.to}>
                                    {item.title}
                                </NavLink>
                            </li>)}
                    </ul>

                    <ul>
                        {Languages.map(item =>
                            <li key={item.title}>
                                <NavLink
                                    className={({ isActive }) => isActive ? style.navActive : undefined}
                                    to={item.to}>
                                    {item.title}
                                </NavLink>
                            </li>)}
                    </ul>

                </nav>
            </div> */}
        </header>
    )
}

export default Header