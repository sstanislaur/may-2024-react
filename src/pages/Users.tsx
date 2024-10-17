import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    email: string;
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
