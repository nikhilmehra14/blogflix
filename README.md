# Blogflix

Welcome to Blogflix, a full-stack blog application designed to provide a seamless and secure platform for users to create, read, and comment on blog posts. Blogflix leverages cutting-edge technologies to ensure optimal performance and scalability.

## Features

- **User Sign-up and Login**: Secure user authentication with JSON Web Tokens (JWT).
- **Blog Creation**: Users can create and manage their own blog posts.
- **Commenting**: Engage with blog posts through a robust commenting system.
- **File Uploads**: Seamless file uploads with Multer for adding media to your posts.

## Technologies Used

- **Node.js**: A powerful JavaScript runtime for building fast and scalable server-side applications.
- **Express**: A minimal and flexible Node.js web application framework for building robust APIs.
- **EJS**: Embedded JavaScript templating for generating HTML markup with plain JavaScript.
- **MongoDB**: A NoSQL database for high performance and scalability.
- **Multer**: A middleware for handling multipart/form-data, used for file uploads.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nikhilmehra14/blogflix.git
2. **Navigate to the project directory**:
   ```bash
   cd blogflix
3. **Install dependencies**:
   ```bash
   npm install
4. **Set up environment variables**:
   Create a .env file in the root directory and add the following variables:

   ```bash
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
5. **Start the application**:
   ```bash
   npm start
**The application will be available at http://localhost:8000**

## Usage

- **Sign up**: Create a new account by providing your email and password.

- **Login**: Authenticate yourself using your email and password to access the full features of the application.

- **Create a Blog**: Write and publish your own blog posts.

- **Comment**: Engage with other users by commenting on their blog posts.

- **Upload Files**: Add images and other media to your posts using the file upload feature.

## Contributing

We welcome contributions to improve Blogflix. To contribute, please follow these steps:

1. **Fork the repository**.

2. **Create a new branch**:
   ```bash
   git checkout -b my-feature-branch
3. **Make your changes and commit them**:
    ```bash
    git commit -m 'Add some feature'
4. **Push to the branch**:
    ```bash
    git push origin my-feature-branch
5. **Submit a pull request**.

## Contact

For any questions or suggestions, please feel free to reach out at nikhilmehra248@gmail.com.

## Live Demo

Check out the live demo: [Blogflix](https://blog-app-an45.onrender.com/)

## GitHub Repository

Visit the GitHub repository: [Blogflix Repository](https://github.com/nikhilmehra14/blogflix)

Enjoy blogging with Blogflix!
