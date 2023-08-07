import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faUtensils } from '@fortawesome/free-solid-svg-icons';

function BookingSummary({ bookingData, selectedPackage, selectedHotel, selectedRestaurant }) {
    const [touristSpots, setTouristSpots] = useState([]);
    
    const cardStyle = {
        textDecoration: 'none',
        cursor: 'pointer',
        paddingBottom: '2rem',
        paddingTop: '1rem'
    };

    const cardBodyStyle = {
        fontSize: '1.2rem', // Adjust the font size as desired
    };

    const ImageStyle = {
        width: '100%',
        height: '100%',
        transition: '0.3s ease-in-out',
        borderRadius: '7px',
    };

    useEffect(() => {
        async function fetchTouristSpots() {
            try {
                const response = await fetch('https://localhost:7239/api/TouristSpots');
                const data = await response.json();
                setTouristSpots(data.filter(spot => spot.packageId === selectedPackage.packageId));
                console.log('spotsdata:', data);
            } catch (error) {
                console.error('Error fetching tourist spots:', error);
            }
        }

        if (selectedPackage) {
            fetchTouristSpots();
        }
    }, [selectedPackage]);

    return (
        <div className='booking-summary'>
            <h2>Booking Summary</h2>
            <Row>
                {/* Display selected package details */}
                <Col sm={4}>
                    <Card className='shadow' style={cardStyle}><h3>Package Details</h3>
                        <Card.Img variant='top' style={ImageStyle} src={`data:image/jpeg;base64,${selectedPackage.packageImage}`} alt='Package' />
                        <Card.Body style={cardBodyStyle}>
                            <Card.Title className='primary'>{selectedPackage.packageName}</Card.Title>
                            <Card.Text>{selectedPackage.description}</Card.Text>
                            <Card.Text>Adult Price: Rs-{selectedPackage.adultPrice}</Card.Text>
                            <Card.Text>Child Price: Rs-{selectedPackage.childPrice}</Card.Text>
                            <Card.Text>Duration: {selectedPackage.days} days</Card.Text>
                            <Card.Text>
                                <FontAwesomeIcon icon={faHotel} /> Hotel Included
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Display selected hotel details */}
                <Col sm={4}>
                    <Card className='shadow' style={cardStyle}><h3>Hotel Details</h3>
                        <Card.Img variant='top' style={ImageStyle} src={`data:image/jpeg;base64,${selectedHotel.hotelImage}`} alt='Hotel' />
                        <Card.Body style={cardBodyStyle}>
                            <Card.Title className='primary'>{selectedHotel.hotelName}</Card.Title>
                            <Card.Text>{selectedHotel.description}</Card.Text>
                            {/* Display more hotel details as needed */}
                            <Card.Text>
                                <FontAwesomeIcon icon={faUtensils} /> Restaurant Included
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Display selected restaurant details */}
                <Col sm={4}>
                    <Card className='shadow' style={cardStyle}><h3>Restaurant Details</h3>
                        <Card.Img variant='top' style={ImageStyle} src={`data:image/jpeg;base64,${selectedRestaurant.restaurentImage}`} alt='Restaurant' />
                        <Card.Body style={cardBodyStyle}>
                            <Card.Title className='primary'>{selectedRestaurant.restaurentName}</Card.Title>
                            <Card.Text>{selectedRestaurant.description}</Card.Text>
                            {/* Display more restaurant details as needed */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Display tourist spots */}
            <h3>Day wise activities - Spots To Visit</h3>
            <Row>
                {touristSpots.map((spot, index) => (
                    <Col sm={4} key={spot.spotId}>
                        <Card className='shadow' style={cardStyle}>
                            <Card.Img variant='top' style={ImageStyle} src={`data:image/jpeg;base64,${spot.spotsImage}`} alt='Tourist Spot' />
                            <Card.Body style={cardBodyStyle}>
                                <Card.Title className='primary'>Day {index + 1}</Card.Title>
                                <Card.Text>{spot.name}</Card.Text>
                                <Card.Text>{spot.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default BookingSummary;
