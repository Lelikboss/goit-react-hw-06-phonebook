export const addContact = contact => ({
  type: 'contact/add',
  payload: contact,
});
export const deleteContact = id => ({
  type: 'contact/delete',
  payload: { id },
});
