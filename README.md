# Contact Manager CLI

Цей проєкт є простим CLI-додатком для роботи з контактами у форматі JSON. Ви можете створювати, зчитувати, додавати, рахувати, очищати та видаляти контакти за допомогою команд, описаних у `package.json`.

## 📁 Структура проєкту

```
src/
├── constants/
│   └── contacts.js        # Містить шлях до бази контактів
├── db/
│   └── db.json            # Файл бази даних з контактами (масив)
├── scripts/               # Основні скрипти для роботи з контактами
│   ├── addOneContact.js
│   ├── countContacts.js
│   ├── generateContacts.js
│   ├── getAllContacts.js
│   ├── removeAllContacts.js
│   └── removeLastContact.js
├── utils/                 # Утиліти для читання/запису/генерації
│   ├── createFakeContact.js
│   ├── readContacts.js
│   ├── writeContacts.js
│   └── index.js
```

## 📦 Встановлення залежностей

Перед початком встановіть залежності командою:

```bash
npm install
```

## 🧪 Скрипти

Ви можете запускати наступні команди:

| Команда                  | Опис                                               |
|--------------------------|----------------------------------------------------|
| `npm run generate`       | Згенерувати нові випадкові контакти                |
| `npm run add-one`        | Додати один випадковий контакт                     |
| `npm run get-all`        | Вивести всі контакти з бази                        |
| `npm run count`          | Порахувати кількість контактів                     |
| `npm run remove-all`     | Видалити всі контакти                              |
| `npm run remove-last`    | Видалити останній контакт                          |

> ⚠️ Усі дії відбуваються з файлом `src/db/db.json`.

## 🧰 Утиліти

- `readContacts()` — читає контакти з `db.json`
- `writeContacts(data)` — записує контакти у `db.json`
- `createFakeContact()` — генерує випадковий контакт за допомогою [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)

## 📌 Інструкції до виконання

1. **Ініціалізація**:
   - Перевірте, що в `src/constants/contacts.js` значення `PATH_DB` — це шлях до `src/db/db.json`

2. **Генерація контактів**:
   - Використовуйте `createFakeContact()` для генерації одного або кількох контактів.

3. **Робота з JSON**:
   - Всі операції відбуваються шляхом читання/запису у `src/db/db.json` через `readContacts` / `writeContacts`.

## 📥 Встановлення faker

Для генерації випадкових контактів проєкт використовує `@faker-js/faker`.

Встановіть його командою:

```bash
npm i -D @faker-js/faker
```
