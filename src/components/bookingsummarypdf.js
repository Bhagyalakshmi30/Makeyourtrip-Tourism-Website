import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 12,
        padding: 20,
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
    },
    section: {
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 'auto',
        marginBottom: 10,
    },
});

function BookingSummaryPDF({ data, selectedPackage, selectedHotel, selectedRestaurant }) {
    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <Text style={styles.title}>Booking Summary</Text>

                {/* Display selected package details */}
                <View style={styles.section}>
                    <Text style={styles.title}>Package Details</Text>
                    <Image style={styles.image} src={`data:image/jpeg;base64,${selectedPackage.packageImage}`} />
                    <Text>Package Name: {selectedPackage.packageName}</Text>
                    <Text>Description: {selectedPackage.description}</Text>
                    <Text>Adult Price: Rs-{selectedPackage.adultPrice}</Text>
                    <Text>Child Price: Rs-{selectedPackage.childPrice}</Text>
                    <Text>Duration: {selectedPackage.days} days</Text>
                    <Text>Hotel Included</Text>
                </View>

                {/* Display selected hotel details */}
                <View style={styles.section}>
                    <Text style={styles.title}>Hotel Details</Text>
                    <Image style={styles.image} src={`data:image/jpeg;base64,${selectedHotel.hotelImage}`} />
                    <Text>Hotel Name: {selectedHotel.hotelName}</Text>
                    <Text>Description: {selectedHotel.description}</Text>
                    <Text>Restaurant Included</Text>
                </View>

                {/* Display selected restaurant details */}
                <View style={styles.section}>
                    <Text style={styles.title}>Restaurant Details</Text>
                    <Image style={styles.image} src={`data:image/jpeg;base64,${selectedRestaurant.restaurentImage}`} />
                    <Text>Restaurant Name: {selectedRestaurant.restaurentName}</Text>
                    <Text>Description: {selectedRestaurant.description}</Text>
                </View>

                {/* Display tourist spots */}
                <View style={styles.section}>
                    <Text style={styles.title}>Day wise activities - Spots To Visit</Text>
                    {data.map((spot, index) => (
                        <View key={spot.spotId} style={styles.section}>
                            <Text>Day {index + 1}</Text>
                            <Image style={styles.image} src={`data:image/jpeg;base64,${spot.spotsImage}`} />
                            <Text>{spot.name}</Text>
                            <Text>{spot.description}</Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
}

export default BookingSummaryPDF;
