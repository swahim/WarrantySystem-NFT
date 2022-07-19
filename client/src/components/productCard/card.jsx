import "./card.css";
const Card = (props) => {
  return (
    <div className="cardContainer">
      <div className="cardImage">
        <img src="https://www.mydesignation.com/wp-content/uploads/2019/08/malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg" />
      </div>
      <div>
        <h3>{props.productName}</h3>
        <div className="productCost">{props.cost}</div>
      </div>
    </div>
  );
};

export default Card;
