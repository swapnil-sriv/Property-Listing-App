# Property Listing Application

## Overview
This is a simple web application that allows users to view property listings and submit inquiries about properties. It consists of a React frontend and a Node.js/Express backend with a MySQL database.

## Features
- **Home Page**: Display a list of property thumbnails with pagination.
- **Property Details Page**: Display detailed information about a property.
- **Inquiry Form**: Submit inquiries about a property.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Bonus Features
- Filtering properties based on criteria (e.g., price range, location).
- Authentication to manage sessions for users.

## Technologies Used
- **Frontend**: React, Axios, CSS
- **Backend**: Node.js, Express, MySQL
- **Database**: MySQL

## Installation and Setup

### Prerequisites
- Node.js
- MySQL

### Backend Setup
1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd property-listing-app/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory and add your database credentials:
    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=property_listing
    ```

4. Set up the MySQL database:
    ```sql
    CREATE DATABASE property_listing;
    ```

5. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

### Running the Application
1. Ensure both the backend and frontend servers are running.
2. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints
### Property Listings
- **GET** `/api/properties`: Fetch all properties with pagination.
- **GET** `/api/properties/:id`: Fetch detailed information about a specific property.

### Inquiries
- **POST** `/api/inquiries`: Submit an inquiry about a property.






