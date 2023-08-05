import React, { useState } from 'react';
import axios from 'axios';

const AdminImageComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      
      const formData = new FormData();
      formData.append('imageFile', selectedFile);

      // Make a POST request to the server to upload the file
      axios.post(`https://localhost:7239/api/Gallery`, formData)
        .then((response) => {
       
          console.log('File uploaded successfully:', response.data);
        })
        .catch((error) => {
 
          console.error('Error uploading file:', error);
        });
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div>
      <h2>File Upload Example</h2>
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .pdf" 
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default AdminImageComponent;