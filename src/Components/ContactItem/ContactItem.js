import React from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/actions';
const ContactItem = ({ state, onDeleteItem, onDelete }) => {
  function deleteClassAndReduce(id) {
    onDeleteItem(id);
    onDelete(id);
  }
  return (
    <>
      {state.map(({ name, number, id }) => (
        <li key={uuidv4()}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => deleteClassAndReduce(id)}>
            Удалить
          </button>
        </li>
      ))}
    </>
  );
};
const mapStateToProps = state => {
  return {
    contactsList: state.contacts,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDelete: del => dispatch(deleteContact(del)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);

ContactItem.propTypes = {
  state: PropTypes.arrayOf(PropTypes.any).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};
