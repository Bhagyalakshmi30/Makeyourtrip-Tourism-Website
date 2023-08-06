import React from 'react';

function PackageSearch({ onSearch }) {
    const handleSearch = (e) => {
        const searchQuery = e.target.value;
        onSearch(searchQuery);
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search by location..."
                onChange={handleSearch} // Use onChange event
            />
        </div>
    );
}

export default PackageSearch;
