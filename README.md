# GoldDigger

GoldDigger is a full-stack Node.js application that simulates real-time gold prices and allows users to invest in virtual gold. The application updates gold prices every 3 seconds, processes investments through a custom REST API, calculates the amount of gold purchased, and stores every transaction in a JSON file.

Unlike frameworks such as Express, this project is built using **Node.js' native HTTP module**, helping demonstrate a solid understanding of HTTP servers, routing, request handling, asynchronous programming, file operations, and client-server communication.

---

## Screenshots

### Home Page

<img width="1918" height="841" alt="image" src="https://github.com/user-attachments/assets/8cde21e0-4599-4683-b496-9e86ef4b547b" />


### Investment Summary

<img width="1918" height="850" alt="image" src="https://github.com/user-attachments/assets/ddbec4e7-b909-46bb-a7b7-b4f19081c89e" />


### Offline Mode

<img width="1918" height="847" alt="image" src="https://github.com/user-attachments/assets/45518a2f-9e17-4597-a66c-3aa42b758514" />


---

## Features

- Live gold price updates every **3 seconds**
- Invest in virtual gold using the latest price
- Custom REST API built using Node.js HTTP module
- Automatic calculation of gold purchased
- Stores investment history in a local JSON file
- Displays formatted purchase timestamps
- Detects server status (Online / Offline)
- Investment summary dialog after each purchase
- Clean and modular project architecture

---

## Tech Stack

- Node.js
- Native HTTP Module
- JavaScript (ES Modules)
- HTML5
- CSS3
- File System (`fs/promises`)

---

## Project Structure

```
node-goldDigger/
│
├── data/
│   └── data.json
│
├── handlers/
│   └── routeHandlers.js
│
├── public/
│   ├── images/
│   ├── index.html
│   ├── index.css
│   └── index.js
│
├── utils/
│   ├── addNewPurchase.js
│   ├── getData.js
│   ├── getLivePrice.js
│   ├── parseJSONBody.js
│   ├── sendResponse.js
│   └── serveStatic.js
│
├── server.js
├── package.json
└── README.md
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/node-goldDigger.git
```

### Navigate to the project

```bash
cd node-goldDigger
```

### Install dependencies

```bash
npm install
```

### Start the server

```bash
npm start
```

Open your browser and visit:

```
http://localhost:8000
```

---

## API Endpoints

### Get Live Gold Price

```http
GET /api/price
```

#### Response

```json
{
  "price": 14182.35
}
```

---

### Invest in Gold

```http
POST /api/invest
```

#### Request Body

```json
{
  "investment": 5000
}
```

#### Response

```json
{
  "goldPrice": 14182.35,
  "investment": 5000,
  "goldBought": "0.35",
  "time": "29 Jun 2026, 8:45 PM"
}
```

---

## What I Learned

Through this project, I gained practical experience with:

- Building HTTP servers using Node.js
- Designing RESTful APIs
- Handling GET and POST requests
- Parsing JSON request bodies
- Reading and writing files with `fs/promises`
- Serving static assets
- Structuring backend applications into routes, handlers, and utilities
- Managing asynchronous operations using `async/await`
- Client-server communication using the Fetch API

---

## Future Improvements

- Store investment history in a database (PostgreSQL / MongoDB)
- User authentication
- Real-time gold prices from an external API
- Investment history dashboard
- Charts for gold price trends
- Input validation and enhanced error handling

---
