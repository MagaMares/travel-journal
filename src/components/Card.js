

function Card(props) {
  const imagePath = `/images/${props.image}`
  console.log(imagePath)
  // const image = require(imagePath)
  // console.log(image)
  return (
    <div className="Card">
        <div
        className="card--img"
        style={{ backgroundImage:  "url(" + imagePath + ")"
        }}></div>
        <div className="card--text">
            <img src="../images/pin.png" alt="location" className="card--pin"/>
            <span>{props.location}  </span>
            <a href={`https://www.google.com/maps/place/${props.location}`} className="grey" >View on Google Maps</a>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p className="card--description">{props.description}</p>
        </div>
    </div>
  );
}

export default Card;
