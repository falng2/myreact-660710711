import React from 'react';
import profile from './img/nahIwin.png';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src={profile}
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            border: '2px solid #212c5aff'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#252f5eff', margin: '10px 0' }}>
        Thanaset
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
        Greatest Haxxer of the world
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #4080f7ff',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#a2c2fdff',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;