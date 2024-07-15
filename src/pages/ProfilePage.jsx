import React from 'react';
import UserProfile from '../components/UserProfile';

const ProfilePage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">My Profile</h1>
            <UserProfile />
        </div>
    );
};

export default ProfilePage;
