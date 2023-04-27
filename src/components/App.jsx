import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Loader } from '../components/Loader/Loader';
import { Notification } from './Notification/Notification';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        padding: '20px',
        width: '500px',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: '2px',
        borderRadius: '10px',
      }}
    >
      <h1 style={{ marginTop: 0 }}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {loading && !error && <Loader />}

      {contacts.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification message="There are no contacts" />
      )}
    </div>
  );
};
