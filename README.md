# API-Driven-Shopping-Cart-Checkout-Flow

This project is a simple shopping cart application built using React.js for the frontend and Node.js with Express.js for the backend.
The application allows users to browse products, add them to a cart, manage the cart, and complete a checkout process.
Product data is fetched from a backend API using a static JSON file, and cart data is temporarily stored in server memory.

---

## Features

- View list of products
- Add products to cart
- View items in cart
- Remove items from cart
- Clear the entire cart
- Checkout and place an order
- API integration between React frontend and Express backend

---

## Technology Stack

### Frontend

- React.js
- React Router DOM
- Axios

### Backend

- Node.js
- Express.js
- CORS

### Data Storage

- Products stored in a static JSON file
- Cart stored in server memory using a shared JavaScript array

---

## Project Structure
```
project
│
├── backend
│   │
│   ├── routes
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   └── checkoutRoutes.js
│   │
│   ├── products.json
│   ├── cartData.js
│   └── server.js
│
└── frontend
    │
    ├── src
    │   ├── pages
    │   │   ├── Products.js
    │   │   └── Cart.js
    │   │
    │   ├── api.js
    │   ├── App.js
    │   └── styles.css
```
---

## Backend Setup

### Navigate to the backend folder:

cd backend

### Install dependencies:

npm install

### Required dependencies:

- express
- cors

### Start the backend server:

node server.js

### The backend server will run on:

http://localhost:5000

---

## Frontend Setup

### Open a new terminal and navigate to the frontend folder:

cd frontend

### Install dependencies:

npm install

### Required dependencies:

- react
- react-router-dom
- axios

### Start the React application:

npm start

### The frontend will run on:

http://localhost:3000

---

## API Endpoints

### Get Products

Fetch all available products.

GET /api/products

Each product contains:

- Product ID
- Product Name
- Product Price
- Product Image

---

### Add Product to Cart

POST /api/cart/add

Request Body:

{
  "productId": 1,
  "quantity": 1
}

---

### Get Cart Items

GET /api/cart

Returns:

- List of items in the cart
- Quantity of each product
- Total price of the cart

---

### Remove Item From Cart

DELETE /api/cart/:productId

---

### Clear Cart

DELETE /api/cart

---

### Checkout

POST /api/checkout

Checkout process:

- Fetch items from the cart
- Calculate total amount
- Return order confirmation
- Clear the cart after checkout

---

## How to Run the Application

1. Start the backend server
2. Start the React frontend
3. Open the application in the browser

http://localhost:3000

Users can browse products, add them to the cart, and complete checkout.

---

## Notes

- Cart data is stored temporarily in server memory and will reset when the server restarts.
- The focus of this project is on API integration and shopping cart functionality rather than UI design.

---

### Author

Sanjibani Samal
