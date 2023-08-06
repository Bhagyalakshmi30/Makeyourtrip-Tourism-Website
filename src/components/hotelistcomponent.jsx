import React, { useEffect, useState } from 'react';

function HotelListComponent(props) {
    const { match } = props;
    const destination = decodeURIComponent(match.params.destination);
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        async function fetchHotelData() {
            try {
                const hotelResponse = await fetch(`https://localhost:7239/api/Hotels/Location?location=${encodeURIComponent(destination)}`);
                const hotelData = await hotelResponse.json();
                setHotels(hotelData);
            } catch (error) {
                console.error('Error fetching hotel data:', error);
            }
        }

        fetchHotelData();
    }, [destination]);

    return (
        <div>
            <h2>Hotels in {destination}</h2>
            {/* Render hotel data */}
        </div>
    );
}

export default HotelListComponent;
