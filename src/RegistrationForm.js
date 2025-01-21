// src/RegistrationForm.js
import React, { useState } from 'react';

function RegistrationForm() {
  // Setting up the state for each field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Here you can send the form data to an API for registration
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone Number">phone number:</label>
          <input
            type="phone number "
            id="phone number"
            name="phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
