import { useState } from "react";

function RegistrationForm() {
 const[username, setUsername] = useState("");
 const[email, setEmail] = useState(""); 
const[password, setPassword] = useState("");
       
    const [errors, setErrors] = useState({});

        
    const validateForm = () => {
        const newErrors = {};
        if (!username) {
            newErrors.username = 'Username is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted', formData);
        }
    };

    return (
        <>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange = {(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange = {(e) => setUsername(e.target.value)}
                    />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={password}
                        onChange = {(e) => setUsername(e.target.value)}
                    />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default RegistrationForm;