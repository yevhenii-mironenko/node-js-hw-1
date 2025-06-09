import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  for (let i = 1; i <= number; i++) {
    const contact = createFakeContact();
    await writeContacts(contact);
  }
};

generateContacts(5);
