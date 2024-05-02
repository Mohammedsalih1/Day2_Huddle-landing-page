import './hero.css'
import { logo, mockups } from '../../assets'
import Button from '../button/Button';


const Hero = () => {
    return (
        <section className='hero-section'>
            <nav>
                <div className="wrapper">
                    <img src={logo} className='logo' alt="huddle logo" />
                    <button>Try It Free</button>
                </div>
            </nav>
            <div className="hero-elements">
                <div className="wrapper">
                    <div className="hero-text">
                        <h1 className='hero-title'>
                            Build The Community Your Fans Will Love
                        </h1>
                        <p className='hero-disc'>
                            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                            Create connections with your users as you engage in genuine discussion. 
                        </p>
                        <Button />
                    </div>
                    <div className="hero-img">
                        <img src={mockups} alt="hero section image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
