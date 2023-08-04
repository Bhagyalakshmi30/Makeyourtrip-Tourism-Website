import ImageGallery from "react-image-gallery";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import './gallery.css';

export default function GalleryComponent() {

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];


  return (
    <div className="gallerycontainer">
      <h2>Gallery</h2>
      <ImageGallery items={images} 
      slideInterval={1000}
      slideOnThumbnailOver={true}
      
      />;
    </div>

  );

}


