import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faUtensils, faLandmark } from '@fortawesome/free-solid-svg-icons';

function DestinationDetails() {
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [hotels, setHotels] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
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

        // Fetch restaurants
        axios.get(`https://localhost:7239/api/Restaurant/Location?location=${encodeURIComponent(destination)}`)
            .then(response => {
                setRestaurants(response.data);
            })
            .catch(error => {
                console.error('Error fetching restaurant data:', error);
            });

        // Fetch tourist spots
        axios.get(`https://localhost:7239/api/TouristSpots/Location?location=${encodeURIComponent(destination)}`)
            .then(response => {
                setTouristSpots(response.data);
            })
            .catch(error => {
                console.error('Error fetching tourist spot data:', error);
            });
    }, [destination]);

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

    // Function to handle the booking submission
    const handleBookingSubmit = () => {
        if (selectedHotel && selectedRestaurant) {
            console.log('Selected Hotel:', selectedHotel);
            console.log('Selected Restaurant:', selectedRestaurant);
            // Replace with your actual package ID
            console.log('Selected Package ID:', null);
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
                <div className="restaurant-cards">
                    <Row>
                        {restaurants && restaurants.length > 0 ? (
                            restaurants.map(restaurant => (
                                <Col sm={4} key={restaurant.restaurantId}>
                                    <Card style={cardStyle}>
                                        <Card.Img variant="top" style={ImageStyle} src={`data:image/jpeg;base64,${restaurant.restaurentImage}`} alt="Restaurant image" />
                                        <Card.Body style={cardBodyStyle}>
                                            <Card.Title>{restaurant.restaurentName}</Card.Title>
                                            <button
                                                type="button"
                                                className={`btn btn-primary ${selectedRestaurant === restaurant ? 'selected' : ''}`}
                                                onClick={() => setSelectedRestaurant(restaurant)}
                                            >
                                                Select Restaurant
                                            </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <p>No restaurants available for {destination}.</p>
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

                {/* Submit Booking */}
                {showSubmitButton && (
                    <div className="submit-booking">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={handleBookingSubmit}
                        >
                            Submit Booking
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DestinationDetails;
