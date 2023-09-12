import React from 'react';
import { ContactListWrapper } from './ContactListStyles';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import ContactItem from 'components/ContactListItem';
import Notiflix from 'notiflix';

import { useGetContactsQuery } from 'redux/contactsApi';

function ContactList() {
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  if (!contacts) {
    return null;
  }
  const filteredContacts = contacts.filter(contact =>
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
