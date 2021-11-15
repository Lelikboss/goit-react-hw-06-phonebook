import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';

import s from './ContactList.module.css';

const ContactList = ({ children }) => {
  const contacts = useSelector(getContacts);
  console.log(contacts.length);
  return (
    <>
      {contacts.length === 0 ? (
        <p className={s.empty}>EMPTY</p>
      ) : (
        <ul className={s.list}>{children}</ul>
      )}
    </>
  );
};
export default ContactList;

ContactList.propTypes = {
  children: PropTypes.any.isRequired,
};
