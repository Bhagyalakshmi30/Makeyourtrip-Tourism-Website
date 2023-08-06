import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HotelList from './hotellist'; // Import the HotelList component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faPlane, faUtensils, faCar } from '@fortawesome/free-solid-svg-icons';

function ViewAllPackages({ packagesList }) {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [hotels, setHotels] = useState([]);

    const handlePackageClick = async (pkg) => {
        setSelectedPackage(pkg);

        try {
            const hotelResponse = await fetch(`https://localhost:7239/api/Package/destination/destination=${encodeURIComponent(pkg.destination)}`);
            const hotelData = await hotelResponse.json();
            setHotels(hotelData);

            console.log('Selected destination:', pkg.destination);
        } catch (error) {
            console.error('Error fetching hotel data:', error);
        }
    };

    const cardStyle = {
        textDecoration: 'none',
        cursor: 'pointer',
        paddingBottom: '2rem',
        paddingTop: '1rem'
    };

    const cardBodyStyle = {
        fontSize: '1.2rem', // Adjust the font size as desired
    };

    const hoverStyle = {
        textDecoration: 'none',
        transform: 'translateY(-5px)',
    };

    const ImageStyle = {


        width: '100%',
        height: '100%',
        transition: '0.3s ease-in-out',
        borderRadius: '7px',

    };

    

    return (
        <div className="trip">
            <h2>Packages specially made for you</h2>

            <div className="tripcard">
                <Row>
                    {packagesList.map(pkg => (
                        <Col sm={4} key={pkg.packageId}>
                            <Link
                                to={{
                                    pathname: `/hotellist/${encodeURIComponent(pkg.destination)}`, // Change to the appropriate route
                                    state: {
                                        hotels: hotels,
                                    },
                                }}
                                style={cardStyle}
                            >
                                <Card className="shadow" onClick={() => handlePackageClick(pkg)} style={cardStyle}>
                                    <Card.Img variant="top" style={ImageStyle} src={`data:image/jpeg;base64,${pkg.packageImage}`} alt="Card image" thumbnail />
                                    <Card.Body style={cardBodyStyle}>
                                        <Card.Title className='primary'>{pkg.destination}</Card.Title>
                                        <Card.Text>{pkg.description}</Card.Text>
                                        <Card.Text >Adult Price:Rs-{pkg.adultPrice}</Card.Text>
                                        <Card.Text>Child Price: Rs-{pkg.childPrice}</Card.Text>
                                        <Card.Text>Duration: {pkg.days} days</Card.Text>
                                        <Card.Text><FontAwesomeIcon icon={faHotel} />{' '}{' '}{' '}{' '}{' '}{' '}
                                            
                                        {' '}
                                             <FontAwesomeIcon icon={faPlane} />{' '}{' '}{' '}{' '}{' '}
                                            <FontAwesomeIcon icon={faUtensils} />{' '}{' '}{' '}{' '}{' '}
                                             <FontAwesomeIcon icon={faCar} />{' '}{' '}{' '}{' '}{' '}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default ViewAllPackages;
