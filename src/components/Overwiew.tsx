import Styles from "../styles/components/Overwiew.module.css";
import { Header } from "./Header";
import { Card } from "./Card";
import { Chart } from "./Chart";
import { CircleChart } from "./CircleChart";
export function Overwiew() {
  return (
    <div className={Styles.overwiew}>
      <div>
        <Card icon="/icons/users.png" />
        <Card icon="/icons/case.png" />
        <Card icon="/icons/check.png" />
        <Card icon="/icons/arrow-right.png" />
      </div>
      <div className={Styles.graphicsContainer}>
        <div>
          <Chart />
        </div>
        <div>
        <CircleChart/>  
        </div>
      </div>
      <div>ola</div>
    </div>
  );
}
