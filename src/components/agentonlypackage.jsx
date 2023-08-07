import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Page, Text, View, Document, StyleSheet, Image, pdf } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
    flexWrap: 'wrap',
  },
  outerBorder: {
   
    padding: 20, 
    flexGrow: 1,
    flexBasis: '100%',
  },
  innerBorder: {
    border: '1px solid black', 
    padding: 10, 
    flexGrow: 1,
    flexBasis: '100%',
  },
  card: {
    margin: 10,
    width: '300px',
  },
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cardContent: {
    marginLeft: 10,
  },
  cardMediaa: {
    width: '280px',
    height: '150px',
    objectFit: 'cover',
    paddingRight: '20px',
  },
});

const PDFView = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={{fontSize:20,marginLeft:'40%'}}>Package Details</Text>
      <View style={styles.outerBorder}>
        <View style={styles.innerBorder}>
          {data.map((item, index) => (
            <View key={index} style={styles.container}>
              {/* {item.packageImage && (
                <Image
                  src={`data:image/jpeg;base64,${item.packageImage}`}
                  style={styles.cardMediaa}
                />
              )} */}
              <View style={styles.cardContent}>
                 <Text style={{fontSize:20,paddingBottom:10}}>{item.packageName}</Text> 
                <Text style={{fontSize:15,paddingBottom:10}}>{item.destination}</Text>
                <Text style={{fontSize:15,paddingBottom:10}}>{item.days} days</Text>
                <Text style={{fontSize:15,paddingBottom:2}}>Price for Adult: {item.adultPrice}</Text>
                <Text style={{fontSize:15,paddingBottom:2}}>Price for Child: {item.childPrice}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);



const AgentOnlyPackage = () => {
    const [uploadedFileData, setUploadedFileData] = useState([]);
    const userId = localStorage.getItem('nameid'); // Get the user ID from local storage
  
    const getPackagesByUserId = async () => {
      try {
        const res = await axios.get(`https://localhost:7239/api/Package/user/${userId}`, {
          responseType: 'json',
        });
        if (Array.isArray(res.data)) {
          setUploadedFileData(res.data);
        } else {
          console.log('Invalid data format received:', res.data);
        }
      } catch (ex) {
        console.log('Error fetching data:', ex);
      }
    };
  
    const handleOpenPDF = () => {
      if (uploadedFileData.length > 0) {
        const doc = <PDFView data={uploadedFileData} />;
        pdf(doc).toBlob().then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url);
        });
      }
    };
  
  return (
    <div className='maincomponent'>
    <h2>Click to view your Packages in Make Your Trip</h2>
    <h5>You can also download the details in PDF</h5>
    <Button variant="outlined" color="secondary" onClick={getPackagesByUserId}>
      View My Packages
    </Button>&nbsp;&nbsp;

    {uploadedFileData.length > 0 && (
      <>
        <PDFDownloadLink document={<PDFView data={uploadedFileData} />} fileName="tour_details.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : (
              <Button variant="outlined" color="primary">
                Download PDF
              </Button>
            )
          }
        </PDFDownloadLink>
        &nbsp;&nbsp;
        <Button variant="outlined" color="primary" onClick={handleOpenPDF}>
          Open PDF
        </Button>
      </>
    )}

      {uploadedFileData.length > 0 && (
        <div>
          <br />
          <h3>Package Details</h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {uploadedFileData.map((item, index) => (
              <Card key={index} style={styles.card}>
                <CardContent>
                  <Typography variant="h3" component="h2">
                    {item.packageName}
                  </Typography>
                  <Typography color="textSecondary">
                    {item.destination}
                  </Typography>
                  <Typography color="textSecondary">
                    {item.days} days
                  </Typography>
                  <Typography color="textSecondary">
                    Price for Adult: {item.adultPrice}
                  </Typography>
                  <Typography color="textSecondary">
                    Price for Child: {item.childPrice}
                  </Typography>
                </CardContent>
                {/* <CardMedia
                  component="img"
                  src={`data:image/jpeg;base64,${item.packageImage}`}
                  alt={`Image ${index + 1}`}
                  style={{ width: '320px',
                  height: '150px',
                  objectFit: 'cover',}}
                /> */}
              </Card>
            ))}
          </div>
          <br />
        </div>
      )}
    </div>
  );
};

export default AgentOnlyPackage;