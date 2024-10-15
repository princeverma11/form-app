// src/api.js
// Simulates a successful API call
export const submitUserData = async (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data submitted successfully!"); // Always resolves successfully
        }, 1000);
    });
};
