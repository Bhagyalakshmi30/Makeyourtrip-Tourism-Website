import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const Package = () => {
  const [imageList, setImageList] = useState([]);
  const [newDestination, setNewDestination] = useState({
    destination: '',
    adultPrice: '',
    childPrice: '',
    days: '',
    userId:'',
    description: '',
    imageFile:null
   
  });

  useEffect(() => {
    fetchImageList();
  }, []);

  const fetchImageList = async () => {
    try {
     
      const response = await axios.get('https://localhost:7239/api/Package', { responseType: 'json' });
      setImageList(response.data);
    } 
    catch (error) {
      console.error('Error fetching image list:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewDestination({
      ...newDestination,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setNewDestination({
      ...newDestination,
      packageImage: file,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    
      const formData = new FormData();
      formData.append('userId', newDestination.userId);
      formData.append('destination', newDestination.destination);
      formData.append('adultPrice', newDestination.adultPrice);
      formData.append('childPrice', newDestination.childPrice);
      formData.append('days', newDestination.days);
      formData.append('description', newDestination.description);
      formData.append('imageFile', newDestination.packageImage);

      await axios.post('https://localhost:7239/api/Package/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

     fetchImageList();

      setNewDestination({
        userId:'',
        destination: '',
        adultPrice: '',
        childPrice: '',
        days: '',
        description: '',
        imageFile: null,
      });
      console.log("sucess")
     
    } catch (error) {
      console.error('Error posting destination:', error);
    }
   
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Destination</TableCell>
            <TableCell>Adult (Price)</TableCell>
            <TableCell>Child (Price)</TableCell>
            <TableCell>Days</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {imageList.map((destination) => (
            <TableRow key={destination.packageId}>
              <TableCell>{destination.destination}</TableCell>
              <TableCell>{destination.adultPrice}</TableCell>
              <TableCell>{destination.childPrice}</TableCell>
              <TableCell>{destination.days}</TableCell>
              <TableCell>{destination.description}</TableCell>
              <TableCell>
                <img
                  src={`data:image/jpeg;base64,${destination.packageImage}`}
                  alt="image"
                  style={{ width: '100px', height: 'auto' }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Add New Destination</Typography>
        <TextField
          fullWidth
          label="Destination"
          name="destination"
          value={newDestination.destination}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Adult (Price)"
          name="adultPrice"
          value={newDestination.adultPrice}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Child (Price)"
          name="childPrice"
          value={newDestination.childPrice}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="User ID"
          name="userId"
          value={newDestination.userId}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Days"
          name="days"
          value={newDestination.days}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          multiline
          label="Description"
          name="description"
          value={newDestination.description}
          onChange={handleInputChange}
          margin="normal"
        />
        <label htmlFor="packageImage">
           Image
          <input
            type="file"
            id="packageImage"
            name="packageImage"
            onChange={handleFileChange}
           
          />
        </label>
        <Button variant="contained" type="submit" color="primary">
          Add Destination
        </Button>
      </form>
   </div>
  );
};

export default Package;