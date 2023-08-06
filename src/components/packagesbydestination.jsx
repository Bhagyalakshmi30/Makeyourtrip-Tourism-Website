import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import ViewAllPackages from './viewpackages'; 

function PackagesByDestination() {
    const { destination } = useParams();
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7239/api/Package/destination/${destination}`)
            .then(response => {
                setPackages(response.data);
            })
            .catch(error => {
                console.error('Error fetching package data:', error);
            });
    }, [destination]);

    return (
        <div>
             <div className='maincomponent'>
            <h2>Packages for {destination}</h2>
            <h3>{destination} is an Amazing Choice <i class="fa fa-suitcase" aria-hidden="true"></i></h3>
            <ViewAllPackages packagesList={packages} />
        </div>
        </div>
    );
}

export default PackagesByDestination;
