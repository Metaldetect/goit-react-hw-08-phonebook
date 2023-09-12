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

import { useDeleteContactFromFilterMutation } from 'redux/contactsApi';
import Notiflix from 'notiflix';

function ContactItem({ id, name, phone }) {
  const [deleteContactFromFilter] = useDeleteContactFromFilterMutation();

  const handleDeleteContact = async () => {
    try {
      await deleteContactFromFilter(id);
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
      <DeleteButton onClick={() => handleDeleteContact(id)}>
        <AiFillDelete />
      </DeleteButton>
    </ContactListItem>
  );
}

export default ContactItem;
