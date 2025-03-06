import {useState} from "react";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
    });
    const [errors, setErrors]= useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData ((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    
    };
   const validateForm = () => {
    const newErrors = {};
    if (!formData.username) {
        newErrors.username = 'Username is required';
    }
    if (!formData.email) {
        newErrors.email = 'Email is required';
    }
    if (!formData.password) {
        newErrors.password = 'Password is required';
    }
    setErrors(setErrors);
    return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        console.log('Form sumitted', formData);
    }
   };

   return(
    <> 
    <h2>Registration Form</h2> 
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username:</label>
            <input 
            type="text" 
            id= "username"
            name="username"
            value={formData.username}
            onChange={handleChange}            
            />
            {errors.username && <span style={{color:'red'}}>{errors.username}</span>}
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input 
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
            {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input 
            type="text"
            id= "password"
            name="password"
            value={formData.password}
            onChange={handleChange}            
            />
            {errors.password && <span style={{color:'red'}}>{errors.password}</span>}
        </div>
        <button type="submit">Submit</button>
    </form>
    </>
   );

    }
    
    export default RegistrationForm;
    
