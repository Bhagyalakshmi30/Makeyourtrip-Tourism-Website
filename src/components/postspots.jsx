import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostSpot = () => {
    const [spotName, setSpotName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [spotImage, setSpotImage] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        if (!spotName || !description || !location || !spotImage) {
            toast.error('Please fill in all required fields.');
            return;
        }

        try {
            const response = await fetch('https://localhost:7239/api/Package/lastgeneratedpackageid');
            const packageData = await response.json();
            
            console.log(packageData); // Log the package data
            
            const packageId = packageData;

            const formData = new FormData();
            formData.append('name', spotName);
            formData.append('description', description);
            formData.append('location', location);
            formData.append('imageFile', spotImage);
            formData.append('packageId', packageId);

            const responseSpot = await fetch('https://localhost:7239/api/TouristSpots', {
                method: 'POST',
                body: formData,
            });

            if (responseSpot.ok) {
                const data = await responseSpot.json();
                console.log(data);
                toast.success('Spot posted successfully!');
                setSpotName('');
                setDescription('');
                setLocation('');
                setSpotImage(null);
            } else {
                toast.error('An error occurred while posting the spot.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while posting the spot.');
        }
    }

    function handleImageChange(event) {
        setSpotImage(event.target.files[0]);
    }


    return (
        <div className='maincomponent' style={{ padding: '20px', textAlign: 'center', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2>Spot</h2>
            <h5>Add a Tourist Spot</h5>
            <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2} direction="column">
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Spot Name"
                            onChange={e => setSpotName(e.target.value)}
                            value={spotName}
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
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Description"
                            onChange={e => setDescription(e.target.value)}
                            value={description}
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
                        <Button variant="outlined" color="secondary" type="submit">Post Spot</Button>
                    </div>
                </form>
            </div>
            <ToastContainer position="bottom-right" />
        </div>
    )
}

export default PostSpot;
