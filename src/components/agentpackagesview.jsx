import React, { Component } from 'react';
import axios from 'axios';
import { CardGroup, Card } from 'react-bootstrap';
import Login from './login'; // Adjust the import path

class AgentPackageView extends Component {
  state = {
    packages: [],
    isLoggedIn: localStorage.getItem('nameid') !== null,
  };

  componentDidMount() {
    if (this.state.isLoggedIn) {
      this.getPackagesByUserId();
    }
  }

  getPackagesByUserId = async () => {
    try {
      const userId = localStorage.getItem('nameid');
      const response = await axios.get(`https://localhost:7239/api/Package/user/${userId}`);
      this.setState({ packages: response.data });
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  render() {
    const { packages, isLoggedIn } = this.state;

    return (
      <div>
        {isLoggedIn ? (
          <CardGroup>
            {packages.map(packageItem => (
              <Card key={packageItem.packageId}>
                <Card.Img
                  variant="top"
                  src={`https://localhost:7239/api/Package/user/${packageItem.packageImage}`} // Adjust the base URL
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
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default AgentPackageView;
