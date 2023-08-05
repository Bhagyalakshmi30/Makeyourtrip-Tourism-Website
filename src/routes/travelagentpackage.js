import React, { useState, useEffect } from 'react';
import { TextField, Button, Stack } from '@mui/material';

const TravelAgentPackage = () => {
    const [destination, setDestination] = useState('');
    const [adultPrice, setAdultPrice] = useState('');
    const [childPrice, setChildPrice] = useState('');
    const [days, setDays] = useState('');
    const [description, setDescription] = useState('');
    const [isHotel, setIsHotel] = useState('');
    const [isFlights, setIsFlights] = useState('');
    const [isMeals, setIsMeals] = useState('');
    const [isTravel, setIsTravel] = useState('');
    const [packageImage, setPackageImage] = useState(null);

    function handleImageChange(event) {
        setPackageImage(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('destination', destination);
        formData.append('adultPrice', adultPrice);
        formData.append('childPrice', childPrice);
        formData.append('days', days);
        formData.append('description', description);
        formData.append('isHotel', isHotel);
        formData.append('isFlights', isFlights);
        formData.append('isMeals', isMeals);
        formData.append('isTravel', isTravel);
        formData.append('imageFile', packageImage);

        const nameid = localStorage.getItem('nameid');
        formData.append('userId', nameid);


        // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        fetch('https://localhost:7239/api/Package/image', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Reset form fields
                setDestination('');
                setAdultPrice('');
                setChildPrice('');
                setDays('');
                setDescription('');
                setIsHotel('');
                setIsFlights('');
                setIsMeals('');
                setIsTravel('');
                setPackageImage(null);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        const nameid = localStorage.getItem('nameid');
        console.log('Name ID from login:', nameid);
    }, []);


    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>Package</h2>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction="column">
                    {/* Destination */}
                    <TextField
                        type="text"
                        variant="outlined"
                        color="secondary"
                        label="Destination"
                        value={destination}
                        onChange={e => setDestination(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        type="number"
                        variant="outlined"
                        color="secondary"
                        label="Adult Price"
                        value={adultPrice}
                        onChange={e => setAdultPrice(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        type="number"
                        variant="outlined"
                        color="secondary"
                        label="Child Price"
                        value={childPrice}
                        onChange={e => setChildPrice(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        type="number"
                        variant="outlined"
                        color="secondary"
                        label="Days"
                        value={days}
                        onChange={e => setDays(e.target.value)}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    fullWidth
                    required
                    sx={{ marginBottom: 4 }}
                />
                <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Is Hotel Included"
                    value={isHotel}
                    onChange={e => setIsHotel(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Is Flights Included"
                    value={isFlights}
                    onChange={e => setIsFlights(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Is Meals Included"
                    value={isMeals}
                    onChange={e => setIsMeals(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Is Travel Included"
                    value={isTravel}
                    onChange={e => setIsTravel(e.target.value)}
                    fullWidth
                    required
                />
              

                <input
                    type="file"
                    onChange={handleImageChange}
                    accept=".jpg,.jpeg,.png"
                    required
                />
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="outlined" color="secondary" type="submit">
                        Post Package
                    </Button>
                </div>
        
               
            </form >
            
        </div >
    );
};

export default TravelAgentPackage;
