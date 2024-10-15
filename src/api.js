// src/api.js
// This function simulates an API call to submit user data.
export const submitUserData = async (data) => {
    // Simulating a network request to an API
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly succeed or fail
            if (Math.random() > 0.5) {
                resolve("Data submitted successfully!");
            } else {
                reject("Failed to submit data.");
            }
        }, 1000);
    });
};
