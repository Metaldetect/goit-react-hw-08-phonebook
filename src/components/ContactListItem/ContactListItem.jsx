import React from 'react';
import {
  ListItemAvatar,
  Avatar,
  Typography,
  Box,
  Button,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { deleteContact } from 'redux/contactsAsyncActions';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = async () => {
    try {
      await dispatch(deleteContact(id));
      Notiflix.Notify.success('Contact deleted successfully!');
    } catch (error) {
      Notiflix.Notify.failure('An error occurred while deleting the contact.');
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '16px',
      }}
    >
      <ListItemAvatar>
        <Avatar
          alt={`Avatar ${name}`}
          src="https://source.unsplash.com/random"
        />
      </ListItemAvatar>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h4">{name}</Typography>
        <Typography variant="body1" sx={{ color: '#555', marginLeft: '16px' }}>
          {phone}
        </Typography>
      </Box>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handleDeleteContact}
      >
        Delete
      </Button>
    </Paper>
  );
};

export default ContactItem;
