import React, { useState, useEffect } from "react";
import './App.css'

// SVG icons remain unchanged
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const PencilIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const App = () => {
  const [users, setUsers] = useState([]); //store the list of users
  const [formData, setFormData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    department: ""
  }); //manage add/edit user
  const [isEditing, setIsEditing] = useState(false); //editing mode
  const [currentPage, setCurrentPage] = useState(1); //pagination
  const [usersPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //fetches the user data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setError(null);
        //fetch from the api
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json(); //parse the JSON response
        //formate of user data
        const formattedUsers = data.map(user => ({
          id: user.id,
          firstName: user.name.split(" ")[0],
          lastName: user.name.split(" ")[1] || "",
          email: user.email,
          department: "Unknown"
        }));
        setUsers(formattedUsers);
        setTotalPages(Math.ceil(formattedUsers.length / usersPerPage));
      } catch (err) {
        setError(err.message);
        setUsers([]);
      } finally {
        setIsLoading(false); //handle the error and reset user list
      }
    };

    fetchUsers();
  }, [usersPerPage]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);

      if (isEditing) {
        // For update, use the specific user ID in the URL
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${formData.id}`, {
          method: 'PUT',
          body: JSON.stringify(formData),
          headers: {
            'Content-type': 'application/json',
          },
        });

        // JSONPlaceholder will return a 200 status even for updates
        const updatedUser = await response.json();
        
        // Update the local state
        setUsers(users.map(user => 
          user.id === formData.id ? formData : user
        ));
        setIsEditing(false);
      } else {
        // For creating a new user
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to add user');
        }

        // Add the new user to local state
        const newUser = { ...formData, id: users.length + 1 };
        setUsers([...users, newUser]);
        setTotalPages(Math.ceil((users.length + 1) / usersPerPage));
      }

      // Reset form
      setFormData({
        id: null,
        firstName: "",
        lastName: "",
        email: "",
        department: ""
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      setError(null);
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      // Update local state
      setUsers(users.filter(user => user.id !== id));
      setTotalPages(Math.ceil((users.length - 1) / usersPerPage));
      if (currentUsers.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (user) => {
    setFormData(user);
    setIsEditing(true);
    setError(null); // Clear any existing errors when starting edit
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return (
      <div className="user-management-container">
        <div className="loading-message">Loading users...</div>
      </div>
    );
  }

  return (
    <div className="user-management-container">
      <div className="user-management-header">User Management</div>
      
      {/*display error*/}
      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )} 

      {/*for for add/edit user*/}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group"> 
            {/*input feild*/}
            <input 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName} 
              onChange={handleInputChange} 
              required 
              className="input-field" 
            />
            <input 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName} 
              onChange={handleInputChange} 
              required 
              className="input-field" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
              className="input-field" 
            />
            <input 
              name="department" 
              placeholder="Department" 
              value={formData.department} 
              onChange={handleInputChange} 
              required 
              className="input-field" 
            />
            {/*submit button for add/edit user*/}
            <button type="submit" className="submit-button">
              {isEditing ? <><PencilIcon className="icon" /> Update User</> : <><PlusIcon className="icon" /> Add User</>}
            </button>
          </div>
        </form>
      </div>

      {/*display for if user is exist*/}
      {users.length > 0 ? (
        <>
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  {['ID', 'First Name', 'Last Name', 'Email', 'Department', 'Actions'].map(header => (
                    <th key={header} className="table-header">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/*create row*/}
                {currentUsers.map(user => (
                  <tr key={user.id} className="table-row">
                    {/*display user data in table*/}
                    {Object.values(user).map((value, index) => (
                      <td key={index} className="table-cell">{value}</td>
                    ))}
                    {/*action button*/}
                    <td className="action-buttons">
                      <button onClick={() => handleEdit(user)} className="edit-button">
                        <PencilIcon className="icon" />
                      </button>
                      <button onClick={() => handleDelete(user.id)} className="delete-button">
                        <TrashIcon className="icon" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/*pagination*/}
          <div className="pagination-container">
            <span className="pagination-info">
              Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, users.length)} of {users.length} results
            </span>
            <div className="pagination-buttons">
              <button 
                onClick={() => paginate(currentPage - 1)} 
                disabled={currentPage === 1} 
                className="pagination-prev"
              >
                <ChevronLeftIcon className="icon" />
              </button>
              {/*page number button*/}
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
                >
                  {i + 1}
                </button>
              ))}
              <button 
                onClick={() => paginate(currentPage + 1)} 
                disabled={currentPage === totalPages} 
                className="pagination-next"
              >
                <ChevronRightIcon className="icon" />
              </button>
            </div>
          </div>
        </>
      ) : (
        //display where there is no user
        <div className="no-users-message">
          {error ? 'Failed to load users' : 'No users found'}
        </div>
      )}
    </div>
  );
};

export default App;