import React, { useState } from 'react';


import { Link, useNavigate } from 'react-router-dom';
import { fetchData } from './api';  // Import the API method to fetch data

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');  // State to show error message
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const users = await fetchData(); // Fetch stored users from db.json

            // Find the user by email and password
            const user = users.find(u => u.email.trim() === email.trim() && u.password === password);

            if (user) {
                console.log('Login successful:', user);
                navigate('/');  // Navigate to the home page on successful login
            } else {
                setErrorMessage('Invalid email or password');  // Show error if login fails
            }
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('An error occurred during login');  // Show error if fetch fails
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/035/668/408/non_2x/ai-generated-black-abstract-abstract-triangle-black-abstract-backgrounds-free-photo.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', backgroundColor: 'black', padding: '20px', borderRadius: '5px', border: '2px solid #00ffff' }}>
                <h1 style={{ fontSize: '30px', color: 'white', fontWeight: 'bold', fontFamily: 'revert' }}>DiGimarketing PRO</h1>
                <nav>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
                        <li><Link to="/home" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>Home</Link></li>
                        <li><Link to="/sign" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>Sign Up</Link></li>
                    </ul>
                </nav>
            </header>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                margin: '40px'
            }}>
                <div style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: '40px',
                    borderRadius: '10px',
                    width: '300px',
                    border: '2px solid #00ffff'
                }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#8e44ad', fontSize: '28px' }}>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#fff' }}>Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #00ffff',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: '#fff'
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#fff' }}>Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #00ffff',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: '#fff'
                                }}
                            />
                        </div>

                        {errorMessage && (
                            <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>
                        )}

                        <button type="submit" style={{
                            backgroundColor: '#8e44ad',
                            color: '#fff',
                            border: 'none',
                            padding: '15px 30px',
                            fontSize: '18px',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                            width: '100%'
                        }}>
                            Login
                        </button>
                    </form>
                </div>
            </div>

            <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
                <p>© 2024 DiGimarketingPRO. All rights reserved to Priyadharshini R.</p>
                <p><a href="mailto:727723eucs175@skcet.ac.in" style={{ color: 'white' }}>727723eucs175@skcet.ac.in</a></p>
            </footer>
        </div>
    );
}

export default Login;
