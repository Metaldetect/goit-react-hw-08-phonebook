import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsAsyncActions';
import { selectContacts } from 'redux/selectors';
import { Button, Container, TextField, Typography } from '@mui/material';

const phonebookSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required('Name is required'),
  phone: Yup.string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone number is required'),
});

function ContactForm() {
  const initialValues = {
    name: '',
    phone: '',
  };

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const successMessage = 'Contact added successfully!';
  const errorMessage = 'An error occurred while adding the contact.';

  const isContactDuplicate = (name, number) => {
    if (!contacts || !Array.isArray(contacts)) {
      return false;
    }
    return contacts.some(
      contact => contact.name === name || contact.number === number
    );
  };

  const handleSubmit = async (values, actions) => {
    const { name, phone } = values;
    const isDuplicateContact = isContactDuplicate(name, phone);

    if (isDuplicateContact) {
      Notiflix.Notify.failure(
        'Contact with the same name or phone number already exists!'
      );
      return;
    }

    try {
      const response = await dispatch(addContact({ name, number: phone }));

      if (addContact.fulfilled.match(response)) {
        actions.resetForm();
        Notiflix.Notify.success(successMessage);
      } else {
        Notiflix.Notify.failure(errorMessage);
      }
    } catch (error) {
      Notiflix.Notify.failure(errorMessage);
    }
  };
  return (
    <Container maxWidth="xs">
      <Typography variant="h2" align="center" gutterBottom>
        Phonebook
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={phonebookSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            as={TextField}
            fullWidth
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            margin="normal"
            helperText={<ErrorMessage name="name" />}
          />
          <Field
            as={TextField}
            fullWidth
            id="phone"
            name="phone"
            label="Phone"
            variant="outlined"
            margin="normal"
            helperText={<ErrorMessage name="phone" />}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ mt: 2 }}
          >
            Add Contact
          </Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default ContactForm;
