# Ecommerce-API

Node JS API calling simple project

# E-Commerce API

This is a simple Node.js application that provides an E-Commerce API for managing products. It allows users to create, read, update, and delete products. The API uses MongoDB as the database to store product information.

## Requirements

To run this application, you need to have the following installed on your system:

- Node.js (https://nodejs.org)
- MongoDB (https://www.mongodb.com)

## Installation

1. Clone this repository to your local machine using `git clone`.
2. Navigate to the project directory in your terminal or command prompt.
3. Run `npm install` to install all the required dependencies.

## Configuration

Before running the application, you need to set up the MongoDB connection. Open the `config.js` file in the `config` folder and update the `dbURI` variable with your MongoDB connection string.

## Usage

To start the server, run the following command:

```
npm start
```

The server will start running at `http://localhost:8000/api/products/`.

## API Endpoints

### Create a Product

- Endpoint: POST /api/products/create
- Description: Create a new product.
- Request Body: { "name": "Product Name", "quantity": 10 }
- Response: { "message": "Product has been successfully Created!", "product": { "\_id": "product-id", "name": "Product Name", "quantity": 10 } }

### Get All Products

- Endpoint: GET /api/products/
- Description: Get a list of all products.
- Response: { "products": [{ "_id": "product-id", "name": "Product Name", "quantity": 10 }, ...] }

### Update Product Quantity

- Endpoint: POST /api/products/:id/update_quantity/?number=10
- Description: Update the quantity of a product (can be incremented or decremented).
- Request Params: :id - The ID of the product to update
- Query Param: number - The number to add or subtract from the current quantity
- Response: { "message": "Product has been successfully Updated!" }

### Delete a Product

- Endpoint: DELETE /api/products/delete/:id
- Description: Delete a product by its ID.
- Request Params: :id - The ID of the product to delete
- Response: { "message": "Product has been successfully Deleted!" }

## Error Handling

The API handles errors gracefully and returns appropriate error messages and status codes for different scenarios, such as invalid requests or server errors.
