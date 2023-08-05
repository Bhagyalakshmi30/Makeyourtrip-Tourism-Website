import React ,{useState,useEffect} from 'react';
import axios from'axios';
import { TextField, Button, Container, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';


const AdminApproval =() =>
{

    const [pendingUsers, setPendingUsers] = useState([]);

    useEffect(() => {
      fetchPendingUsers();
    }, []);
  
    const fetchPendingUsers = async () => {
      try {
        const response = await axios.get('https://localhost:7239/api/Users');
        setPendingUsers(response.data);
      } catch (error) {
        console.error('Error fetching pending users:', error);
      }
    };
  
    const handleApproveUser = async (userId) => {
      try {
        await axios.post(`https://localhost:7239/api/Users/approve/${userId}`);
        fetchPendingUsers();
      } catch (error) {
        console.error('Error approving user:', error);
      }
    };
  
    const handleRejectUser = async (userId) => {
      try {
        await axios.post(`https://localhost:7239/api/Users/reject/${userId}`);
        fetchPendingUsers();
      } catch (error) {
        console.error('Error rejecting user:', error);
      }
    };
  

    return(
        <div>
<Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Agency</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pendingUsers.map((student) => (
            <TableRow key={student.userId}>
              <TableCell>{student.userName}</TableCell>
              <TableCell>{student.agency}</TableCell>
              <TableCell>{student.emailId}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.phoneNumber}</TableCell>
              <TableCell>
                <Button variant="contained" color="warning" onClick={() => handleApproveUser(student.userId)}>
                  Approve
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="contained" color="error" onClick={() => handleRejectUser(student.userId)}>
                  Reject
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
            </div>
    );
};
export default AdminApproval;