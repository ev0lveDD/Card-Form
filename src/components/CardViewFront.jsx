import "./CardViewFront.css";
import logo from "../assets/card-logo.svg";


export default function CardViewFront({cardNumber, cardHolderName, cardExpDateMM="00", cardExpDateYY="00"}) {
  return (
    <div className="cardViewFront">
      <img src={logo}/>
      <h1>{cardNumber ? cardNumber : "0000 0000 0000 0000"}</h1>
      <div className="cardViewFrontBottomData">
        <p>{cardHolderName ? cardHolderName : "JANE DOE"}</p>
        <p>
          {cardExpDateMM ? cardExpDateMM : "00"}/{cardExpDateYY ? cardExpDateYY : "00"}
        </p>
      </div>
    </div>
  );
}
