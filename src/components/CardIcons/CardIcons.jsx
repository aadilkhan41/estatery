import styles from "./styles.module.css";

function CardIcons({ Icon, text }) {
    return (
        <div className={styles.icon}>
            <Icon />
            <p>{text}</p>
        </div>
    );
}

export default CardIcons;