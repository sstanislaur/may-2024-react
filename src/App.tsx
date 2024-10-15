import React, { useState } from 'react';
import { Post } from './services/userService';
import Users from './components/Users';
import { getUserPosts } from './services/userService';

const App: React.FC = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);

    const handleUserSelect = async (userId: number) => {
        setSelectedUserId(userId);
        const userPosts = await getUserPosts(userId);
        setPosts(userPosts);
    };

    return (
        <div>
            <h1>Users</h1>
            <Users onUserSelect={handleUserSelect} />

            {selectedUserId && (
                <div>
                    <h2>Posts by User {selectedUserId}</h2>
                    {posts.length > 0 ? (
                        <ul>
                            {posts.map((post) => (
                                <li key={post.id}>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No posts found for this user.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
