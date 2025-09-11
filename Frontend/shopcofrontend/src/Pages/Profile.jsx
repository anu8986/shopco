import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                {/* Profile Image */}
                <Avatar
                    alt={user?.Name || "John Doe"}
                    src={user?.Avatar || "/static/images/avatar/1.jpg"}
                    sx={{ width: 56, height: 56 }}
                />

                {/* User Info */}
                <h2 style={styles.name}>{user?.Name || "John Doe"}</h2>
                <p style={styles.email}><strong>Email:</strong> {user?.Email || "johndoe@example.com"}</p>
                <p style={styles.contact}><strong>Contact:</strong> {user?.ContactNumber || "+91 1234567890"}</p>

                {/* Logout Button */}
                <Button variant="contained" color="primary" onClick={handleLogout}>
                    Log out
                </Button>
            </div>
        </div>
    );
};

// Inline styles
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
    },
    card: {
        width: '350px',
        padding: '25px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        textAlign: 'start',
    },
    name: {
        fontSize: '1.8rem',
        marginBottom: '10px',
    },
    email: {
        color: '#555',
        marginBottom: '8px',
    },
    contact: {
        color: '#555',
        marginBottom: '8px',
    },
};

export default Profile;
