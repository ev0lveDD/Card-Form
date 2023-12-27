import "./CardViewBack.css";

export default function CardViewBack({cardCVC="000"}) {
  return (
    <div className="cardViewBack">
      <p>{cardCVC}</p>
    </div>
  );
}
