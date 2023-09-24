import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import { RiContactsLine } from 'react-icons/ri';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { deleteContact } from 'redux/contactsAsyncActions';

function ContactItem({ id, name, phone }) {
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
    <ListItem>
      <RiContactsLine fontSize="large" />
      <ListItemText primary={name} secondary={phone} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={handleDeleteContact}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ContactItem;
