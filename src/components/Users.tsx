import React, { useEffect, useState } from 'react';
import { User, getUsers } from '../services/userService';
import UserComponent from './User';

interface UsersProps {
    onUserSelect: (userId: number) => void;
}

const Users: React.FC<UsersProps> = ({ onUserSelect }) => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await getUsers();
            setUsers(usersData);
        };

        fetchUsers();
    }, []);

    return (
        <ul>
            {users.map((user) => (
                <UserComponent key={user.id} user={user} onUserSelect={onUserSelect} />
            ))}
        </ul>
    );
};

export default Users;
