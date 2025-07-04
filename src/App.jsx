import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <Outlet/>
            </div>
        </>
    );
}

export default App;