import Styles from "../styles/components/LeftContainer.module.css";
export function LeftContainer() {
  return (
    <div className={Styles.leftContainer}>
      <a href="#">
        <img src="/Logo.png" />
      </a>
      <div className={Styles.bottomContainer}>
        <div>
          <a href="/overwiew">
            <img src="/icons/chart.png" />
            <span> Overwiew</span>
          </a>
          <a href="#">
            <img src="/icons/case.png" />
            <span>Products</span>
          </a>
          <a href="#">
            <img src="/icons/user.png" />
            <span>Orders</span> <div>3</div>
            <img src="/icons/chevron-down.png" />
          </a>
          <a href="#">
            <img src="/icons/checkout.png" />
            <span> Checkout</span>
          </a>
          <a href="#">
            <img src="/icons/settings.png" />
            <span> Settings</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="/icons/info.png" />
            Help Us
          </a>
          <a href="#">
            <img src="/icons/chat.png" />
            Contact us
          </a>
          <a href="#">
            <img src="/icons/logout.png" />
            Log out
          </a>
        </div>
      </div>
    </div>
  );
}
