import style from "./Footer.module.css";
import Facebook from "./Social";
export default function Footer() {
    return (
        <footer>
                <div className={`py-40 ${style.background}`}>
                    <div className="d-flex container">
                        <div className={style.col}>
                            <h3 className="color-white">DC COMICS</h3>
                            <ul className="d-flex flex-direction-column mt-20">
                                <li>
                                    <a href>Characters</a>
                                </li>
                                <li>
                                    <a href>Comics</a>
                                </li>
                                <li>
                                    <a href>Movies</a>
                                </li>
                                <li>
                                    <a href>TV</a>
                                </li>
                                <li>
                                    <a href>Games</a>
                                </li>
                                <li>
                                    <a href>Videos</a>
                                </li>
                                <li>
                                    <a href>News</a>
                                </li>
                            </ul>
                            <div className="mt-20">
                                <h3 className="color-white ">SHOP</h3>
                                <ul className="d-flex flex-direction-column mt-20">
                                    <li>
                                        <a href>Shop DC</a>
                                    </li>
                                    <li>
                                        <a href>Shop DC Collectibles</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className={style.col}>
                            <h3 className="color-white">DC</h3>
                            <ul className="d-flex flex-direction-column mt-20">
                                <li>
                                    <a href>Terms of Use</a>
                                </li>
                                <li>
                                    <a href>Privacy policy (New)</a>
                                </li>
                                <li>
                                    <a href>Ad Choices</a>
                                </li>
                                <li>
                                    <a href>Advertising</a>
                                </li>
                                <li>
                                    <a href>Jobs</a>
                                </li>
                                <li>
                                    <a href>Subscriptions</a>
                                </li>
                                <li>
                                    <a href>Talent Workshops</a>
                                </li>
                                <li>
                                    <a href>CPSC Certificates</a>
                                </li>
                                <li>
                                    <a href>Ratings</a>
                                </li>
                                <li>
                                    <a href>Shop Help</a>
                                </li>
                                <li>
                                    <a href>Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className={style.col}>
                            <h3 className="color-white">SITES</h3>
                            <ul className="d-flex flex-direction-column mt-20">
                                <li>
                                    <a href>DC</a>
                                </li>
                                <li>
                                    <a href>MAD Magazine</a>
                                </li>
                                <li>
                                    <a href>CD Kids</a>
                                </li>
                                <li>
                                    <a href>DC Universe</a>
                                </li>
                                <li>
                                    <a href>DC Power Visa</a>
                                </li>
                            </ul>
                        </div>
                        <div className={style.col40}>
                            <div className={style.dc}></div>
                        </div>
                    </div>
                </div>

                <div className={`py-20 ${style.footer}`}>
                    <div className="container d-flex justify-content-space-between align-center">
                        <div className={style.btn}>SIGN-UP NOW!</div>
                    <div>
                        <h4>FOLLOW US</h4>
                        <ul>
                            <li>
                                <a href>
                                    <Facebook />
                                </a>
                            </li>
                            <li>
                                <a href>

                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
        </footer>
    );
}