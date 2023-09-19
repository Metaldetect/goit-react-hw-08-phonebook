import React from 'react';
import { ContactListWrapper } from './ContactListStyles';
import { useSelector } from 'react-redux';
import { selectContactsFilter } from 'redux/selectors';
import ContactItem from 'components/ContactListItem';
import Notiflix from 'notiflix';

import { fetchContacts } from 'redux/contactsAsyncActions';

function ContactList() {
  const { data: contacts } = fetchContacts();
  const filter = useSelector(selectContactsFilter);

  if (!contacts) {
    return null;
  }
  const filteredContacts = contacts.filter(
    contact =>
      typeof filter === 'string' &&
      typeof contact.name === 'string' &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!filteredContacts?.length) {
    Notiflix.Notify.info('No contacts found.');
  }

  return (
    <ContactListWrapper>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ContactListWrapper>
  );
}

export default ContactList;
