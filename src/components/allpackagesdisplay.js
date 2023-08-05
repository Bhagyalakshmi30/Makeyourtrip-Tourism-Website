import React, { Component } from 'react';
import axios from 'axios';
import { CardGroup, Card } from 'react-bootstrap';

class AllPackages extends Component {
  state = {
    packages: [],
  };

  componentDidMount() {
    this.getPackages();
  }

  getPackages = async () => {
    try {
      const response = await axios.get('https://localhost:7239/api/Package');
      this.setState({ packages: response.data });
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  render() {
    const { packages } = this.state;

    return (
      <div>
        <h2>Packages</h2>
        <CardGroup>
          {packages.map(packageItem => (
            <Card key={packageItem.packageId}>
              <Card.Img
                variant="top"
                src={`https://localhost:7239/${packageItem.packageImage}`} // Adjust the image URL
                alt={packageItem.destination}
              />
              <Card.Body>
                <Card.Title>{packageItem.destination}</Card.Title>
                <Card.Text>
                  Adult Price: ${packageItem.adultPrice}
                  <br />
                  Child Price: ${packageItem.childPrice}
                  <br />
                  Duration: {packageItem.days} days
                  <br />
                  Description: {packageItem.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </div>
    );
  }
}

export default AllPackages;
