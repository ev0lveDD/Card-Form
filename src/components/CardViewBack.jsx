import "./CardViewBack.css";

export default function CardViewBack({cardCVC}) {
  return (
    <div className="cardViewBack">
      <p>{cardCVC ? cardCVC : "000"}</p>
    </div>
  );
}
