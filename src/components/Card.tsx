import Styles from "../styles/components/Card.module.css";

export function Card({ icon }: any) {
  return (
    <div className={Styles.cardContainer}id={Styles.except}>
      <p>4449</p>
      <span>Total users</span>
      <div className={Styles.l}>
        <img src="/icons/shape.svg" />
        <span>433</span>
        <span>lorem</span>
      </div>
      <div>
        <img src={icon} />
      </div>
    </div>
  );
}
