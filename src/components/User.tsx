import React from 'react';
import { User } from '../services/userService';

interface UserProps {
    user: User;
    onUserSelect: (userId: number) => void;
}

const UserComponent: React.FC<UserProps> = ({ user, onUserSelect }) => {
    return (
        <li>
            <p>
                {user.firstName} {user.lastName}
            </p>
            <button onClick={() => onUserSelect(user.id)}>View Posts</button>
        </li>
    );
};

export default UserComponent;
