import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContact = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.contactList}>
      {filteredContact.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <p className={css.contactName}>
            {name}: {number}
          </p>
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
