import './footer.css'
import { logo, location, phone, Email, Facebook, twitter, instagram } from '../../assets';

const Footer = () => {
    return (
        <footer>
        <div className="wrapper"><img className="footerLogo" src={logo} alt="logo" /></div>
            <div className="wrapper">
                <div className="box one">
                    <div className="location">
                        <img src={location} alt="icon" />
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Harum sequi esse ut? Aliquid, veritatis. Voluptatibus 
                        incidunt sunt tenetur animi.</p>
                    </div>
                    <div>
                        <img src={phone} alt="icon" />
                        +1-543--123-4567
                    </div>
                    <div>
                        <img src={Email} alt="icon" />
                        example@Huddle.com
                    </div>
                </div>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">what we Do</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
                <ul>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">blog</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
                <div className="box four">
                    <div className="media">
                        <img src={Facebook} alt="icon" />
                        <img src={twitter} alt="icon" />
                        <img src={instagram} alt="icon" />
                    </div>
                    <p>&copy; Copyright {new Date().getFullYear()} Huddle. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer
