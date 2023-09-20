import React from 'react';
import { ContactListWrapper } from './ContactListStyles';
import { useSelector } from 'react-redux';
import { selectContacts, selectContactsFilter } from 'redux/selectors';
import ContactItem from 'components/ContactListItem';
import Notiflix from 'notiflix';

function ContactList() {
  const filter = useSelector(selectContactsFilter);
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  if (!contacts || !Array.isArray(contacts) || contacts.length === 0) {
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
