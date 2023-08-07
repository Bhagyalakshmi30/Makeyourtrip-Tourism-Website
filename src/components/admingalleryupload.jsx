import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardMedia, CardContent, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './adminimagecomponent.css';

const AdminImageComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    fetchImageList();
  }, []);

  const fetchImageList = async () => {
    try {
      const response = await axios.get('https://localhost:7239/api/Gallery');
      setImageList(response.data);
    } catch (error) {
      console.error('Error fetching image list:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('imageFile', selectedFile);

      axios.post(`https://localhost:7239/api/Gallery`, formData)
        .then((response) => {
          toast.success('Image uploaded successfully');
          fetchImageList();
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
          toast.error('Error uploading image');
        });
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div className='maincomponent'>
      <h2>Upload beautiful images for Gallery</h2>
      <div className='upload-form'>
        <input
          type='file'
          accept='.jpg, .jpeg, .png'
          onChange={handleFileChange}
        />
        <Button variant='contained' color='primary' onClick={handleUpload}>
          Upload
        </Button>
      </div>
      <div className='image-card-container'>
        {imageList.map((image, index) => (
          <Card key={index} className='image-card'>
            <CardMedia
              component='img'
              height='140'
              image={`data:image/jpeg;base64,${image.fileContents}`}
              alt={`Image ${index}`}
            />
            <CardContent>
              {/* You can add any additional content or details here */}
            </CardContent>
          </Card>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminImageComponent;
