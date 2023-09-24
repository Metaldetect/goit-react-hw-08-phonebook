import { Helmet, HelmetProvider } from 'react-helmet-async';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

function Contacts() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
        <ContactForm />
        <ContactList />
        <Filter />
      </HelmetProvider>
    </>
  );
}

export default Contacts;
