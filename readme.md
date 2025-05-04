# **Express API with CORS - Project Setup**

This project demonstrates how to set up a simple Express API with CORS enabled, responding with JSON for different HTTP methods. You can use **Postman** to test each method (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `OPTIONS`) and observe the JSON responses.

## **Table of Contents**

* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Project Structure](#project-structure)
* [API Endpoints](#api-endpoints)
* [Postman Testing](#postman-testing)
* [Start the Server](#start-the-server)
* [Notes](#notes)

---

## **Technologies Used**

* **Node.js**: JavaScript runtime for building the server.
* **Express.js**: Web framework for Node.js to handle HTTP requests.
* **CORS**: Cross-Origin Resource Sharing middleware for enabling cross-origin requests.
* **Postman**: A tool for testing APIs with different HTTP methods.

---

## **Installation**

### Step 1: Clone the repository

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

### Step 2: Install dependencies

```bash
npm install
```

This will install the required dependencies, including `express` and `cors`.

---

## **Project Structure**

```
my-express-app/
│
├── .env                   # Environment variables (e.g., PORT)
├── package.json            # Project dependencies and scripts
├── server.js               # Main Express app
└── node_modules/           # Installed dependencies
```

---

## **API Endpoints**

This Express API supports the following routes with various HTTP methods, all returning JSON responses:

### 1. **GET Request** (`GET /`)

**Response:**

```json
{
  "message": "Hello, this is a GET request!",
  "status": "success"
}
```

### 2. **POST Request** (`POST /`)

**Response:**

```json
{
  "message": "Hello, this is a POST request!",
  "status": "success"
}
```

### 3. **PUT Request** (`PUT /`)

**Response:**

```json
{
  "message": "Hello, this is a PUT request!",
  "status": "success"
}
```

### 4. **DELETE Request** (`DELETE /`)

**Response:**

```json
{
  "message": "Hello, this is a DELETE request!",
  "status": "success"
}
```

### 5. **PATCH Request** (`PATCH /`)

**Response:**

```json
{
  "message": "Hello, this is a PATCH request!",
  "status": "success"
}
```

### 6. **OPTIONS Request** (`OPTIONS /`)

**Response:**

```json
{
  "message": "Hello, this is an OPTIONS request!",
  "status": "success"
}
```

---

## **Postman Testing**

You can test all the above endpoints using **Postman**. Follow these steps:

### Step 1: Open Postman

Download and install **Postman** (if you haven't already) from [here](https://www.postman.com/downloads/).

### Step 2: Test Endpoints

1. **GET Request**:

   * Set method to `GET` and URL to `http://localhost:3000/`
   * You should receive the following response:

     ```json
     {
       "message": "Hello, this is a GET request!",
       "status": "success"
     }
     ```

2. **POST Request**:

   * Set method to `POST` and URL to `http://localhost:3000/`
   * You should receive the following response:

     ```json
     {
       "message": "Hello, this is a POST request!",
       "status": "success"
     }
     ```

3. **PUT Request**:

   * Set method to `PUT` and URL to `http://localhost:3000/`
   * You should receive the following response:

     ```json
     {
       "message": "Hello, this is a PUT request!",
       "status": "success"
     }
     ```

4. **DELETE Request**:

   * Set method to `DELETE` and URL to `http://localhost:3000/`
   * You should receive the following response:

     ```json
     {
       "message": "Hello, this is a DELETE request!",
       "status": "success"
     }
     ```

5. **PATCH Request**:

   * Set method to `PATCH` and URL to `http://localhost:3000/`
   * You should receive the following response:

     ```json
     {
       "message": "Hello, this is a PATCH request!",
       "status": "success"
     }
     ```

6. **OPTIONS Request**:

   * Set method to `OPTIONS` and URL to `http://localhost:3000/`
   * You should receive the following response:

     ```json
     {
       "message": "Hello, this is an OPTIONS request!",
       "status": "success"
     }
     ```

---

## **Start the Server**

To run the server locally, follow these steps:

### Step 1: Start the Server

You can use `nodemon` to start the server (for automatic restarts during development):

```bash
npm run dev
```

Or, you can use `node` directly if you prefer:

```bash
npm start
```

By default, the server will run on port `3000`. If you want to change the port, simply modify the `.env` file and set a different value for `PORT`.

---

## **Notes**

* **CORS**: The CORS middleware is enabled by default using the `cors()` function, allowing requests from all origins. You can customize it to restrict which origins are allowed to make requests.
* **Postman**: Postman is a great tool for testing APIs. You can switch between different HTTP methods easily and inspect the responses.

