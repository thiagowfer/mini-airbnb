export default function Card({ photo, alt, rating, review, country, msg, price }) {
    return (
        <div className="card--box">
            <img src={photo} alt={alt} className="card--image" />
            <div className="card--box--rating">
                <img src="./images/star.png" className="star" alt="star" />
                <p><strong>{rating}</strong> ({review}) . {country}</p>
            </div>
            <div className="card--box--text"> {msg} </div>
            <div className="card--box--price">
                <strong>From ${price}</strong> / person
            </div>
        </div>
    )
}  