import React from 'react';
import {
  ContactListItem,
  ContactIcon,
  ContactDetails,
  ContactName,
  ContactPhone,
  DeleteButton,
} from './ContactListItemStyles';
import { RiContactsLine } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
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
    <ContactListItem key={id}>
      <ContactIcon>
        <RiContactsLine />
      </ContactIcon>
      <ContactDetails>
        <ContactName>{name}</ContactName>
        <ContactPhone>{phone}</ContactPhone>
      </ContactDetails>
      <DeleteButton onClick={handleDeleteContact}>
        <AiFillDelete />
      </DeleteButton>
    </ContactListItem>
  );
}

export default ContactItem;
