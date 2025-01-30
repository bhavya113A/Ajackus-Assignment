<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Create a user input feild. Where user can add or update the feild. Added styling for this field.
=======
# Ajackus-Assignment
Made a User Management Dashboard, Where users can view, add, edit, and delete user details from a mock backend API.
>>>>>>> 40a8333c23882e0085153c8d2f85fd1bf511fed5

# Ajackus-Assignment

# **User Management Dashboard**

This is a React-based User Management Dashboard where users can be added, edited, or deleted, along with pagination for displaying the user list. The data is fetched from an external API (JSONPlaceholder) and displayed in a table format. Each user entry includes the following details:

- **First Name**
- **Last Name**
- **Email**
- **Department**

### Features
- **Add User**: Allows users to input and add new user details (First Name, Last Name, Email, Department).
- **Edit User**: Users can update the existing user details.
- **Delete User**: Users can delete any existing user entry.
- **Pagination**: The user list is paginated, with a specified number of users per page (default is 5 users).
- **Error Handling**: Displays error messages if there are issues with fetching, updating, or deleting users.
- **Loading State**: Displays a loading message while the user data is being fetched from the API.

### Technologies Used
- React (Hooks, State Management)
- JSONPlaceholder API
- CSS for Styling

### How It Works
- The app fetches a list of users from the JSONPlaceholder API using `useEffect` and displays them in a table.
- Users can be added through a form that updates the local state.
- Editing and deleting users will update the state and make the corresponding API call.
- Pagination allows users to navigate through different pages of users.
