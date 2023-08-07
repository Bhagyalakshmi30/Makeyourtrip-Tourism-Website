import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const StyledMainComponent = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const StyledTable = styled(Table)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  border: `1px solid ${theme.palette.grey[300]}`,
  '& th': {
    backgroundColor: theme.palette.grey[300],
    fontSize: '1.2rem',
    fontFamily: 'Poppins, sans-serif',
  },
  '& td': {
    fontSize: '1.1rem',
  },
}));

const StyledApproveButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4caf50',
  color: theme.palette.getContrastText('#4caf50'),
  '&:hover': {
    backgroundColor: '#45a049',
  },
}));

const StyledRejectButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.getContrastText(theme.palette.error.main),
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
}));

const AdminApproval = () => {
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
      toast.error('Error fetching pending users.');
    }
  };

  const handleApproveUser = async (userId) => {
    try {
      await axios.post(`https://localhost:7239/api/Users/approve/${userId}`);
      fetchPendingUsers();
      toast.success('User approved successfully.');
    } catch (error) {
      console.error('Error approving user:', error);
      toast.error('Error approving user.');
    }
  };

  const handleRejectUser = async (userId) => {
    try {
      await axios.post(`https://localhost:7239/api/Users/reject/${userId}`);
      fetchPendingUsers();
      toast.info('User rejected.');
    } catch (error) {
      console.error('Error rejecting user:', error);
      toast.error('Error rejecting user.');
    }
  };

  return (
    
    <StyledMainComponent className='admin-approval' sx={{ paddingTop: '120px' }}>
      <h2>Agents are waiting for your approval -Approve valid users</h2>
      <StyledTable>
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
                <StyledApproveButton onClick={() => handleApproveUser(student.userId)}>
                  Approve
                </StyledApproveButton>
              </TableCell>
              <TableCell>
                <StyledRejectButton onClick={() => handleRejectUser(student.userId)}>
                  Reject
                </StyledRejectButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      
    </StyledMainComponent>
  );
};

export default AdminApproval;

