import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/actions';
import { getContacts } from '../../redux/contacts/selectors';
// import { connect } from 'react-redux';
function ContactForm({ addNewContact, onAdd }) {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const inputName = uuidv4();
  const inputNumber = uuidv4();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const obj = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    if (contacts.map(contact => contact.name).includes(obj.name)) {
      alert(`${obj.name} is already in contacts`);
    } else {
      console.log('yello');
      dispatch(addContact(obj));
    }
    // onAdd(obj);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        <span>Name</span>
        <input
          id={inputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <span>Number</span>
        <input
          id={inputNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          placeholder="xxx-xx-xx"
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" disabled={!name || !number}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
// const mapStateToProps = state => {
//   return {
//     contactsList: state.contacts,
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     onAdd: cont => dispatch(addContact(cont)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// ContactForm.propTypes = {
//   addNewContact: PropTypes.func.isRequired,
// };
