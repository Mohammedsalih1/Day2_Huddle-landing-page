import featuresInfo from './features-data'
import './features.css'

const Features = () => {
    return (
        <>
        {featuresInfo.map((feature) => {
            return (
                <div key={feature.id} className="feature">
                    <div className="wrapper">
                        <div className="info">
                            <h2>{feature.Title}</h2>
                            <p>{feature.discription}</p>
                        </div>
                        <div className="img">
                            <img src={feature.img} alt="image" />
                        </div>
                    </div>
                </div>
            )
        })}
        </>
    )
};

export default Features
