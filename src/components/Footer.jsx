import style from "./Footer.module.css";
import Facebook from "./Social";
import {dcComicsLinks, shop, dcLinks, sitesLinks} from "../assets/dc-comics-2/linksfooter";

export default function Footer() {
    return (
        <footer>
            <section className="footer-top">
                <div className={`py-40 ${style.background}`}>
                    <div className="d-flex container">
                        <div className={style.col}>
                            <h3 className="color-white">DC COMICS</h3>
                            <ul className="d-flex flex-direction-column mt-20">
                                {dcComicsLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.path}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-20">
                                <h3 className="color-white ">SHOP</h3>
                                <ul className="d-flex flex-direction-column mt-20">
                                    {shop.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.path}>{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={style.col}>
                            <h3 className="color-white ">DC</h3>
                            <ul className="d-flex flex-direction-column mt-20">
                                {dcLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.path}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={style.col}>
                            <h3 className="color-white">SITES</h3>
                            <ul className="d-flex flex-direction-column mt-20">
                                {sitesLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.path}>{link.title}</a>
                                    </li>
                                ))}  
                            </ul>
                        </div>
                        <div className={style.col40}>
                            <div className={style.dc}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <div className={`py-20 ${style.footer}`}>
                    <div className="container d-flex justify-content-space-between align-center">
                        <div className={style.btn}>SIGN-UP NOW!</div>
                        <div>
                            <h4>FOLLOW US</h4>
                            <ul>
                                <li>
                                    <a href="">
                                        <Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="">

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}