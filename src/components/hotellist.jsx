import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faUtensils, faLandmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function DestinationDetails() {
    const navigate = useNavigate();
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [hotels, setHotels] = useState([]);
    const [restaurents, setRestaurants] = useState([]);
    const [touristSpots, setTouristSpots] = useState([]);
    const { destination } = useParams();

    useEffect(() => {
        // Fetch hotels
        axios.get(`https://localhost:7239/api/Hotels/Location?location=${encodeURIComponent(destination)}`)
            .then(response => {
                setHotels(response.data);
            })
            .catch(error => {
                console.error('Error fetching hotel data:', error);
            });

        // Fetch restaurents
        axios.get(`https://localhost:7239/api/Restaurant/Location?location=${encodeURIComponent(destination)}`)
            .then(response => {
                setRestaurants(response.data);
            })
            .catch(error => {
                console.error('Error fetching restaurent data:', error);
            });

        // Fetch tourist spots
        axios.get(`https://localhost:7239/api/TouristSpots/Location?location=${encodeURIComponent(destination)}`)
            .then(response => {
                setTouristSpots(response.data);
            })
            .catch(error => {
                console.error('Error fetching tourist spot data:', error);
            });
    }, [destination, navigate, selectedHotel, selectedRestaurant]);

    const cardStyle = {
        textDecoration: 'none',
        cursor: 'pointer',
        paddingBottom: '2rem',
        paddingTop: '1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        backgroundColor: '#ffffff',
        transition: '0.3s',
    };

    const cardBodyStyle = {
        fontSize: '1.2rem',
        color: '#333333',
    };

    const ImageStyle = {
        width: '100%',
        height: '100%',
        transition: '0.3s ease-in-out',
        borderRadius: '10px 10px 0 0',
    };

    const headingStyle = {
        margin: '2rem 0',
        color: '#333333',
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center',
    };

    const showSubmitButton = selectedHotel && selectedRestaurant;


    const handleBookingSubmit = () => {
        if (selectedHotel && selectedRestaurant) {
            // Extract hotelId, restaurentId, and packageId from selectedHotel and selectedRestaurant
            const hotelId = selectedHotel.hotelId;
            const restaurentId = selectedRestaurant.restaurentId;
            const packageId = selectedHotel.packageId;

            // Construct the URL with selected hotelId, restaurentId, and packageId as parameters
            const bookingUrl = `/booking?hotelId=${hotelId}&restaurentId=${restaurentId}&packageId=${packageId}`;

            // Log details before navigating
            console.log('Selected Hotel:', selectedHotel);
            console.log('Selected Restaurant:', selectedRestaurant);
            console.log('Booking URL:', bookingUrl);

            // Navigate to the booking URL
            navigate(bookingUrl);
        }
    };




    return (
        <div className='maincomponent'>
            <div className="destination-details">
                <h1 style={headingStyle}>{destination} Details</h1>

                {/* Hotels */}
                <h2 style={headingStyle}>Hotels</h2>
                <div className="hotel-cards">
                    <Row>
                        {hotels && hotels.length > 0 ? (
                            hotels.map(hotel => (
                                <Col sm={4} key={hotel.hotelId}>
                                    <Card style={cardStyle}>
                                        <Card.Img variant="top" style={ImageStyle} src={`data:image/jpeg;base64,${hotel.hotelImage}`} alt="Hotel image" />
                                        <Card.Body style={cardBodyStyle}>
                                            <Card.Title>{hotel.name}</Card.Title>
                                            <Card.Text>Location: {hotel.location}</Card.Text>
                                            <Card.Text>Rating: {hotel.rating}/5</Card.Text>
                                            <button
                                                type="button"
                                                className={`btn btn-primary ${selectedHotel === hotel ? 'selected' : ''}`}
                                                onClick={() => setSelectedHotel(hotel)}
                                            >
                                                Select Hotel
                                            </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <p>No hotels available for {destination}.</p>
                        )}
                    </Row>
                </div>

                {/* Restaurants */}
                <h2 style={headingStyle}>Restaurants</h2>
                <div className="restaurent-cards">
                    <Row>
                        {restaurents && restaurents.length > 0 ? (
                            restaurents.map(restaurent => (
                                <Col sm={4} key={restaurent.restaurentId}>
                                    <Card style={cardStyle}>
                                        <Card.Img variant="top" style={ImageStyle} src={`data:image/jpeg;base64,${restaurent.restaurentImage}`} alt="Restaurant image" />
                                        <Card.Body style={cardBodyStyle}>
                                            <Card.Title>{restaurent.restaurentName}</Card.Title>
                                            <button
                                                type="button"
                                                className={`btn btn-primary ${selectedRestaurant === restaurent ? 'selected' : ''}`}
                                                onClick={() => setSelectedRestaurant(restaurent)}
                                            >
                                                Select Restaurant
                                            </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <p>No restaurents available for {destination}.</p>
                        )}
                    </Row>
                </div>

                {/* Tourist Spots */}
                <h2 style={headingStyle}>Tourist Spots</h2>
                <div className="tourist-spot-cards">
                    <Row>
                        {touristSpots && touristSpots.length > 0 ? (
                            touristSpots.map(touristSpot => (
                                <Col sm={4} key={touristSpot.spotId}>
                                    <Card style={cardStyle}>
                                        <Card.Img variant="top" style={ImageStyle} src={`data:image/jpeg;base64,${touristSpot.spotsImage}`} alt="Tourist Spot image" />
                                        <Card.Body style={cardBodyStyle}>
                                            <Card.Title>{touristSpot.name}</Card.Title>
                                            <Card.Text>Description: {touristSpot.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <p>No tourist spots available for {destination}.</p>
                        )}
                    </Row>
                </div>

                {showSubmitButton && (
                    <div className="submit-booking">
                        {/* Use the handleBookingSubmit function */}
                        <button onClick={handleBookingSubmit} className="btn btn-success">
                            <Link to={`/booking?hotelId=${selectedHotel.hotelId}&restaurentId=${selectedRestaurant.restaurentId}&packageId=${selectedHotel.packageId}`}>
                                Book Now
                            </Link>
                        </button>
                    </div>
                )}



            </div>
        </div>
    );
}

export default DestinationDetails;
