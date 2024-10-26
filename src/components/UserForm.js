import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper } from '@mui/material';

const UserForm = ({ onAdd, onUpdate, currentUser }) => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setJob(currentUser.job);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !job) return; // ตรวจสอบว่าข้อมูลครบถ้วน
    const userData = {
      id: currentUser ? currentUser.id : Date.now(), // ใช้ ID เดิมถ้าแก้ไข
      name,
      job
    };

    if (currentUser) {
      onUpdate(userData); // เรียกใช้ฟังก์ชันแก้ไขผู้ใช้
    } else {
      onAdd(userData); // เรียกใช้ฟังก์ชันเพิ่มผู้ใช้
    }

    setName(''); // ล้างฟิลด์หลังส่งข้อมูล
    setJob('');
  };

  return (
    <Paper style={{ padding: '16px', marginBottom: '16px' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginRight: '8px' }}
        />
        <TextField
          label="Job"
          variant="outlined"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          required
          style={{ marginRight: '8px' }}
        />
        <Button variant="contained" color="primary" type="submit">
          {currentUser ? 'Update User' : 'Add User'}
        </Button>
      </form>
    </Paper>
  );
};

export default UserForm;
