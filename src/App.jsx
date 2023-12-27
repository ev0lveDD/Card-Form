import { useState } from "react";
import Input from "./components/Input";
import CardViewFront from "./components/CardViewFront";
import CardViewBack from "./components/CardViewBack";
import Button from "./components/Button";
import CompleteView from "./components/CompleteView";

function App() {

  const [cardNumber, setCardNumber] = useState(undefined);
  const [cardHolderName, setCardHolderName] = useState(undefined);
  const [cardExpDateMM, setCardExpDateMM] = useState(undefined);
  const [cardExpDateYY, setCardExpDateYY] = useState(undefined);
  const [cardCVC, setCardCVC] = useState(undefined);

  const [isCardNumberInvalid, setIsCardNuberInvalid] = useState(false);
  const [isCardHolderNameInvalid, setIsCardHolderNameInvalid] = useState(false);
  const [isCardExpDateMMInvalid, setIsCardExpDateMMInvalid] = useState(false);
  const [isCardExpDateYYInvalid, setIsCardExpDateYYInvalid] = useState(false);
  const [isCardCVCInvalid, setIsCardCVCInvalid] = useState(false);

  const [formFilled, isFormFilled] = useState(false);

  function handleChange(event) {
    let valueName = event.target.name;

    switch (valueName) {
      case "cardNumber":
        let number = event.target.value.slice(0, 16);
        let numberSpace = number.match(/.{1,4}/g);
        handleError(event,setIsCardNuberInvalid);
        setCardNumber(numberSpace.join(' '));
        break;
      case "cardHolderName":
        setCardHolderName(event.target.value.toUpperCase());
        handleError(event,setIsCardHolderNameInvalid);
        break;
      case "cardExpDateMM":
        setCardExpDateMM(event.target.value);
        handleError(event,setIsCardExpDateMMInvalid);
        break;
      case "cardExpDateYY":
        setCardExpDateYY(event.target.value);
        handleError(event,setIsCardExpDateYYInvalid);
        break;
      case "cardCVC":
        setCardCVC(event.target.value);
        handleError(event,setIsCardCVCInvalid);
        break;
    }
  }

  function handleError(event, isInvalidName){
    if (event.target.value.trim().length > 0) {
      isInvalidName(false);
    } else {
      isInvalidName(true);
    }
  }

  function checkResults() {
    if(cardHolderName === undefined  || cardHolderName === null || cardHolderName.length === 0){
      setIsCardHolderNameInvalid(true);
    }
    else(
      setIsCardHolderNameInvalid(false)
    )

    if(cardNumber === undefined  || cardNumber === null || cardNumber.length === 0){
      setIsCardNuberInvalid(true);
    }
    else(
      setIsCardNuberInvalid(false)
    )

    if(cardExpDateMM === undefined  || cardExpDateMM === null || cardExpDateMM.length === 0){
      setIsCardExpDateMMInvalid(true);
    }
    else(
      setIsCardExpDateMMInvalid(false)
    )

    if(cardExpDateYY === undefined  || cardExpDateYY === null || cardExpDateYY.length === 0){
      setIsCardExpDateYYInvalid(true);
    }
    else(
      setIsCardExpDateYYInvalid(false)
    )

    if(cardCVC === undefined  || cardCVC === null || cardCVC.length === 0){
      setIsCardCVCInvalid(true);
    }
    else(
      setIsCardCVCInvalid(false)
    )

    if (cardHolderName.length > 0 && cardNumber.length > 0 && cardExpDateMM.length > 0 && cardExpDateYY.length > 0 && cardCVC.length > 0) {
      isFormFilled(true)
    } else (
      isFormFilled(false)
    )

    console.log(formFilled);
  }

  return (
    <div className="App">
      <section id="screenSection">
        <section id="cardSection">
          <CardViewFront
            cardNumber={cardNumber}
            cardHolderName={cardHolderName}
            cardExpDateMM={cardExpDateMM}
            cardExpDateYY={cardExpDateYY}
          />
          <CardViewBack cardCVC={cardCVC} />
        </section>

        {!formFilled ? <section id="inputSection">
          <Input
            inputLabel={"Cardholder Name"}
            type="text"
            name="cardHolderName"
            handleChange={handleChange}
            placeholder="e.g. Jane Appleseed"
            isInvalid = {isCardHolderNameInvalid}
          />
          <Input
            inputLabel={"Card Number"}
            type="text"
            name="cardNumber"
            handleChange={handleChange}
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength="16"
            isInvalid = {isCardNumberInvalid}
          />
          <div id="inputRowLine">
            <Input
              id={"inputShort"}
              inputLabel={"Exp. Date (MM/YY)"}
              type="text"
              name="cardExpDateMM"
              name2="cardExpDateYY"
              handleChange={handleChange}
              placeholder="MM"
              placeholder2="YY"
              maxLength="2"
              isInvalid = {isCardExpDateMMInvalid}
              isInvalid2 = {isCardExpDateYYInvalid}
            />
            <Input
              id={"inputMedium"}
              inputLabel={"CVC"}
              type="text"
              name="cardCVC"
              handleChange={handleChange}
              placeholder="e.g. 123"
              maxLength="3"
              isInvalid = {isCardCVCInvalid}
            />
          </div>
          <Button functionPassed={checkResults} text={"Confirm"}/>
        </section> :  <section id="inputSection"><CompleteView /></section>}
      </section>
    </div>
  );
}

export default App;
