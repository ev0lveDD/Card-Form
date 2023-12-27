import completeIcon from "../assets/icon-complete.svg";
import Button from "./Button";
import "./CompleteView.css";

export default function CompleteView() {
  return (
    <div id="containerColumn">
      <img id="icon" src={completeIcon} />
      <h1 id="completeH1">THANK YOU !</h1>
      <p id="completeText">We've added your card details</p>
      <Button text={"Continue"} />
    </div>
  );
}
