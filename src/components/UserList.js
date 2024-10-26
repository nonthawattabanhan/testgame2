import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';

const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Name</TableCell>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Job</TableCell>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.job}</TableCell>
              <TableCell>
                <Button 
                  onClick={() => onEdit(user)} 
                  color="primary" 
                  variant="outlined"
                  style={{ marginRight: '10px' }}
                >
                  Edit
                </Button>
                <Button 
                  onClick={() => onDelete(user.id)} 
                  color="secondary" 
                  variant="outlined"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
