# 📇 Contacts API

Навчальний проєкт для роботи з REST API на основі **Node.js** та **Express**. Зберігання контактів реалізовано через MongoDB.

## 🛠 Технології
Node.js
Express
MongoDB
Mongoose
Render (для хостингу)

## 🔗 Деплой
Проєкт задеплоєний за адресою:  
👉 [https://contacts-app-is01.onrender.com](https://contacts-app-is01.onrender.com)

## 📁 Структура проєкту
src/
├── db/
│ ├── models/
│ │ ├── contacts.js # Mongoose-схема для контактів
│ │ └── initMongoConnection.js # Ініціалізація підключення до MongoDB
│ └── services/
│ └── contacts.js # Бізнес-логіка роботи з контактами
├── utils/
│ └── getEnvVar.js # Функція для зчитування змінних середовища
├── index.js # Точка входу в застосунок
├── server.js # Налаштування та запуск серверу

## 🚀 Запуск проєкту локально

1. Клонуй репозиторій:
```
git clone https://github.com/yevhenii-mironenko/node-js-hw-2.git
```
2. Встанови залежності:
```
npm install
```
3. Створи .env файл у корені проєкту та додай змінну середовища.
Приклад у `.env.example`
4. Запусти сервер:
```
npm run dev
```

## 📮 API Endpoints
## GET /contacts
Отримати список усіх контактів.
🔗 https://contacts-app-is01.onrender.com/contacts

## GET /contacts/:contactId
Отримати контакт за ID.
📌 Приклад:
🔗 https://contacts-app-is01.onrender.com/contacts/665f944a0b33cddba86579e2
