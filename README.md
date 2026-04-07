# 🛒 E-Commerce Backend System

A secure and scalable backend system for an e-commerce platform built using **Node.js, Express.js, and MongoDB**. This project includes authentication, role-based access control, CRUD operations, product filtering, and order management.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* User Registration & Login
* Password hashing using bcryptjs
* JWT-based authentication
* Role-Based Access Control (Admin/User)

### 📦 Product Management

* Create, Read, Update, Delete products
* Product search by name
* Filter by category
* Sort by price

### 🧾 Order Management

* Create orders
* View orders
* Update order status
* Delete orders

### 🛡️ Security

* Encrypted passwords
* Protected routes using JWT
* Input validation & error handling

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* bcryptjs
* jsonwebtoken
* dotenv
* cors

---

## 📁 Folder Structure

```
ecommerce-backend/
│
├── config/
│   └── dbConnection.js
│
├── models/
│   ├── userModel.js
│   ├── productModel.js
│   └── orderModel.js
│
├── controllers/
│   ├── authController.js
│   ├── productController.js
│   └── orderController.js
│
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── orderRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorHandler.js
│
├── index.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Create `.env` File

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the Server

```
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 📬 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

---

### 🛒 Product Routes

| Method | Endpoint          | Description                 |
| ------ | ----------------- | --------------------------- |
| GET    | /api/products     | Get all products            |
| POST   | /api/products     | Create product (Admin only) |
| PUT    | /api/products/:id | Update product              |
| DELETE | /api/products/:id | Delete product              |

---

### 📦 Order Routes

| Method | Endpoint        | Description    |
| ------ | --------------- | -------------- |
| POST   | /api/orders     | Create order   |
| GET    | /api/orders     | Get all orders |
| PUT    | /api/orders/:id | Update order   |
| DELETE | /api/orders/:id | Delete order   |

---

## 🔑 Authentication

* Use JWT token for protected routes
* Add token in header:

```
Authorization: Bearer YOUR_TOKEN
```

---

## 🧪 Testing

Use **Postman** to test APIs:

1. Register a user
2. Login to get token
3. Use token to access protected routes

---

## 🧠 Future Improvements

* Product recommendation system (RapidMiner)
* Pagination & advanced filtering
* Payment gateway integration
* Cart system
* Deployment (Render / Railway)

---

## 👨‍💻 Author

**Athul Krishna**

---

## 📌 Notes

* Admin role is required to create/update/delete products
* Ensure MongoDB is connected properly
* Always include JWT token for protected routes

---

⭐ If you found this helpful, give it a star on GitHub!

