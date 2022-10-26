import CardSwim from '../images/card-swim.png'
import CardWedding from '../images/card-wedding.png'
import CardBike from '../images/card-bike.png'
import Star from '../images/star.png'

export default function Card() {
    return (
        <section className="card">
            <div className="card--box">
                <img src={CardSwim} alt="Swim" className="card--image" />
                <div className="card--box--rating">
                    <img src={Star} className="star" alt="star" />
                    <p><strong>5.0</strong> (6) . USA</p>
                </div>
                <div className="card--box--text">
                    Life lessons with Katie Zaferes
                </div>
                <div className="card--box--price">
                    <strong>From $136</strong> / person
                </div>
            </div>

            <div className="card--box">
                <img src={CardWedding} alt="Wedding" className="card--image" />
                <div className="card--box--rating">
                    <img src={Star} className="star" alt="star" />
                    <p><strong>5.0</strong> (6) . USA</p>
                </div>
                <div className="card--box--text">
                    Learn wedding photography
                </div>
                <div className="card--box--price">
                    <strong>From $125</strong> / person
                </div>
            </div>

            <div className="card--box">
                <img src={CardBike} alt="Bike" className="card--image" />
                <div className="card--box--rating">
                    <img src={Star} className="star" alt="star" />
                    <p><strong>4.8</strong> (6) . USA</p>
                </div>
                <div className="card--box--text">
                    Group Mountain Biking
                </div>
                <div className="card--box--price">
                    <strong>From $50</strong> / person
                </div>
            </div>
        </section>
    )
}