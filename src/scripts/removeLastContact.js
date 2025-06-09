import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    let contacts = [];
    try {
      const fileContent = await fs.readFile(PATH_DB, 'utf8');
      contacts = JSON.parse(fileContent);
      if (contacts.length > 0) {
        contacts.pop();
      } else {
        console.log('В масиві нема елементів для видалення');
        return;
      }
    } catch (err) {
      console.log(err);
      return;
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log('Останнй контакт успішно видалено!');
  } catch (err) {
    console.error('Помилка видалення у файлі:', err);
    return;
  }
};

removeLastContact();
