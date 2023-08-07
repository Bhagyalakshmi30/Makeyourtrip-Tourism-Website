import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import './booking.css';
import BookingSummary from './bookingsummary';

function BookingForm() {
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);

    const hotelId = searchParams.get('hotelId');
    const restaurentId = searchParams.get('restaurentId');
    const packageId = searchParams.get('packageId');

    const [selectedHotel, setSelectedHotel] = useState(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [name, setName] = useState(localStorage.getItem('name') || '');
    const [email, setEmail] = useState(localStorage.getItem('email') || '');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [hotels, setHotels] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [packages, setPackages] = useState([]);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [showSummary, setShowSummary] = useState(false);


    useEffect(() => {
        axios.get('https://localhost:7239/api/Hotels')
            .then(response => {
                setHotels(response.data);
                const matchingHotel = response.data.find(hotel => hotel.hotelId === Number(hotelId));
                setSelectedHotel(matchingHotel);
                console.log('Matching Hotel:', matchingHotel);
            })
            .catch(error => {
                console.error('Error fetching hotel data:', error);
            });

        axios.get('https://localhost:7239/api/Restaurant')
            .then(response => {
                setRestaurants(response.data);
                const matchingRestaurant = response.data.find(restaurant => restaurant.restaurentId === Number(restaurentId));
                setSelectedRestaurant(matchingRestaurant);
                console.log('Matching Restaurant:', matchingRestaurant);
            })
            .catch(error => {
                console.error('Error fetching restaurant data:', error);
            });

        axios.get('https://localhost:7239/api/Package')
            .then(response => {
                setPackages(response.data);
                const matchingPackage = response.data.find(pkg => pkg.packageId === Number(packageId));
                setSelectedPackage(matchingPackage);
                console.log('Matching Package:', matchingPackage);
            })
            .catch(error => {
                console.error('Error fetching package data:', error);
            });

        console.log('Received hotelId:', hotelId);
        console.log('Received restaurentId:', restaurentId);
        console.log('Received packageId:', packageId);
    }, [hotelId, restaurentId, packageId]);

    useEffect(() => {
        // Calculate check-out date based on check-in date and package days
        if (checkIn && selectedPackage) {
            const checkInDate = new Date(checkIn);
            const checkOutDate = new Date(checkInDate.getTime() + selectedPackage.days * 24 * 60 * 60 * 1000);
            setCheckOut(checkOutDate.toISOString().split('T')[0]);
        }
    }, [checkIn, selectedPackage]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const bookingData = {
            name,
            email,
            checkIn,
            checkOut,
            adult,
            child,
            packageId: selectedPackage.packageId,
            hotelId: selectedHotel.hotelId,
            restaurentId: selectedRestaurant.restaurentId,
        };

        try {
            const response = await axios.post('https://localhost:7239/api/Booking', bookingData);
            console.log('Booking Created:', response.data);
            setBookingSuccess(true);
            setName('');
            setEmail('');
            setCheckIn('');
            setCheckOut('');
            setAdult(1);
            setChild(0);
        } catch (error) {
            console.error('Error creating booking:', error);
        }
    };

    return (
        <div className='maincomponent'>
            <div className='booking-form'>
                <h2>Booking Form</h2>
                <form onSubmit={handleFormSubmit}>
                    <TextField
                        label='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        fullWidth
                        margin='normal'
                    />
                    <TextField
                        label='Email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        margin='normal'
                    />
                    <TextField
                        label='Check-in Date'
                        type='date'
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        required
                        fullWidth
                        margin='normal'
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        label='Check-out Date'
                        type='date'
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        required
                        fullWidth
                        margin='normal'
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        label='Adults'
                        type='number'
                        value={adult}
                        onChange={(e) => setAdult(e.target.value)}
                        required
                        fullWidth
                        margin='normal'
                        inputProps={{
                            min: 1,
                        }}
                    />
                    <TextField
                        label='Children'
                        type='number'
                        value={child}
                        onChange={(e) => setChild(e.target.value)}
                        fullWidth
                        margin='normal'
                        inputProps={{
                            min: 0,
                        }}
                    />

                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => setShowSummary(!showSummary)}
                        style={{ marginTop: '1rem' }}
                        endIcon={<ExpandMoreIcon />}
                    >
                        {showSummary ? 'Hide Summary' : 'View Summary'}
                    </Button>
                </form>
            </div>
            
                {/* Submit Button */}
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    style={{ marginTop: '1rem' }}
                    onClick={handleFormSubmit}  
                >
                    Submit Booking
                </Button>
            
            <div className='summary-section'>
                {showSummary && (
                    <BookingSummary
                        bookingData={{
                            name,
                            email,
                            checkIn,
                            checkOut,
                            adult,
                            child,
                        }}
                        selectedPackage={selectedPackage}
                        selectedHotel={selectedHotel}
                        selectedRestaurant={selectedRestaurant}
                    />
                )}
            </div>
        </div>
    );
}

export default BookingForm;
