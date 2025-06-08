import { useEffect, useState } from "react";
import Bed from "../../assets/Bed";
import BathTub from "../../assets/BathTub";
import Area from "../../assets/Area";
import styles from "./styles.module.css";
import Heart from "../../assets/Heart";
import PopularIcon from "../../assets/popular.png";
import CardIcons from "../CardIcons/CardIcons";

function Card({ id, img, title, rent, popular, address, room, bathroom, area }) {
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const favList = JSON.parse(localStorage.getItem("fav")) || [];
        setIsFav(favList.includes(id));
    }, [id]);

    const toggleFavorite = () => {
        const favList = JSON.parse(localStorage.getItem("fav")) || [];
        let updatedFav;

        if (favList.includes(id)) {
            updatedFav = favList.filter(item => item !== id);
        } else {
            updatedFav = [...favList, id];
        }

        localStorage.setItem("fav", JSON.stringify(updatedFav));
        setIsFav(updatedFav.includes(id));
    };

    const iconsData = [
        { Icon: Bed, text: `${room} Beds` },
        { Icon: BathTub, text: `${bathroom} Bathrooms` },
        { Icon: Area, text: `${area}m²` }
    ];

    return (
        <article className={styles.card}>
            <section className={styles.coverSec}>
                <img className={styles.cover} src={img} alt={title} />
                {popular ? (
                    <div className={styles.popular}>
                        <img src={PopularIcon} alt="Popular" />
                        <p>POPULAR</p>
                    </div>
                ) : null}
            </section>
            <section className={styles.details}>
                <div className={styles.header}>
                    <p><strong>${rent.toLocaleString()}</strong>/month</p>
                    <span>
                        <button
                            className={isFav ? `${styles.active}` : ''}
                            onClick={toggleFavorite}
                        >
                            <Heart />
                        </button>
                    </span>
                </div>
                <div className={styles.address}>
                    <h2>{title}</h2>
                    <p>{address}</p>
                </div>
                <div className={styles.icons}>
                    {iconsData.map((item, index) => (
                        <CardIcons key={index} Icon={item.Icon} text={item.text} />
                    ))}
                </div>
            </section>
        </article>
    );
}

export default Card;