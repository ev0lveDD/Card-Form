import "./CardViewFront.css";
import logo from "../assets/card-logo.svg";


export default function CardViewFront({cardNumber="0000 0000 0000 0000", cardHolderName="JANE APPLESEED", cardExpDateMM="00", cardExpDateYY="00"}) {
  return (
    <div className="cardViewFront">
      <img src={logo}/>
      <h1>{cardNumber}</h1>
      <div className="cardViewFrontBottomData">
        <p>{cardHolderName}</p>
        <p>
          {cardExpDateMM}/{cardExpDateYY}
        </p>
      </div>
    </div>
  );
}
