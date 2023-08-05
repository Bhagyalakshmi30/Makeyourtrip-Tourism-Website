import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel'; // Import the Carousel component
import './gallery.css';


// import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from "react-image-gallery";

const ImageGallery = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchImageList = async () => {
      try {
        // Fetch the list of image names from the server
        const response = await axios.get('https://localhost:7239/api/Gallery', { responseType: 'json' });
        setImageList(response.data.map((image) => image.fileContents));
      } catch (error) {
        console.error('Error fetching image list:', error);
      }
    };

    fetchImageList();
  }, []);
  

  return (
    <div className="image-gallery-container">
    <h2 className="gallery-title">Image Gallery</h2>
    <div className="carousel-container">
      <Carousel
        showThumbs={false} // Hide thumbnail navigation
        showStatus={false} // Hide status bar
        infiniteLoop={true} // Enable infinite loop
        autoPlay={true} // Enable auto play
        interval={3000} // Set auto play interval in milliseconds
      >
        {imageList.map((fileData, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={`data:image/jpeg;base64,${fileData}`}
              alt={`Image ${index}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
  );
};

export default ImageGallery;