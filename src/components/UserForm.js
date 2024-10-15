// src/components/UserForm.js
import React, { useState } from 'react';
import { submitUserData } from '../api'; // Importing the API function

const UserForm = () => {
    // State to store form data
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [error, setError] = useState(''); // State to store error messages
    const [success, setSuccess] = useState(''); // State to store success messages

    // Handle form input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form data
    const validateForm = () => {
        const { name, email } = formData;
        if (!name || !email) {
            return "All fields are required.";
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            return "Email format is invalid.";
        }
        return null; // No errors
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page refresh
        setError(''); // Reset error state
        setSuccess(''); // Reset success state

        const validationError = validateForm();
        if (validationError) {
            setError(validationError); // Set error if validation fails
            return;
        }

        try {
            // Submit data to API
            const response = await submitUserData(formData);
            setSuccess(response); // Set success message
        } catch (err) {
            setError(err); // Set error message if API call fails
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>User Form</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error messages */}
            {success && <p style={{ color: 'green' }}>{success}</p>} {/* Display success messages */}
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button> {/* Submit button */}
        </form>
    );
};

export default UserForm;
