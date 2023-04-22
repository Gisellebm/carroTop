import "./styles.css";
import cardImg from "../../assets/car.png";
import Button from "../Button";

export default function Card() {
  return (
    <div className="ct-card">
      <img src={cardImg} alt="Carro" />
      <h2>Audi Supra TT</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        nisi
      </p>
      <Button/>
    </div>
  );
}
