=======
# Ajackus-Assignment
Made a User Management Dashboard, Where users can view, add, edit, and delete user details from a mock backend API.
<<<<<<< HEAD
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
=======
>>>>>>> e5a1ebc3858af7a2fbb5bf53722bb67e35be35dc
