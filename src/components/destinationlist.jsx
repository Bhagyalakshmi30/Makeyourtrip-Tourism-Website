import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DestinationsList() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7239/api/Package')
            .then(response => {
                const uniqueDestinations = Array.from(
                    new Set(response.data.map(pkg => pkg.destination))
                );
                setDestinations(uniqueDestinations);
            })
            .catch(error => {
                console.error('Error fetching package data:', error);
            });
    }, []);

    const cardStyle = {
        margin: '10px', // Add space around the card
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow effect
       
        textDecoration: 'none',
        cursor: 'pointer',
    };

    const hoverStyle = {
        textDecoration: 'none',
        color: 'blue',
       
    };

    const destinationtext={
        color: 'blue',
        
    }

    return (
        <div>
            <h2 className='maincomponent'> All Destinations</h2>

            <h3 className='destinationtext'> Don't wait Choose your destination now <i class="fa fa-plane" aria-hidden="true"></i></h3>

            
            <Row className='mt-4'>
                {destinations.map((destination, index) => (
                    <Col sm={4} key={index}>
                        <Card
                            style={cardStyle}
                            
                        >
                            <Card.Body>
                                <Card.Title>
                                    <Link
                                        to={`/Package/destination/${encodeURIComponent(destination)}`}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {destination}
                                    </Link>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default DestinationsList;
