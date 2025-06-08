import styles from "./styles.module.css";
import Card from '../../components/Card/Card';
import Properties from '../../properties.json';
import { useEffect, useState } from "react";

function Favourite() {
    const [result, setResult] = useState([]);

    useEffect(() => {
        const favList = JSON.parse(localStorage.getItem("fav")) || [];
        const favProperties = Properties.filter((item) => favList.includes(item.id));
        setResult(favProperties);
    }, []);

    return (
        <main className={styles.cardsSection}>
            {result.length > 0 ? (
                result.map((data) => <Card key={data.id} {...data} />)
            ) : (
                <p>No favourites found.</p>
            )}
        </main>
    );
}

export default Favourite;