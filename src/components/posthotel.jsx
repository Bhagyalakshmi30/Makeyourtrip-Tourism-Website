import React, { useState, useEffect } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Viewhotel from './viewhotel';
import { Link } from 'react-router-dom';

const PostHotel = () => {
    const [hotelName, setHotelName] = useState('');
    const [location, setLocation] = useState('');
    const [hotelImage, setImage] = useState(null);
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

    async function uploadHotel() {
        const formData = new FormData();
        formData.append('packageId', packageId);
        formData.append('hotelName', hotelName);
        formData.append('location', location);
        formData.append('imageFile', hotelImage);

        try {
            const response = await fetch('https://localhost:7239/api/Hotels', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data);

            // Clear form data after successful submission
            setHotelName('');
            setLocation('');
            setImage(null);

            toast.success('Hotel posted successfully!');
        } catch (error) {
            console.error('Error uploading hotel:', error);
            toast.error('An error occurred while posting the hotel.');
        }
    }

    function handleImageChange(event) {
        setImage(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!hotelName || !location || !hotelImage) {
            toast.error('Please fill in all required fields.');
            return;
        }

        uploadHotel();
    }

    return (
        <div className='maincomponent' style={{ padding: '20px', textAlign: 'center', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2>Hotel</h2>
            <h5>Upload Hotels for your package</h5>
            <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2} direction="column">
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Hotel Name"
                            onChange={e => setHotelName(e.target.value)}
                            value={hotelName}
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
                        <Button variant="outlined" color="secondary" type="submit">Post Hotel</Button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <Link to="/uploadrestaurants" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="secondary">
                                Upload Restaurants
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>

            <ToastContainer position="bottom-right" />
            <br /><br />
            {/* <Viewhotel /> */}
        </div>
    )
}

export default PostHotel;
