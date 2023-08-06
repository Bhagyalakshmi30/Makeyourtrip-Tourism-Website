import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import PackageDetailsView from './packagedetailsview';

function PackageDetailsPage() {
    const location = useLocation(); // Use the useLocation hook to get location state
    const { packageData, hotels, touristSpots, restaurants } = location.state;

    return (
        <div>
            <PackageDetailsView
                packageData={packageData}
                hotels={hotels}
                touristSpots={touristSpots}
                restaurants={restaurants}
            />
        </div>
    );
}

export default PackageDetailsPage;

