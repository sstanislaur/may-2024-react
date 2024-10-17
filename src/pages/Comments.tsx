import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Comment {
    id: number;
    name: string;
    body: string;
}

const Comments: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => setComments(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Comments</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h4>{comment.name}</h4>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;
