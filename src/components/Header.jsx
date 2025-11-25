import Logo from "../assets/img/dc-logo.png";
import style from "./Header.module.css";

export default function Header() {
    return (
        <header className="d-flex align-center justify-content-center mt-20">
            <img src={Logo} alt="" />
            <nav className={style.nav}>
                <ul className="py-20">
                    <li>
                        <a href="">CHARACTERS</a>
                    </li>
                    <li className={style.active}>
                        <a href="">COMICS</a>
                    </li>
                    <li>
                        <a href="">MOVIES</a>
                    </li>
                    <li>
                        <a href="">TV</a>
                    </li>
                    <li>
                        <a href="">GAMES</a>
                    </li>
                    <li>
                        <a href="">COLLECTIBLES</a>
                    </li>
                    <li>
                        <a href="">VIDEOS</a>
                    </li>
                    <li>
                        <a href="">FANS</a>
                    </li>
                    <li>
                        <a href="">NEWS</a>
                    </li>
                    <li>
                        <a href="">SHOP</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}