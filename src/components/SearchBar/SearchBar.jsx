import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";

function SearchBar({ originalData, setResult }) {
    const inputRef = useRef(null);

    const [search, setSearch] = useState("");
    const [option, setOption] = useState({
        location: "",
        when: "",
        price: "0-5000",
        propertyType: "all",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOption(prev => ({ ...prev, [name]: value }));
    };

    const handleSearch = () => {
        let min = 0, max = Infinity;
        if (option.price.includes('-')) {
            [min, max] = option.price.split('-').map(Number);
        }

        const filtered = originalData.filter((item) => {
            const matchSearch =
                !search || item.title.toLowerCase().includes(search.toLowerCase());

            const matchLocation =
                !option.location || item.address.toLowerCase().includes(option.location.toLowerCase());

            const matchDate =
                !option.when || item.moveindate === option.when;

            const matchPrice =
                item.rent >= min && item.rent <= max;

            const matchType =
                option.propertyType === "all" ||
                item.type.toLowerCase() === option.propertyType.toLowerCase();

            return matchSearch && matchLocation && matchDate && matchPrice && matchType;
        });

        setResult(filtered);
    };

    useEffect(() => {
        handleSearch();
    }, [search]);

    return (
        <div className={styles.searchBarCont}>
            <section className={styles.searchBar}>
                <h1>Search properties to rent</h1>
                <div>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search with Search Bar"
                    />
                </div>
            </section>

            <form className={styles.optionsBar} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.inputCont}>
                    <label>Location</label>
                    <input
                        className={styles.search}
                        type="text"
                        name="location"
                        value={option.location}
                        onChange={handleInputChange}
                        placeholder="New York, USA"
                    />
                </div>

                <span></span>

                <div className={styles.inputCont}>
                    <label>When</label>
                    <input
                        ref={inputRef}
                        className={styles.calender}
                        type="date"
                        name="when"
                        value={option.when}
                        onChange={handleInputChange}
                        onClick={() => inputRef.current?.showPicker()}
                    />
                </div>

                <span></span>

                <div className={styles.inputCont}>
                    <label>Price</label>
                    <select
                        className={styles.chevrondown}
                        name="price"
                        value={option.price}
                        onChange={handleInputChange}
                    >
                        <option value="0-5000">All</option>
                        <option value="0-500">$0-$500</option>
                        <option value="500-1000">$500-$1000</option>
                        <option value="1000-1500">$1000-$1500</option>
                        <option value="1500-2000">$1500-$2000</option>
                        <option value="2000-2500">$2000-$2500</option>
                        <option value="2500-3000">$2500-$3000</option>
                        <option value="3000-3500">$3000-$3500</option>
                        <option value="3500-4000">$3500-$4000</option>
                        <option value="4000-4500">$4000-$4500</option>
                        <option value="4500-5000">$4500-$5000</option>
                    </select>
                </div>

                <span></span>

                <div className={styles.inputCont}>
                    <label>Property Type</label>
                    <select
                        className={styles.chevrondown}
                        name="propertyType"
                        value={option.propertyType}
                        onChange={handleInputChange}
                    >
                        <option value="all">All</option>
                        <option value="houses">Houses</option>
                        <option value="apartments">Apartments</option>
                        <option value="villas">Villas</option>
                        <option value="commercial">Commercial</option>
                        <option value="plots">Plots</option>
                    </select>
                </div>

                <span></span>

                <button type="button" onClick={handleSearch}>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;