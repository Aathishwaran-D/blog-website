// src/components/ViewPost.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await axios.get('http://localhost:8001/posts');
            setPosts(res.data);
        } catch (err) {
            console.error('Failed to fetch posts:', err);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>All Blog Posts</h2>
            {posts.length === 0 ? (
                <p style={{ textAlign: 'center' }}>No posts found.</p>
            ) : (
                <table border="1" cellPadding="10" style={{ margin: '0 auto', marginTop: '20px', width: '90%' }}>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Author</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                            <td>{post.author}</td>
                            <td>{new Date(post.createdAt).toLocaleString()}</td>
                            <td>{new Date(post.updatedAt).toLocaleString()}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ViewPost;
