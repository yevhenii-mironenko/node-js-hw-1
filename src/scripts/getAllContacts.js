import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const allContacts = readContacts();
  return allContacts;
};

console.log(await getAllContacts());
