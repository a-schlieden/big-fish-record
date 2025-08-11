
import { Link } from 'react-router-dom';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.footerWrap}>
            <p>© 2025 Made by SAle</p>
            <Link className={style.impressum} to="/impressum">Impressum</Link>
        </div>
    );
};

export default Footer;
