import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import axios from 'axios'; // Import Axios

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Password confirmation check
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const newUser = {
                username,
                email,
                password
            };

            // Send a POST request to save the new user
            const response = await axios.post('http://localhost:5000/users', newUser);

            console.log('Signup submitted:', response.data);
            // After successful signup, navigate to home page
            navigate('/home');
        } catch (error) {
            console.error('There was an error signing up!', error);
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
                        <li><Link to="/" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>Home</Link></li>
                        <li><Link to="/log" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>Login</Link></li>
                    </ul>
                </nav>
            </header>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
            }}>
                <div style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: '40px',
                    borderRadius: '10px',
                    width: '300px',
                    border: '2px solid #00ffff',
                    margin: '40px'
                }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#8e44ad', fontSize: '28px' }}>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', color: '#fff' }}>Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px', color: '#fff' }}>Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>

            <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
                <p>© 2024 DiGimarketingPRO. All rights reserved to Priyadharshini R.</p>
                <p><a href="mailto:727723eucs175@skcet.ac.in" style={{ color: 'white' }}>727723eucs175@skcet.ac.in</a></p>
                <div style={{ margin: '20px 0' }}>
                    <a href="https://www.facebook.com" style={{ margin: '0 15px', color: 'white', fontSize: '24px' }}><FaFacebook /></a>
                    <a href="https://www.twitter.com" style={{ margin: '0 15px', color: 'white', fontSize: '24px' }}><FaTwitter /></a>
                    <a href="https://www.instagram.com" style={{ margin: '0 15px', color: 'white', fontSize: '24px' }}><FaInstagram /></a>
                    <a href="https://www.linkedin.com" style={{ margin: '0 15px', color: 'white', fontSize: '24px' }}><FaLinkedin /></a>
                </div>
                <div style={{ margin: '20px 0' }}>
                    <a href="/about" style={{ margin: '0 15px', color: 'white' }}>About Us</a>
                    <a href="/services" style={{ margin: '0 15px', color: 'white' }}>Services</a>
                    <a href="/contact" style={{ margin: '0 15px', color: 'white' }}>Contact</a>
                    <a href="/privacy" style={{ margin: '0 15px', color: 'white' }}>Privacy Policy</a>
                </div>
            </footer>
        </div>
    );
}

export default SignUp;
