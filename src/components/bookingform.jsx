import React from 'react';
import { useParams } from 'react-router-dom';

function BookingForm() {
    const { hotelId, restaurantId, packageId } = useParams();

    // Now you can access hotelId, restaurantId, and packageId here

    // ... (rest of your Booking Form component code)
}