import Logo from "../assets/img/dc-logo.png";
import style from "./Header.module.css";

export default function Header() {
    const links = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];
    return (
        <header className="py-10">
            <div className="container d-flex justify-content-space-between align-center">
                <img className="logo"src={Logo} alt="Logo DC Comics" />
                {/* Creo dinamicamente i link con map */}
                <nav className={style.nav}>
                    <ul className="py-10">
                    {links.map((curLink, index) => (
                        <li key={index}>
                            <a href="">{curLink}</a>
                        </li>
                    ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}