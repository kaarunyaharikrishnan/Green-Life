import React, { useState } from 'react';
import './seeds.css';

const Seeds = () => {
    const [filters, setFilters] = useState({
        vegetableType: [],
        priceRange: 2000,
        daysToHarvest: []
    });

    const seeds = [
        { id: 1, name: "Sun Flower Seeds", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ysjsX3-mlQAxMPN35iQpVDGle6UweC8-G57nOz63krkFkbfjxfnfK7vGrlvA", price: 100, daysToHarvest: "Growing Season", type: "Easy Growing" },
        { id: 2, name: "Flower Seeds", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLeFIwZMHI848mp_s22AOqRydHy-BDItjhGK_qRC7Dj574sjqMNhKXv3rkbflg", price: 300, daysToHarvest: "All Season", type: "For Beginners" },
        { id: 3, name: "Lavender Seeds", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQidd4TyECwUQc9h9Z5fVtS4SbAkoIkYmWB16D_97kvLeigZ-fUy7SMxM3dnYRB", price: 1500, daysToHarvest: "Monsoon", type: "Fruit Vegetable" },
        { id: 4, name: "Rosemary Seeds", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU8HxUelzNqMuPWr10KVeGAy7keAm2aJmT3p-3MXCeAnB0qqT8jehUlEHwjf9", price: 500, daysToHarvest: "Growing Season", type: "Leafy Veggies" },
        { id: 5, name: "Pumpkin Seeds", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTAJTWDfbUyriSO5yt1MIjuIHdMlC17eq6e4eJ39rZlMwXbImSoWkyl8YWKBOXY", price: 2000, daysToHarvest: "All Season", type: "Easy Growing" },
        { id: 6, name: "Basil Seeds", img: "https://npvbeverage.com.vn/wp-content/uploads/2020/06/Basil-seed-7.jpg", price: 1200, daysToHarvest: "Monsoon", type: "Leafy Veggies" },
        { id: 7, name: "Chilli Seeds", img: "https://tse3.mm.bing.net/th?id=OIP.bPkfjst7t1N4VJarcfpu9gHaFj&pid=Api&P=0&h=180", price: 700, daysToHarvest: "Growing Season", type: "For Beginners" },
        { id: 8, name: "Mint Seeds", img: "https://www.peacefulpatch.com/wp-content/uploads/2023/08/Mint-Seed-Introduction.jpeg", price: 800, daysToHarvest: "All Season", type: "Easy Growing" }
        // Add more seed cards as needed
    ];

    const handleFilterChange = (category, value) => {
        setFilters((prevFilters) => {
            if (category === "priceRange") {
                return { ...prevFilters, [category]: value };
            } else {
                const newValues = prevFilters[category].includes(value)
                    ? prevFilters[category].filter(item => item !== value)
                    : [...prevFilters[category], value];
                return { ...prevFilters, [category]: newValues };
            }
        });
    };

    const filteredSeeds = seeds.filter(seed => {
        const matchesVegetableType = filters.vegetableType.length === 0 || filters.vegetableType.includes(seed.type);
        const matchesPriceRange = seed.price <= filters.priceRange;
        const matchesDaysToHarvest = filters.daysToHarvest.length === 0 || filters.daysToHarvest.includes(seed.daysToHarvest);

        return matchesVegetableType && matchesPriceRange && matchesDaysToHarvest;
    });

    return (
        <div className="seeds-container">
            <div className="top-container">
               
            </div>

            <div className="content-container">
                <div className="filter-section">
                    <h2>Filter by</h2>
                    <div className="filter-category">
                        <h3>Vegetable Type</h3>
                        <div>
                            <label><input type="checkbox" onChange={() => handleFilterChange("vegetableType", "Easy Growing")} /> Easy Growing</label>
                            <label><input type="checkbox" onChange={() => handleFilterChange("vegetableType", "For Beginners")} /> For Beginners</label>
                            <label><input type="checkbox" onChange={() => handleFilterChange("vegetableType", "Fruit Vegetable")} /> Fruit Vegetable</label>
                            <label><input type="checkbox" onChange={() => handleFilterChange("vegetableType", "Leafy Veggies")} /> Leafy Veggies</label>
                        </div>
                    </div>
                    <div className="filter-category">
                        <h3>Price</h3>
                        <input type="range" min="50" max="2000" value={filters.priceRange} onChange={(e) => handleFilterChange("priceRange", e.target.value)} />
                        <span>Up to ${filters.priceRange}</span>
                    </div>
                    <div className="filter-category">
                        <h3>Days to Harvest</h3>
                        <label><input type="checkbox" onChange={() => handleFilterChange("daysToHarvest", "Growing Season")} /> Growing Season</label>
                        <label><input type="checkbox" onChange={() => handleFilterChange("daysToHarvest", "All Season")} /> All Season</label>
                        <label><input type="checkbox" onChange={() => handleFilterChange("daysToHarvest", "Monsoon")} /> Monsoon</label>
                    </div>
                </div>

                <div className="seed-varieties">
                    {filteredSeeds.map(seed => (
                        <div key={seed.id} className="seed-card">
                            <img src={seed.img} alt={seed.name} className="plant-img" />
                            <h4>{seed.name}</h4>
                            <p>Price: ${seed.price}</p>
                            <p>Days to Harvest: {seed.daysToHarvest}</p>
                            <p>Type: {seed.type}</p>
                        </div>
                    ))}
                </div>
            </div>

           
        </div>
    );
};

export default Seeds;
