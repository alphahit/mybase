import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>alphacodes</div>
      <div className={styles.text}>Alpha Codes. © All rights reserved.</div>
    </div>
  );
};

export default Footer;
