# Koinx backend assignment

This repository contains the backend of a project designed to learn backend project structuring and best practices that to be followed.

## Technologies Used

- Node.js
- Express.js
- Mongoose
- Other dependencies as listed in `package.json`

## Prerequisites

Ensure you have the following installed on your local system:

- Node.js (v14.0 or later)
- npm (v6.0 or later) or Yarn
- MongoDB (local or cloud instance)

## Setup Instructions

Follow these steps to set up the project on your local system:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Kruthik111/koinx-backend.git
   cd koinx-backend
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=8000
   MONGODB_URL=your_mongodb_connection_string
   COIN_GECKO_KEY=your_geckho_api_key
   ```

4. **Run the Application**

   Start the development server:

   Using npm:

   ```bash
   npm run dev
   ```

   Or using Yarn:

   ```bash
   yarn dev
   ```

   The server should now be running at `http://localhost:8000` (or the port specified in your `.env` file).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
