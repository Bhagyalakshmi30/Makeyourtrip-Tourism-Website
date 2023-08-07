import React, { useState, useEffect } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Viewrestaurant from './viewrestaurants';
import { Link } from 'react-router-dom'; 

const PostRestaurant = () => {
    const [restaurantName, setRestaurantName] = useState('');
    const [location, setLocation] = useState('');
    const [restaurantImage, setImage] = useState(null);
    const [packageId, setPackageId] = useState(null);

    useEffect(() => {
        async function fetchLastGeneratedPackageId() {
            try {
                const response = await fetch('https://localhost:7239/api/Package/lastgeneratedpackageid');
                const data = await response.json();
                setPackageId(data);
            } catch (error) {
                console.error('Error fetching last generated package ID:', error);
                toast.error('An error occurred while fetching package ID.');
            }
        }

        fetchLastGeneratedPackageId();
    }, []);

    async function uploadRestaurant() {
        const formData = new FormData();
        formData.append('restaurentName', restaurantName);
        formData.append('location', location);
        formData.append('imageFile', restaurantImage);
        formData.append('packageId', packageId);

        try {
            const response = await fetch('https://localhost:7239/api/Restaurant', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data);

            // Clear form data after successful submission
            setRestaurantName('');
            setLocation('');
            setImage(null);

            toast.success('Restaurant posted successfully!');
        } catch (error) {
            console.error('Error posting restaurant:', error);
            toast.error('An error occurred while posting the restaurant.');
        }
    }

    function handleImageChange(event) {
        setImage(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!restaurantName || !location || !restaurantImage) {
            toast.error('Please fill in all required fields.');
            return;
        }

        uploadRestaurant();
    }

    return (
        <div className='maincomponent' style={{ padding: '20px', textAlign: 'center', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2>Restaurant</h2>
            <h5>Upload Restaurants for your package</h5>
            <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2} direction="column">
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Restaurant Name"
                            onChange={e => setRestaurantName(e.target.value)}
                            value={restaurantName}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Location"
                            onChange={e => setLocation(e.target.value)}
                            value={location}
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
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <Button variant="outlined" color="secondary" type="submit">Post Restaurant</Button>
                    </div>
                </form>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {/* Add the Link component here */}
                <Link to="/uploadspots" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary">
                        Post Spots
                    </Button>
                </Link>
            </div>
            </div>
            <ToastContainer position="bottom-right" />
            <br /><br />
            
        </div>
    )
}

export default PostRestaurant;
