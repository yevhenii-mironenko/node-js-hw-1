import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (newContact) => {
  try {
    let contacts = [];
    try {
      const fileContent = await fs.readFile(PATH_DB, 'utf8');
      contacts = JSON.parse(fileContent);
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw err;
      }
    }
    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log('Контакт успішно додано!');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};
