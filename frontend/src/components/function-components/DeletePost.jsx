import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeletePost = () => {
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

    const handleDelete = async (postId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this post?');
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:8001/posts/${postId}`);
            alert('Post deleted successfully!');
            fetchPosts(); // Refresh list
        } catch (err) {
            console.error('Failed to delete post:', err);
            alert('Failed to delete post.');
        }
    };

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Delete Posts</h2>
            <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '20px' }}>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Author</th>
                    <th>Created At</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {posts.length === 0 ? (
                    <tr>
                        <td colSpan="5" style={{ textAlign: 'center' }}>No posts found.</td>
                    </tr>
                ) : (
                    posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                            <td>{post.author}</td>
                            <td>{new Date(post.createdAt).toLocaleString()}</td>
                            <td>
                                <button
                                    onClick={() => handleDelete(post.id)}
                                    style={{ padding: '6px 12px', backgroundColor: 'red', color: 'white', border: 'none' }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default DeletePost;
