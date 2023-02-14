import Styles from "../styles/components/Header.module.css";

export function Header() {
  return (
    <div className={Styles.headerContainer}>
      <div>
        <p>Welcome Back, Rb!</p>
        <p>Here is the information about all your orders</p>
      </div>
      <div>
        <img src="/icons/search.png" />
        <div>
          <img src="/icons/bell.png" />
          <div></div>
        </div>
        <img src="/icons/avatar.png" />
        <span>Ruben André</span>
        <img src="/icons/chevron-down.png" />
      </div>
    </div>
  );
}
