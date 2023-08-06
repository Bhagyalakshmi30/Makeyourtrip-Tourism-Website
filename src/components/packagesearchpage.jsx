import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PackageSearch from './packageSearch';
import ViewAllPackages from './viewpackages';
function PackageSearchPage() {
    const [packages, setPackages] = useState([]);
    const [filteredPackages, setFilteredPackages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    console.log(packages);

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

    return (
        <div>
            <PackageSearch onSearch={setSearchQuery} />
            <ViewAllPackages packagesList={filteredPackages} />
        </div>
    );
}

export default PackageSearchPage;
