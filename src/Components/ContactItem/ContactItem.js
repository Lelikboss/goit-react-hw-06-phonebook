import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/actions';
import { getVisibleItems } from '../../redux/contacts/selectors';
const ContactItem = () => {
  const contactsList = useSelector(getVisibleItems);
  const dispatch = useDispatch();
  return (
    <>
      {contactsList.map(({ name, number, id }) => (
        <li key={uuidv4()}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Удалить
          </button>
        </li>
      ))}
    </>
  );
};
export default ContactItem;
// const ContactItem = ({ contactsList, onDeleteItem, onDelete }) => {
//   return (
//     <>
//       {contactsList.map(({ name, number, id }) => (
//         <li key={uuidv4()}>
//           <p>
//             {name}: {number}
//           </p>
//           <button type="button" onClick={() => onDelete(id)}>
//             Удалить
//           </button>
//         </li>
//       ))}
//     </>
//   );
// };
// const mapStateToProps = state => {
//   return {
//     contactsList: state.contacts,
//   };
// };
// const mapDispatchToProps = dispatch => ({
//   onDelete: del => dispatch(deleteContact(del)),
// });

// export default connect(null, mapDispatchToProps)(ContactItem);

// ContactItem.propTypes = {
//   state: PropTypes.arrayOf(PropTypes.any).isRequired,
//   onDeleteItem: PropTypes.func.isRequired,
// };
