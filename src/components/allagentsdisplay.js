import React,{useState,useEffect} from "react";
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
      <Text style={{fontSize:20,marginLeft:'40%'}}>Agent Details</Text>
      <View style={styles.outerBorder}>
        <View style={styles.innerBorder}>
          {data.map((item, index) => (
            <View key={index} style={styles.container}>
             
              <View style={styles.cardContent}>
                <Text style={{fontSize:20,paddingBottom:10}}>{item.agency_Name}</Text>
                <Text style={{fontSize:15,paddingBottom:10}}>{item.userName}</Text>
                <Text style={{fontSize:15,paddingBottom:10}}>{item.userEmail}</Text>
                <Text style={{fontSize:15,paddingBottom:10}}>{item.phone_Number}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);


 
const Viewagent=()=>{
    const [uploadedFileData, setUploadedFileData] = useState([]);

    const getFileData = async () => {
      try {
        const res = await axios.get("https://localhost:7239/api/UserFun/Agent", {
          responseType: "json",
        });
        if (Array.isArray(res.data)) {
          setUploadedFileData(res.data);
        } else {
          console.log("Invalid data format received:", res.data);
        }
      } catch (ex) {
        console.log("Error fetching data:", ex);
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
    useEffect(()=>{
        getFileData();
    },[]);
    
return(
<div>


{uploadedFileData.length > 0 && (
  <>
  <PDFDownloadLink document={<PDFView data={uploadedFileData} />} fileName="agent_details.pdf">
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
          <br></br>
          <h3>Agent Details</h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {uploadedFileData.map((item, index) => (
              <Card key={index} style={{ margin: '10px', maxWidth: '300px' }}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {item.userName}
                  </Typography>
                  <Typography color="textSecondary">
                    {item.userEmail}
                  </Typography>
                  <Typography color="textSecondary">
                    {item.phone_Number}
                  </Typography>
                  <Typography color="textSecondary">
                    {item.agency_Name}
                  </Typography>
                </CardContent>
                
              </Card>
            ))}
          </div>
        </div>
      )}
</div>
);
};

export default Viewagent;