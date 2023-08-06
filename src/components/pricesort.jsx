import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewAllPackages from './viewpackages';

function PriceSort() {
    const [packages, setPackages] = useState([]);
    const [filteredPackages, setFilteredPackages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [maxAdultPrice, setMaxAdultPrice] = useState(1000); // Default maximum adult price

    useEffect(() => {
        axios.get('https://localhost:7239/api/Package')
            .then(response => {
                setPackages(response.data);
            })
            .catch(error => {
                console.error('Error fetching package data:', error);
            });
    }, []);

    useEffect(() => {
        if (!searchQuery) {
            setFilteredPackages(packages); // Show all packages if no search query
        } else {
            const filtered = packages.filter(pkg =>
                pkg.destination.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredPackages(filtered);
        }
    }, [searchQuery, packages]);

    const filteredByPrice = filteredPackages.filter(pkg => pkg.adultPrice <= maxAdultPrice);

    return (
        <div>
            <div>
                <label>
                    Max Adult Price: ${maxAdultPrice}
                    <input
                        type="range"
                        min="0"
                        max="5000" // Adjust the maximum value as needed
                        value={maxAdultPrice}
                        onChange={e => setMaxAdultPrice(e.target.value)}
                    />
                </label>
            </div>
            <ViewAllPackages packagesList={filteredByPrice} />
        </div>
    );
}

export default PriceSort;

