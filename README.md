# Movie Catalog with React and Axios

A project developed for the **Web Programming 2** course, practicing full CRUD operations using the Axios library to communicate with the public [MockAPI](https://mockapi.io/) service.

## Project Description

A Single Page Application (SPA) built with React that consumes the [MockAPI](https://mockapi.io/) public API to perform the following operations:

- **Create**: Add a new movie.
- **Read**: List all existing movies.
- **Update**: Edit an existing movie.
- **Delete**: Remove a movie.

HTTP requests are made with Axios, and application state is managed efficiently using React hooks (`useState`, `useEffect`).

## Technologies

- **React** (with Vite)
- **Axios** for HTTP requests
- **React Router DOM** for client-side navigation
- **Bootstrap** for styling and responsiveness
- **JavaScript** (ES6+)
- **HTML5** and **CSS3**

## Features

- Clean interface for listing and managing movies.
- Form with validation for creating and editing movies.
- Movie deletion with confirmation step.
- Public API consumption via Axios.
- State management with React Hooks.
- Visual feedback for create, edit, and delete actions.

## Project Structure

```
movie-catalog-crud-axios/
├── public/
├── src/
│   ├── components/
│   │   ├── Create.jsx   # Create movie page
│   │   ├── Delete.jsx   # Delete movie page
│   │   ├── Header.jsx   # App header
│   │   ├── Home.jsx     # Movie listing page
│   │   ├── NotFound.jsx # 404 page
│   │   ├── Read.jsx     # Movie detail page
│   │   └── Update.jsx   # Edit movie page
│   ├── App.jsx          # Route configuration
│   ├── main.jsx         # App entry point
│   ├── App.css
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Notes

- [MockAPI](https://mockapi.io/) persists data, so create, update, and delete operations are reflected in the API.
- This project is educational and serves as a foundation for learning HTTP requests and React DOM manipulation.

## Credits

Project developed as part of the **PRW2** course, under the guidance of the course instructor.
