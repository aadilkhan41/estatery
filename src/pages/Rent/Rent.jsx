import styles from "./styles.module.css";
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';
import Properties from '../../properties.json';
import { useState } from "react";

function Rent() {
    const [result, setResult] = useState(Properties);

    return (
        <>
            <SearchBar originalData={Properties} setResult={setResult} />
            <main className={styles.cardsSection}>
                {result.map((data, index) => (
                    <Card key={index} {...data} />
                ))}
            </main>
        </>
    );
}

export default Rent;





// import styles from "./styles.module.css";
// import SearchBar from '../../components/SearchBar/SearchBar';
// import Card from '../../components/Card/Card';
// import Properties from '../../properties.json';
// import { useState } from "react";

// function Rent() {
//     const [result, setResult] = useState(Properties);
//     return (
//         <>
//             <SearchBar result={result} setResult={setResult}/>
//             <main className={styles.cardsSection}>
//                 {result.map((data, index) => (
//                     <Card key={index} {...data} />
//                 ))}
//             </main>
//         </>
//     );
// }

// export default Rent;