import React, { useState, useEffect } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

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

        if (!isValidForm()) {
            return;
        }

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

        fetch('https://localhost:7239/api/Package/image', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                resetForm();
                toast.success('Package posted successfully!');
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('An error occurred while posting the package.');
            });
    }

    function isValidForm() {
        if (!destination || !adultPrice || !childPrice || !days) {
            toast.error('Please fill in all required fields.');
            return false;
        }

        if (!isNumeric(adultPrice) || !isNumeric(childPrice) || !isNumeric(days)) {
            toast.error('Please enter valid numeric values.');
            return false;
        }

        return true;
    }

    function isNumeric(value) {
        return /^\d+$/.test(value);
    }

    function resetForm() {
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
    }

    useEffect(() => {
        const nameid = localStorage.getItem('nameid');
        console.log('Name ID from login:', nameid);
    }, []);

    return (
        <div
            style={{
                padding: '20px 20px 40px',
                textAlign: 'center',
                background: '#f0f0f0',
                marginLeft: 'auto', // Center the form horizontally
                marginRight: 'auto', // Center the form horizontally
                maxWidth: '700px', // Adjust the maxWidth as needed


            }}
            className='maincomponent'
        >
            <h2 style={{ marginBottom: '20px' }}>Package</h2>
            <form onSubmit={handleSubmit}  >
                <Stack spacing={2} direction="column">
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
                    <TextField
                        type="text"
                        variant="outlined"
                        color="secondary"
                        label="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        fullWidth
                        required
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
                </Stack>
                <input
                    type="file"
                    onChange={handleImageChange}
                    accept=".jpg,.jpeg,.png"
                    required
                />
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '50px', paddingRight: '50px' }}>
                    <Button variant="outlined" color="primary" type="submit" style={{ marginRight: '40px' }}>
                        Post Package
                    </Button>

                    <Link to="/uploadhotels" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                            Upload Package
                        </Button>
                    </Link>
                </div>



            </form>
            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default TravelAgentPackage;
