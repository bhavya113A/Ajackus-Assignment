import React, { useState } from "react";
import './App.css';

const PencilIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

function App() {
   const [users, setUsers] = useState([]); //store the list of users
  const [formData, setFormData] = useState({
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: ""
    }); //store current data

  const [isEditing, setIsEditing] = useState(false); //check edit mode

  //handle submission form
  const handleSubmit = (e) => {
      e.preventDefault();
      if (isEditing) {
        setUsers(users.map(user => (user.id === formData.id ? formData : user)));
        setIsEditing(false);
      } else {
        setUsers([...users, { ...formData, id: users.length + 1 }]);
      }
      // Reset the form data after submit
      setFormData({  
        id: null,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: ""
      });
  };

  //input feild
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  return (
    <>
      <div className="user-management-header">User Management</div>
      <div className="form-container">
          <form onSubmit={handleSubmit}>
              <div className="input-group">
                  {/* Form input fields for user details */}
                  <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required className="input-field" />
                  <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required className="input-field" />
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required className="input-field" />
                  <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} required className="input-field" />
                  <input name="department" placeholder="Department" value={formData.department} onChange={handleInputChange} required className="input-field" />
                  {/* submit button for changes of editing */}
                  <button type="submit" className="submit-button">
                      {isEditing ? <><PencilIcon className="icon" /> Update User</> : <><PlusIcon className="icon" /> Add User</>}
                  </button>
              </div>
          </form>
      </div>
    </>
  );
}

export default App;
