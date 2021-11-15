import React from 'react';
// import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { filterValue } from '../../redux/contacts/actions';
const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.find}>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={value}
          onChange={e => dispatch(filterValue(e.target.value))}
        />
      </div>
    </>
  );
};
export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
