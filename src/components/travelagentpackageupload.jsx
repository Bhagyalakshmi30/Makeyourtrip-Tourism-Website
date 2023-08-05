import React, { useState } from 'react';
import axios from 'axios';

const TravelAgentPackageForm = () => {
    const [formData, setFormData] = useState({
        destination: '',
        adultPrice: 0,
        childPrice: 0,
        days: 0,
        isHotel: '',
        isFlights: '',
        isMeals: '',
        isTravel: '',
        description: '',
        packageImage: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageUpload = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            packageImage: event.target.files[0],
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const packageData = new FormData();
        for (const key in formData) {
            packageData.append(key, formData[key]);
        }

        try {
            await axios.post('https://localhost:7239/api/Packages', packageData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Clear form data after successful submission
            setFormData({
                destination: '',
                adultPrice: 0,
                childPrice: 0,
                days: 0,
                isHotel: '',
                isFlights: '',
                isMeals: '',
                isTravel: '',
                description: '',
                packageImage: null,
            });
        } catch (error) {
            console.error('Error submitting package details:', error);
        }
    };

    return (

        <div>
            <h2>Add a New Package</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Destination:
                    <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Adult Price:
                    <input
                        type="number"
                        name="adultPrice"
                        value={formData.adultPrice}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Child Price:
                    <input
                        type="number"
                        name="childPrice"
                        value={formData.childPrice}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Days:
                    <input
                        type="number"
                        name="days"
                        value={formData.days}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Include Hotel:
                    <input
                        type="text"
                        name="isHotel"
                        value={formData.isHotel}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Include Flights:
                    <input
                        type="text"
                        name="isFlights"
                        value={formData.isFlights}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Include Meals:
                    <input
                        type="text"
                        name="isMeals"
                        value={formData.isMeals}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Include Travel:
                    <input
                        type="text"
                        name="isTravel"
                        value={formData.isTravel}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Package Image:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
      
  
};

export default TravelAgentPackageForm;
