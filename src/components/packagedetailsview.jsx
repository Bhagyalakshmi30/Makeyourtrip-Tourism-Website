import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PackageDetailsView({ packageData, hotels, touristSpots, restaurants }) {
    return (
        <div>
            <h2>Package Details</h2>
            <Card>
                <Card.Img src={`data:image/jpeg;base64,${packageData.packageImage}`} alt="Package Image" />
                <Card.Body>
                    <Card.Title>{packageData.destination}</Card.Title>
                    <Card.Text>{packageData.description}</Card.Text>
                    <Card.Text>Adult Price: ${packageData.adultPrice}</Card.Text>
                    <Card.Text>Child Price: ${packageData.childPrice}</Card.Text>
                    <Card.Text>Duration: {packageData.days} days</Card.Text>
                    <Card.Text>Includes: {packageData.isHotel && "Hotel"} {packageData.isFlights && "| Flights"} {packageData.isMeals && "| Meals"} {packageData.isTravel && "| Travel"}</Card.Text>
                </Card.Body>
            </Card>

            {hotels && hotels.length > 0 && (
                <div>
                    <h2>Related Hotels</h2>
                    <Row>
                        {hotels.map(hotel => (
                            <Col sm={4} key={hotel.hotelId}>
                                <Card>
                                    <Card.Img src={`data:image/jpeg;base64,${hotel.hotelImage}`} alt="Hotel Image" />
                                    <Card.Body>
                                        <Card.Title>{hotel.hotelName}</Card.Title>
                                        <Card.Text>Location: {hotel.location}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}

            {touristSpots && touristSpots.length > 0 && (
                <div>
                    <h2>Tourist Spots</h2>
                    <Row>
                        {touristSpots.map(spot => (
                            <Col sm={4} key={spot.spotId}>
                                <Card>
                                    <Card.Img src={`data:image/jpeg;base64,${spot.spotsImage}`} alt="Spot Image" />
                                    <Card.Body>
                                        <Card.Title>{spot.name}</Card.Title>
                                        <Card.Text>Description: {spot.description}</Card.Text>
                                        <Card.Text>Location: {spot.location}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}

            {restaurants && restaurants.length > 0 && (
                <div>
                    <h2>Restaurants</h2>
                    <Row>
                        {restaurants.map(restaurant => (
                            <Col sm={4} key={restaurant.restaurantId}>
                                <Card>
                                    <Card.Img src={`data:image/jpeg;base64,${restaurant.restaurantImage}`} alt="Restaurant Image" />
                                    <Card.Body>
                                        <Card.Title>{restaurant.restaurantName}</Card.Title>
                                        <Card.Text>Location: {restaurant.location}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </div>
    );
}

export default PackageDetailsView;
