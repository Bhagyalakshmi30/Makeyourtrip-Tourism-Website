import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import Viewhotel from './viewhotel';


const PostHotel = () => {
    const [hotelName, setHotelName] = useState('');
    const [location, setLocation] = useState('');
    const [hotelImage, setImage] = useState(null);
    const [packageId, setPackageId] = useState(null);

    function handleImageChange(event) {
        setImage(event.target.files[0]);
    }

    async function uploadHotels() {
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
        } catch (error) {
            console.error('Error uploading hotels:', error);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('hotelName', hotelName);
        formData.append('location', location);
        formData.append('imageFile', hotelImage);

        try {
            const response = await fetch('https://localhost:7239/api/Packages', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data);

            // Set the generated packageId
            setPackageId(data.packageId);

            // Clear form data after successful submission
            setHotelName('');
            setLocation('');
            setImage(null);

            // Upload hotels for this package using the generated packageId
            uploadHotels();
        } catch (error) {
            console.error('Error creating package:', error);
        }
    }
    return (
        <div>
        <React.Fragment>
            <h2>Hotel</h2>
            <form onSubmit={handleSubmit}>
               
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="HotelName"
                        onChange={e => setHotelName(e.target.value)}
                        value={hotelName}
                        fullWidth
                        required
                    />
                    <br></br>
                    <br></br>
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
               <br></br>
                    <br></br>
            
                <input
                    type="file"
                    onChange={handleImageChange}
                    accept=".jpg,.jpeg,.png"
                    required
                />
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="outlined" color="secondary" type="submit">Post Hotel</Button>
                </div>
            </form>

        </React.Fragment>
         <br></br>
         <Viewhotel/>
         </div>
    )
}

export default PostHotel;