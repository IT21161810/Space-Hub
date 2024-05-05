[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/V1F4A3D5)

## React Js Frontend

- This is the React Website for display NASA API data and allows user to interact with NASA APIs

## Node Js Backend

- Backend for handle User Session management with JWT Authentication
- 
## 1.Installation

git clone https://github.com/sliitcsse/se3040-assignment02-IT21161810.git

## 2. Install dependencies:

- Move to backend folder
  - npm install/npm i
  
- Move to frontend folder
  - npm install/npm i

## 3. Create a .env file in the root directory and add the necessary environment variables. Example:

- API_KEY = "NASA_API_KEY"

## Usage

   ## frontend

- Start the VITE APP: npm run dev
- The server will start on the (http://localhost:5173/)

   ## backend
- start Backend serve using npm start
- The server will start on port 3000
  
## Folder Structure Backend

- controller: Contains controller functions for handling API requests.
- routes: Contains API routes.
- models: Contains Mongoose models for database entities.
- middleware: Contains authenticating authorization middlewares
- test: Contains unit test cases for API controllers.

## Folder Structure Frontend

- Components: all the components of web page Header Footer Navbar .
- Context: Auth context relate to persist user current user.
- Pages: All the pages of website that can access.
- Routes: all the routes and pages of application
- Services: All API services
  
## Dependencies Frontend
- @emotion/react (^11.11.4): A library for writing CSS styles with JavaScript and React.
- @emotion/styled (^11.11.5): A library for styling React components with Emotion.
- @material-ui/core (^4.12.4): React components for faster and easier web development.
- @mui/icons-material (^5.15.15): Material-UI icons as React components.
- @mui/lab (^5.0.0-alpha.170): Additional components and utilities for Material-UI.
- @mui/material (^5.15.15): Material-UI components for React.
- @mui/x-date-pickers (^7.2.0): Modern date picker components for Material-UI.
- aos (^2.3.4): Library to animate elements as they scroll into view.
- axios (^1.6.8): Promise-based HTTP client for the browser and Node.js.
- dayjs (^1.11.10): Immutable date-time library alternative to Moment.js.
- dotenv (^16.4.5): Zero-dependency module that loads environment variables.
- react (^18.2.0): JavaScript library for building user interfaces.
- react-dom (^18.2.0): Entry point to the React DOM package.
- react-icons (^5.1.0): Popular icons for React applications.
- react-responsive (^10.0.0): Media queries in react for responsive design.
- react-router-dom (^6.23.0): DOM bindings for React Router.
- react-toastify (^10.0.5): React component for toast notifications.
- styled-components (^6.1.8): Library for styling React components using tagged template literals.

## Dev Dependencies
- @types/react (^18.2.66): TypeScript type definitions for React.
- @types/react-dom (^18.2.22): TypeScript type definitions for React DOM.
- @vitejs/plugin-react (^4.2.1): Vite plugin for React support.
- eslint (^8.57.0): JavaScript and TypeScript linter.
- eslint-plugin-react (^7.34.1): React specific linting rules for ESLint.
- eslint-plugin-react-hooks (^4.6.0): ESLint rules for React hooks.
- eslint-plugin-react-refresh (^0.4.6): ESLint plugin for React Fast Refresh.
- vite (^5.2.0): Frontend build tool that serves web pages with React fast.

## Dev Testing Dependency
- @testing-library/jest-dom: This library extends Jest's expect with a set of custom matchers for the DOM elements.
- @testing-library/react: This library provides utilities for testing React components in a way that encourages good testing practices.
- @testing-library/user-event: Simulate events the way the user does. This library provides utilities for interacting with components.
- jsdom: A JavaScript implementation of various web standards, particularly the WHATWG DOM and HTML Standards
- vitest: A lightweight testing utility built specifically for Vite projects
  

## Dependencies Backend

- bcryptjs: Library for hashing passwords.
- cors: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- date-fns: Library for working with dates in JavaScript.
- dotenv: Library for loading environment variables from a .env file.
- express: Web framework for Node.js.
- jsonwebtoken: Library for generating and verifying JSON Web Tokens (JWT).
- mongoose: MongoDB object modeling tool.
- nodemon: Utility for automatically restarting the server during development.



# NASA API USED

## APOD

One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video

## Mars Rover Photos

This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. This API is maintained by Chris Cerami.

## Earth Imagery API

Landsat imagery is provided to the public as a joint project between NASA and USGS. A recent industry report on landsat satellite imagery data estimates that total annual value to the economy of $2.19 billion, far exceeding the multi-year total cost of building, launching,

## How to run Test cases

- Run All Test cases      - npm test
- Run Specific Test cases - npm test Picture.tes.jsx

# Deployment

## frontend
- run 'npm build'
- move created dist file to netlify
  
- deploy link: https://heartfelt-dieffenbachia-a7b2a0.netlify.app

## backend
- backend deployed on render
- backend deployed link: https://space-hub-2.onrender.com