import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, selectContactsFilter } from 'redux/selectors';
import Notiflix from 'notiflix';
import { Paper, Grid } from '@mui/material';
import ContactItem from 'components/ContactListItem';

function ContactList() {
  const filter = useSelector(selectContactsFilter);
  const contacts = useSelector(selectContacts);

  if (!contacts || !Array.isArray(contacts) || contacts.length === 0) {
    return null;
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!filteredContacts?.length) {
    Notiflix.Notify.info('No contacts found.');
  }

  return (
    <Paper
      sx={{
        p: 2,
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        sx={{
          maxWidth: 600,
          margin: '0 auto',
        }}
      >
        {filteredContacts.map(({ id, name, number }) => (
          <Grid item xs={12} key={id}>
            <ContactItem id={id} name={name} phone={number} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default ContactList;
