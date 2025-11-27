
import FacebookImg from "../assets/img/footer-facebook.png";
import TwitterImg from "../assets/img/footer-twitter.png";
import YoutubeImg from "../assets/img/footer-youtube.png";
import PinterestImg from "../assets/img/footer-pinterest.png";
import PeriscopeImg from "../assets/img/footer-periscope.png";


export default function Social() {
    return (
        <div className="d-flex gap-10 text-center">
            <img src={FacebookImg} alt="" />
            <img src={TwitterImg} alt="" />
            <img src={YoutubeImg} alt="" />
            <img src={PinterestImg} alt="" />
            <img src={PeriscopeImg} alt="" />    
        </div>
    )
}
