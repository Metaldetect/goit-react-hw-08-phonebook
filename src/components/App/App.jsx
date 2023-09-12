import React from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

function App() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}

export default App;
