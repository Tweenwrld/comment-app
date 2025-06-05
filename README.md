# Next.js MERN Project

## Overview
This project is a simple full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js. It allows users to create, view, like, and comment on posts. The application is designed to be responsive and user-friendly, providing a seamless experience for users to interact with content.

## Features
- **Create Posts**: Users can create new posts with a title, content, and optional image upload.
- **View Posts**: Users can view all posts on the home page, which displays the title, content, and any associated images.
- **Like Posts**: Users can like posts, which increments the like count for that post.
- **Comment on Posts**: Users can add comments to posts, which are displayed below the post content.

## Technologies Used
- **Frontend**: React.js, Next.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS (with global styles)

## Project Structure
- **pages/**: Contains the frontend routes and API routes.
  - **index.js**: The home page that displays all posts.
  - **create.js**: The page for creating new posts.
  - **_app.js**: The custom App component that provides global layout and navigation.
  - **api/**: Contains API route handlers.
    - **posts.js**: Handles API requests for creating, retrieving, liking, and commenting on posts.

## Challenges Faced
- **Routing Issues**: Initially, frontend route files were misplaced in the `pages/api/` directory, causing 404 errors. This was resolved by moving the files to the correct locations.
- **MongoDB Connection**: The MongoDB connection URI was initially set to a placeholder value, leading to errors when trying to create posts. This was fixed by updating the URI to a valid local MongoDB URL.

## Implementation Details
- **MongoDB Schema**: The post schema includes fields for title, content, file (for images), likes, and comments.
- **API Endpoints**: The API provides endpoints for GET (retrieve posts), POST (create posts), and PUT (like and comment on posts) operations.
- **Frontend Components**: The frontend is built using React components, with state management for posts and user interactions.

## Getting Started
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your MongoDB database and update the connection URI in `pages/api/posts.js`.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Future Enhancements
- User authentication and authorization.
- Enhanced UI/UX with additional styling and animations.
- Real-time updates using WebSockets.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.
