import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './CreatePost.css';

const CreatePost= ({ onPostCreated }) => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: ''
    });
    const [posts, setPosts] = useState([]);
    // Load posts when component loads
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postPayload = {
            ...formData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        try {
            const response = await axios.post('http://localhost:8001/posts', postPayload);
            if (onPostCreated) onPostCreated(response.data);
            alert('Post created successfully!');
            setFormData({ title: '', content: '', author: '' });
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post.');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: '0 auto' }}>
                <h2>Create Post</h2>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <textarea
                    name="content"
                    placeholder="Content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                    style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
            </form>
            <hr/>
            <h2 style={{ textAlign: 'center' }}>All Posts</h2>
            <table border="1" cellPadding="10" style={{ margin: '0 auto', marginTop: '20px' }}>
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
            </table >
        </>
    );
};

export default CreatePost;
